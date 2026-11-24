
import { useCallback, useEffect, useState } from "react";
import {
  CalendarDays,
  Eye,
  FileText,
  Plus,
  RefreshCw,
  Pencil,
  Trash2,
} from "lucide-react";

import PrescriptionForm from "./PrescriptionForm";
import PrescriptionDetails from "./PrescriptionDetails";

import type {
  ExaminationRecord,
  PrescriptionRecord,
} from "./prescription.types";

import "./Prescriptions.css";

type PrescriptionsProps = {
  customerId: string;
};

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

function formatPower(value: number | null | undefined) {
  if (value === null || value === undefined) return "—";

  return `${value > 0 ? "+" : ""}${value.toFixed(2)}`;
}

function Prescriptions({ customerId }: PrescriptionsProps) {
  const [prescriptions, setPrescriptions] = useState<
    PrescriptionRecord[]
  >([]);

  const [examinations, setExaminations] = useState<
    ExaminationRecord[]
  >([]);

  const [selectedPrescription, setSelectedPrescription] =
    useState<PrescriptionRecord | null>(null);

  const [editingPrescription, setEditingPrescription] =
    useState<PrescriptionRecord | null>(null);

  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");

  const loadPrescriptions = useCallback(async () => {
    if (!customerId) return;

    setLoading(true);
    setError("");

    try {
      const [prescriptionRecords, examinationRecords] =
        await Promise.all([
          window.prescriptionAPI.getByCustomer(customerId),
          window.eyeExaminationAPI.getByCustomer(customerId),
        ]);

      setPrescriptions(prescriptionRecords);
      setExaminations(examinationRecords);
    } catch (err) {
      console.error("Failed to load prescription records:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load prescription history."
      );
    } finally {
      setLoading(false);
    }
  }, [customerId]);

  useEffect(() => {
    void loadPrescriptions();
  }, [loadPrescriptions]);

  const handleNewPrescription = () => {
    setSelectedPrescription(null);
    setEditingPrescription(null);
    setActionError("");
    setShowForm(true);
  };

  const handleEditPrescription = (
    prescription: PrescriptionRecord
  ) => {
    setSelectedPrescription(null);
    setEditingPrescription(prescription);
    setActionError("");
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingPrescription(null);
    setActionError("");
  };

  const handleSaved = async () => {
    setShowForm(false);
    setEditingPrescription(null);
    setSelectedPrescription(null);
    setActionError("");

    await loadPrescriptions();
  };

  const handleDeletePrescription = async (id: string) => {
    try {
      setActionError("");

      await window.prescriptionAPI.delete(id);

      setSelectedPrescription(null);
      setEditingPrescription(null);
      setShowForm(false);

      await loadPrescriptions();
    } catch (err) {
      console.error("Failed to delete prescription:", err);

      setActionError(
        err instanceof Error
          ? err.message
          : "Unable to delete prescription."
      );
    }
  };

  // New or edit prescription form
  if (showForm) {
    return (
      <PrescriptionForm
        customerId={customerId}
        prescription={editingPrescription}
        examinations={examinations}
        onCancel={handleCancelForm}
        onSaved={handleSaved}
      />
    );
  }

  // Complete prescription details
  if (selectedPrescription) {
    return (
      <PrescriptionDetails
        prescription={selectedPrescription}
        onBack={() => setSelectedPrescription(null)}
        onEdit={() =>
          handleEditPrescription(selectedPrescription)
        }
        onDelete={handleDeletePrescription}
      />
    );
  }

  return (
    <div className="prescriptions-page">
      <div className="prescriptions-header">
        <div>
          <h2>Prescription History</h2>
          <p>
            View and manage the customer's in-house and external
            prescriptions.
          </p>
        </div>

        <button
          type="button"
          className="prescription-add-button"
          onClick={handleNewPrescription}
        >
          <Plus size={18} />
          Add Prescription
        </button>
      </div>

      <div className="prescription-history-summary">
        <div className="prescription-summary-icon">
          <FileText size={22} />
        </div>

        <div>
          <span>Total Prescriptions</span>
          <strong>
            {loading ? "..." : prescriptions.length}
          </strong>
        </div>
      </div>

      {actionError && (
        <div className="prescription-error">
          {actionError}
        </div>
      )}

      {loading ? (
        <div className="prescription-loading">
          <RefreshCw
            size={22}
            className="prescription-loading-icon"
          />
          <p>Loading prescription history...</p>
        </div>
      ) : error ? (
        <div className="prescription-error-state">
          <p>{error}</p>

          <button
            type="button"
            onClick={() => void loadPrescriptions()}
          >
            Try Again
          </button>
        </div>
      ) : prescriptions.length === 0 ? (
        <div className="prescription-empty-state">
          <div className="prescription-empty-icon">
            <FileText size={34} />
          </div>

          <h3>No Prescriptions Found</h3>

          <p>
            This customer does not have any prescription records yet.
            Add an in-house prescription or record one from an
            external doctor.
          </p>

          <button
            type="button"
            className="prescription-add-button"
            onClick={handleNewPrescription}
          >
            <Plus size={17} />
            Add First Prescription
          </button>
        </div>
      ) : (
        <div className="prescription-history-list">
          {prescriptions.map((prescription, index) => (
            <article
              className="prescription-history-card"
              key={prescription.id}
            >
              <div className="prescription-card-header">
                <div className="prescription-card-date">
                  <CalendarDays size={18} />

                  <div>
                    <span>Prescription Date</span>
                    <strong>
                      {formatDate(prescription.prescriptionDate)}
                    </strong>
                  </div>
                </div>

                <div className="prescription-card-header-right">
                  <span className="prescription-number">
                    Prescription #{prescriptions.length - index}
                  </span>

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
              </div>

              <div className="prescription-card-details">
                <div>
                  <span>Doctor / Examiner</span>
                  <strong>
                    {prescription.doctorName || "Not recorded"}
                  </strong>
                </div>

                <div>
                  <span>Clinic / Hospital</span>
                  <strong>
                    {prescription.clinicName || "Not recorded"}
                  </strong>
                </div>

                <div>
                  <span>Expiry Date</span>
                  <strong>
                    {formatDate(prescription.expiryDate)}
                  </strong>
                </div>
              </div>

              <div className="prescription-card-refraction">
                <h4>Refraction Summary</h4>

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
                        <td>{prescription.axisRight ?? "—"}</td>
                        <td>{formatPower(prescription.addRight)}</td>
                      </tr>

                      <tr>
                        <td>Left (OS)</td>
                        <td>{formatPower(prescription.sphLeft)}</td>
                        <td>{formatPower(prescription.cylLeft)}</td>
                        <td>{prescription.axisLeft ?? "—"}</td>
                        <td>{formatPower(prescription.addLeft)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="prescription-card-actions">
                <button
                  type="button"
                  className="prescription-view-button"
                  onClick={() =>
                    setSelectedPrescription(prescription)
                  }
                >
                  <Eye size={16} />
                  View Details
                </button>

                <button
                  type="button"
                  className="prescription-edit-button"
                  onClick={() =>
                    handleEditPrescription(prescription)
                  }
                >
                  <Pencil size={16} />
                  Edit
                </button>

                <button
                  type="button"
                  className="prescription-delete-button"
                  onClick={() =>
                    void handleDeletePrescription(prescription.id)
                  }
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Prescriptions;
