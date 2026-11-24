
import { useEffect, useState } from "react";
import { ArrowLeft, Save, FileText } from "lucide-react";

import type {
  ExaminationRecord,
  PrescriptionFormProps,
  PrescriptionFormValues,
} from "./prescription.types";

import "./Prescriptions.css";

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

const getInitialValues = (): PrescriptionFormValues => ({
  source: "IN_HOUSE",
  examinationId: "",

  doctorName: "",
  clinicName: "",

  prescriptionDate: getTodayDate(),
  expiryDate: "",

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

  notes: "",
});

function formatExaminationLabel(exam: ExaminationRecord) {
  const date = formatDateForInput(exam.examinationDate);

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Undated examination";

  return `${formattedDate} - ${exam.examinedBy || "Examiner not recorded"}`;
}

function PrescriptionForm({
  customerId,
  prescription,
  examinations,
  onCancel,
  onSaved,
}: PrescriptionFormProps) {
  const [form, setForm] = useState<PrescriptionFormValues>(
    getInitialValues
  );

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!prescription) {
      setForm(getInitialValues());
      setError("");
      return;
    }

    setForm({
      source: prescription.source,
      examinationId: prescription.examinationId ?? "",

      doctorName: prescription.doctorName ?? "",
      clinicName: prescription.clinicName ?? "",

      prescriptionDate: formatDateForInput(
        prescription.prescriptionDate
      ),
      expiryDate: formatDateForInput(prescription.expiryDate),

      sphRight: prescription.sphRight?.toString() ?? "",
      cylRight: prescription.cylRight?.toString() ?? "",
      axisRight: prescription.axisRight?.toString() ?? "",
      addRight: prescription.addRight?.toString() ?? "",

      sphLeft: prescription.sphLeft?.toString() ?? "",
      cylLeft: prescription.cylLeft?.toString() ?? "",
      axisLeft: prescription.axisLeft?.toString() ?? "",
      addLeft: prescription.addLeft?.toString() ?? "",

      pdDistance: prescription.pdDistance?.toString() ?? "",
      pdNear: prescription.pdNear?.toString() ?? "",

      notes: prescription.notes ?? "",
    });

    setError("");
  }, [prescription]);

  const handleChange = (
    field: keyof PrescriptionFormValues,
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

  const handleSourceChange = (
    source: "IN_HOUSE" | "EXTERNAL"
  ) => {
    setForm((previous) => ({
      ...previous,
      source,
      examinationId: "",
      ...(source === "EXTERNAL"
        ? {
            doctorName: "",
            clinicName: "",
          }
        : {}),
    }));
  };

  const handleExaminationSelect = (examinationId: string) => {
    const examination = examinations.find(
      (item) => item.id === examinationId
    );

    if (!examination) {
      setForm((previous) => ({
        ...previous,
        examinationId: "",
      }));
      return;
    }

    setForm((previous) => ({
      ...previous,

      examinationId: examination.id,

      prescriptionDate:
        formatDateForInput(examination.examinationDate) ||
        previous.prescriptionDate,

      doctorName: examination.examinedBy ?? "",

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
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (saving) return;

    if (
      form.source === "IN_HOUSE" &&
      !form.examinationId
    ) {
      setError("Please select an eye examination.");
      return;
    }

    if (!form.prescriptionDate) {
      setError("Please enter the prescription date.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const prescriptionFields = {
        source: form.source,

        examinationId:
          form.source === "IN_HOUSE"
            ? form.examinationId
            : null,

        doctorName: form.doctorName.trim() || null,
        clinicName: form.clinicName.trim() || null,

        prescriptionDate: form.prescriptionDate,
        expiryDate: form.expiryDate || null,

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

        notes: form.notes.trim() || null,
      };

      if (prescription) {
        await window.prescriptionAPI.update({
          id: prescription.id,
          ...prescriptionFields,
        });
      } else {
        await window.prescriptionAPI.create({
          id: crypto.randomUUID(),
          customerId,
          ...prescriptionFields,
        });
      }

      onSaved();
    } catch (err) {
      console.error("Failed to save prescription:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to save prescription. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const renderInput = (
    label: string,
    field: keyof PrescriptionFormValues,
    type = "text",
    placeholder = ""
  ) => (
    <label className="prescription-field">
      <span>{label}</span>

      <input
        type={type}
        step={type === "number" ? "any" : undefined}
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
    <section className="prescription-form-section">
      <h3>{title}</h3>

      <div className="prescription-form-grid four-columns">
        {renderInput("SPH", `sph${side}`, "number", "0.00")}
        {renderInput("CYL", `cyl${side}`, "number", "0.00")}
        {renderInput("Axis", `axis${side}`, "number", "0")}
        {renderInput("ADD", `add${side}`, "number", "0.00")}
      </div>
    </section>
  );

  return (
    <div className="prescription-form-page">
      <div className="prescription-form-header">
        <button
          type="button"
          className="prescription-back-button"
          onClick={onCancel}
          disabled={saving}
        >
          <ArrowLeft size={18} />
          Back to Prescriptions
        </button>

        <div>
          <h2>
            {prescription
              ? "Edit Prescription"
              : "New Prescription"}
          </h2>

          <p>
            {prescription
              ? "Update the customer's prescription details."
              : "Record an in-house or external prescription."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <section className="prescription-form-section">
          <h3>
            <FileText size={18} />
            Prescription Source
          </h3>

          <div className="prescription-source-options">
            <label>
              <input
                type="radio"
                name="prescriptionSource"
                checked={form.source === "IN_HOUSE"}
                onChange={() => handleSourceChange("IN_HOUSE")}
              />
              <span>
                <strong>In-house</strong>
                <small>From an examination recorded in OptiMate</small>
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="prescriptionSource"
                checked={form.source === "EXTERNAL"}
                onChange={() => handleSourceChange("EXTERNAL")}
              />
              <span>
                <strong>External</strong>
                <small>From another doctor or clinic</small>
              </span>
            </label>
          </div>

          {form.source === "IN_HOUSE" ? (
            <div className="prescription-form-grid">
              <label className="prescription-field">
                <span>Select Eye Examination</span>

                <select
                  value={form.examinationId}
                  onChange={(event) =>
                    handleExaminationSelect(event.target.value)
                  }
                  required
                >
                  <option value="">Choose an examination</option>

                  {examinations.map((exam) => (
                    <option key={exam.id} value={exam.id}>
                      {formatExaminationLabel(exam)}
                    </option>
                  ))}
                </select>
              </label>

              {examinations.length === 0 && (
                <p className="prescription-info-message">
                  No in-house examinations found for this customer.
                  You can still add an external prescription.
                </p>
              )}
            </div>
          ) : (
            <div className="prescription-form-grid">
              {renderInput("Doctor Name", "doctorName")}
              {renderInput("Clinic / Hospital Name", "clinicName")}
            </div>
          )}
        </section>

        <section className="prescription-form-section">
          <h3>Prescription Information</h3>

          <div className="prescription-form-grid">
            {renderInput(
              "Prescription Date",
              "prescriptionDate",
              "date"
            )}

            {renderInput(
              "Expiry Date",
              "expiryDate",
              "date"
            )}

            {form.source === "IN_HOUSE" &&
              renderInput("Examined By", "doctorName")}
          </div>
        </section>

        <div className="prescription-refraction-heading">
          <h3>Refraction Details</h3>
          <p>
            {form.source === "IN_HOUSE"
              ? "Values are copied from the selected examination. You can review and edit them before saving."
              : "Enter the values from the external prescription."}
          </p>
        </div>

        {renderEyeSection("Right Eye (OD)", "Right")}
        {renderEyeSection("Left Eye (OS)", "Left")}

        <section className="prescription-form-section">
          <h3>Pupillary Distance (PD)</h3>

          <div className="prescription-form-grid">
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

        <section className="prescription-form-section">
          <h3>Additional Notes</h3>

          <label className="prescription-field">
            <span>Notes</span>

            <textarea
              rows={4}
              value={form.notes}
              onChange={(event) =>
                handleChange("notes", event.target.value)
              }
              placeholder="Enter any additional prescription notes..."
            />
          </label>
        </section>

        {error && (
          <div className="prescription-error">
            {error}
          </div>
        )}

        <div className="prescription-form-actions">
          <button
            type="button"
            className="prescription-cancel-button"
            onClick={onCancel}
            disabled={saving}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="prescription-save-button"
            disabled={saving}
          >
            <Save size={17} />
            {saving
              ? "Saving..."
              : prescription
                ? "Update Prescription"
                : "Save Prescription"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PrescriptionForm;
