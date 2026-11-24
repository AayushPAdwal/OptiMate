
import { useEffect, useState } from "react";
import { ArrowLeft, Save } from "lucide-react";

import "./ExaminationForm.css";

import type {
  ExaminationFormProps,
  ExaminationFormValues,
} from "./examination.types";

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDateForInput(value: Date | string | null | undefined) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const getInitialValues = (): ExaminationFormValues => ({
  examinationDate: getTodayDate(),
  examinedBy: "",
  chiefComplaints: "",

  unaidedVisionRight: "",
  correctedVisionRight: "",
  pinholeVisionRight: "",
  finalVisionRight: "",

  unaidedVisionLeft: "",
  correctedVisionLeft: "",
  pinholeVisionLeft: "",
  finalVisionLeft: "",

  sphRight: "",
  cylRight: "",
  axisRight: "",
  addRight: "",

  sphLeft: "",
  cylLeft: "",
  axisLeft: "",
  addLeft: "",

  pdDistance: "",
  pdNear: "",
  iopRight: "",
  iopLeft: "",

  nearVisionRight: "",
  nearVisionLeft: "",

  examinationFindings: "",
  recommendations: "",
  followUpDate: "",
});

function ExaminationForm({
  customerId,
  examination,
  onCancel,
  onSaved,
}: ExaminationFormProps) {
  const [form, setForm] = useState<ExaminationFormValues>(() =>
    getInitialValues()
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load existing examination values when editing.
  useEffect(() => {
    if (!examination) {
      setForm(getInitialValues());
      return;
    }

    setForm({
      examinationDate: formatDateForInput(
        examination.examinationDate
      ),
      examinedBy: examination.examinedBy ?? "",
      chiefComplaints: examination.chiefComplaints ?? "",

      unaidedVisionRight: examination.unaidedVisionRight ?? "",
      correctedVisionRight: examination.correctedVisionRight ?? "",
      pinholeVisionRight: examination.pinholeVisionRight ?? "",
      finalVisionRight: examination.finalVisionRight ?? "",

      unaidedVisionLeft: examination.unaidedVisionLeft ?? "",
      correctedVisionLeft: examination.correctedVisionLeft ?? "",
      pinholeVisionLeft: examination.pinholeVisionLeft ?? "",
      finalVisionLeft: examination.finalVisionLeft ?? "",

      sphRight: examination.sphRight?.toString() ?? "",
      cylRight: examination.cylRight?.toString() ?? "",
      axisRight: examination.axisRight?.toString() ?? "",
      addRight: examination.addRight?.toString() ?? "",

      sphLeft: examination.sphLeft?.toString() ?? "",
      cylLeft: examination.cylLeft?.toString() ?? "",
      axisLeft: examination.axisLeft?.toString() ?? "",
      addLeft: examination.addLeft?.toString() ?? "",

      pdDistance: examination.pdDistance?.toString() ?? "",
      pdNear: examination.pdNear?.toString() ?? "",
      iopRight: examination.iopRight?.toString() ?? "",
      iopLeft: examination.iopLeft?.toString() ?? "",

      nearVisionRight: examination.nearVisionRight ?? "",
      nearVisionLeft: examination.nearVisionLeft ?? "",

      examinationFindings: examination.examinationFindings ?? "",
      recommendations: examination.recommendations ?? "",
      followUpDate: formatDateForInput(examination.followUpDate),
    });

    setError("");
  }, [examination]);

  const handleChange = (
    field: keyof ExaminationFormValues,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const toNumber = (value: string): number | null => {
    if (value.trim() === "") return null;

    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (saving) return;

    setSaving(true);
    setError("");

    try {
      const examinationFields = {
        examinationDate: form.examinationDate,
        examinedBy: form.examinedBy.trim() || null,
        chiefComplaints: form.chiefComplaints.trim() || null,

        unaidedVisionRight: form.unaidedVisionRight || null,
        correctedVisionRight: form.correctedVisionRight || null,
        pinholeVisionRight: form.pinholeVisionRight || null,
        finalVisionRight: form.finalVisionRight || null,

        unaidedVisionLeft: form.unaidedVisionLeft || null,
        correctedVisionLeft: form.correctedVisionLeft || null,
        pinholeVisionLeft: form.pinholeVisionLeft || null,
        finalVisionLeft: form.finalVisionLeft || null,

        sphRight: toNumber(form.sphRight),
        cylRight: toNumber(form.cylRight),
        axisRight: toNumber(form.axisRight),
        addRight: toNumber(form.addRight),

        sphLeft: toNumber(form.sphLeft),
        cylLeft: toNumber(form.cylLeft),
        axisLeft: toNumber(form.axisLeft),
        addLeft: toNumber(form.addLeft),

        pdDistance: toNumber(form.pdDistance),
        pdNear: toNumber(form.pdNear),
        iopRight: toNumber(form.iopRight),
        iopLeft: toNumber(form.iopLeft),

        nearVisionRight: form.nearVisionRight || null,
        nearVisionLeft: form.nearVisionLeft || null,

        examinationFindings:
          form.examinationFindings.trim() || null,

        recommendations: form.recommendations.trim() || null,
        followUpDate: form.followUpDate || null,
      };

      if (examination) {
        // Update the existing examination.
        await window.eyeExaminationAPI.update({
          id: examination.id,
          ...examinationFields,
        });
      } else {
        // Create a new examination.
        await window.eyeExaminationAPI.create({
          id: crypto.randomUUID(),
          customerId,
          ...examinationFields,
        });
      }

      onSaved();
    } catch (err) {
      console.error("Failed to save examination:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to save examination. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const renderInput = (
    label: string,
    field: keyof ExaminationFormValues,
    type = "text",
    placeholder = ""
  ) => (
    <label className="exam-field">
      <span>{label}</span>

      <input
        type={type}
        value={form[field]}
        placeholder={placeholder}
        onChange={(event) =>
          handleChange(field, event.target.value)
        }
      />
    </label>
  );

  const renderEyeSection = (
    title: string,
    side: "Right" | "Left"
  ) => (
    <section className="exam-section">
      <h3>{title}</h3>

      <div className="exam-grid">
        {renderInput("Unaided VA", `unaidedVision${side}`)}
        {renderInput("Corrected VA", `correctedVision${side}`)}
        {renderInput("Pinhole VA", `pinholeVision${side}`)}
        {renderInput("Final VA", `finalVision${side}`)}
      </div>

      <h4>Refraction</h4>

      <div className="exam-grid four-columns">
        {renderInput("SPH", `sph${side}`, "number", "0.00")}
        {renderInput("CYL", `cyl${side}`, "number", "0.00")}
        {renderInput("Axis", `axis${side}`, "number", "0")}
        {renderInput("ADD", `add${side}`, "number", "0.00")}
      </div>

      <div className="exam-grid">
        {renderInput(
          "Near Vision",
          `nearVision${side}`,
          "text",
          "e.g. N6"
        )}

        {renderInput(
          "IOP (mmHg)",
          `iop${side}`,
          "number",
          "e.g. 16"
        )}
      </div>
    </section>
  );

  return (
    <div className="examination-form-page">
      <div className="exam-page-header">
        <button
          type="button"
          className="exam-back-button"
          onClick={onCancel}
          disabled={saving}
        >
          <ArrowLeft size={18} />
          Back to Examination
        </button>

        <div>
          <h2>
            {examination ? "Edit Eye Examination" : "New Eye Examination"}
          </h2>

          <p>
            {examination
              ? "Update the customer's existing examination details."
              : "Record the customer's eye examination details."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <section className="exam-section">
          <h3>Examination Details</h3>

          <div className="exam-grid">
            {renderInput(
              "Examination Date",
              "examinationDate",
              "date"
            )}

            {renderInput("Examined By", "examinedBy")}
          </div>

          <label className="exam-field">
            <span>Chief Complaints</span>

            <textarea
              value={form.chiefComplaints}
              onChange={(event) =>
                handleChange("chiefComplaints", event.target.value)
              }
              placeholder="Describe the customer's complaints..."
              rows={3}
            />
          </label>
        </section>

        {renderEyeSection("Right Eye (OD)", "Right")}
        {renderEyeSection("Left Eye (OS)", "Left")}

        <section className="exam-section">
          <h3>Pupillary Distance (PD)</h3>

          <div className="exam-grid">
            {renderInput(
              "Distance PD (mm)",
              "pdDistance",
              "number",
              "e.g. 63"
            )}

            {renderInput(
              "Near PD (mm)",
              "pdNear",
              "number",
              "e.g. 60"
            )}
          </div>
        </section>

        <section className="exam-section">
          <h3>Clinical Findings</h3>

          <label className="exam-field">
            <span>Examination Findings</span>

            <textarea
              rows={4}
              value={form.examinationFindings}
              onChange={(event) =>
                handleChange("examinationFindings", event.target.value)
              }
              placeholder="Enter clinical observations..."
            />
          </label>

          <label className="exam-field">
            <span>Recommendations</span>

            <textarea
              rows={3}
              value={form.recommendations}
              onChange={(event) =>
                handleChange("recommendations", event.target.value)
              }
              placeholder="Enter recommendations..."
            />
          </label>

          <div className="exam-grid">
            {renderInput(
              "Follow-up Date",
              "followUpDate",
              "date"
            )}
          </div>
        </section>

        {error && <div className="exam-error">{error}</div>}

        <div className="exam-form-actions">
          <button
            type="button"
            className="exam-cancel-button"
            onClick={onCancel}
            disabled={saving}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="exam-save-button"
            disabled={saving}
          >
            <Save size={17} />

            {saving
              ? "Saving..."
              : examination
                ? "Update Examination"
                : "Save Examination"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExaminationForm;
