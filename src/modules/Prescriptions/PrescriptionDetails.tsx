
import {
  ArrowLeft,
  CalendarDays,
  ClipboardList,
  FileText,
  Pencil,
  Trash2,
  UserRound,
} from "lucide-react";

import type {
  PrescriptionDetailsProps,
} from "./prescription.types";

import "./Prescriptions.css";

function formatDate(value: Date | string | null | undefined) {
  if (!value) return "Not recorded";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Not recorded";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatValue(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  return String(value);
}

function formatPower(value: number | null | undefined) {
  if (value === null || value === undefined) return "—";

  return `${value > 0 ? "+" : ""}${value.toFixed(2)}`;
}

function PrescriptionDetails({
  prescription,
  onBack,
  onEdit,
  onDelete,
}: PrescriptionDetailsProps) {
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this prescription? This action cannot be undone."
    );

    if (confirmed) {
      onDelete(prescription.id);
    }
  };

  return (
    <div className="prescription-details-page">
      <div className="prescription-details-toolbar">
        <button
          type="button"
          className="prescription-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back to History
        </button>

        <div className="prescription-details-actions">
          <button
            type="button"
            className="prescription-edit-button"
            onClick={onEdit}
          >
            <Pencil size={16} />
            Edit Prescription
          </button>

          <button
            type="button"
            className="prescription-delete-button"
            onClick={handleDelete}
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>

      <div className="prescription-details-heading">
        <div className="prescription-details-icon">
          <FileText size={28} />
        </div>

        <div>
          <h2>Prescription Details</h2>
          <p>Complete customer prescription record</p>
        </div>

        <span
          className={`prescription-source-badge ${
            prescription.source === "IN_HOUSE"
              ? "in-house"
              : "external"
          }`}
        >
          {prescription.source === "IN_HOUSE"
            ? "In-house"
            : "External"}
        </span>
      </div>

      <section className="prescription-detail-section">
        <h3>
          <CalendarDays size={18} />
          Prescription Information
        </h3>

        <div className="prescription-detail-grid">
          <div>
            <span>Prescription Date</span>
            <strong>
              {formatDate(prescription.prescriptionDate)}
            </strong>
          </div>

          <div>
            <span>Expiry Date</span>
            <strong>{formatDate(prescription.expiryDate)}</strong>
          </div>

          <div>
            <span>Doctor / Examiner</span>
            <strong>{formatValue(prescription.doctorName)}</strong>
          </div>

          <div>
            <span>Clinic / Hospital</span>
            <strong>{formatValue(prescription.clinicName)}</strong>
          </div>

          {prescription.examinationId && (
            <div className="prescription-detail-full-width">
              <span>Linked Eye Examination ID</span>
              <strong>{prescription.examinationId}</strong>
            </div>
          )}
        </div>
      </section>

      <section className="prescription-detail-section">
        <h3>
          <UserRound size={18} />
          Refraction Details
        </h3>

        <div className="prescription-refraction-table-wrapper">
          <table className="prescription-refraction-table">
            <thead>
              <tr>
                <th>Eye</th>
                <th>SPH</th>
                <th>CYL</th>
                <th>Axis</th>
                <th>ADD</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Right (OD)</td>
                <td>{formatPower(prescription.sphRight)}</td>
                <td>{formatPower(prescription.cylRight)}</td>
                <td>{formatValue(prescription.axisRight)}</td>
                <td>{formatPower(prescription.addRight)}</td>
              </tr>

              <tr>
                <td>Left (OS)</td>
                <td>{formatPower(prescription.sphLeft)}</td>
                <td>{formatPower(prescription.cylLeft)}</td>
                <td>{formatValue(prescription.axisLeft)}</td>
                <td>{formatPower(prescription.addLeft)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="prescription-detail-section">
        <h3>
          <ClipboardList size={18} />
          Additional Measurements
        </h3>

        <div className="prescription-detail-grid">
          <div>
            <span>Distance PD</span>
            <strong>
              {formatValue(prescription.pdDistance)}
            </strong>
          </div>

          <div>
            <span>Near PD</span>
            <strong>{formatValue(prescription.pdNear)}</strong>
          </div>
        </div>
      </section>

      <section className="prescription-detail-section">
        <h3>
          <FileText size={18} />
          Additional Notes
        </h3>

        <div className="prescription-detail-grid">
          <div className="prescription-detail-full-width">
            <span>Notes</span>
            <p>{formatValue(prescription.notes)}</p>
          </div>
        </div>
      </section>

      <p className="prescription-record-id">
        Prescription ID: {prescription.id}
      </p>
    </div>
  );
}

export default PrescriptionDetails;
