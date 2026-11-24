
import { useCallback, useEffect, useState } from "react";
import {
  Activity,
  ArrowLeft,
  CalendarDays,
  ClipboardList,
  Eye,
  FileText,
  Pencil,
  Plus,
  RefreshCw,
} from "lucide-react";

import "./EyeExaminations.css";

type ExaminationRecord = Awaited<
  ReturnType<typeof window.eyeExaminationAPI.getByCustomer>
>[number];

type EyeExaminationsProps = {
  customerId: string;
  onNewExamination: () => void;
  onEditExamination: (examination: ExaminationRecord) => void;
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

function formatValue(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  return String(value);
}

function formatPower(value: number | null) {
  if (value === null || value === undefined) return "—";

  return `${value > 0 ? "+" : ""}${value.toFixed(2)}`;
}

function EyeExaminations({
  customerId,
  onNewExamination,
  onEditExamination,
}: EyeExaminationsProps) {
  const [examinations, setExaminations] = useState<
    ExaminationRecord[]
  >([]);

  const [selectedExamination, setSelectedExamination] =
    useState<ExaminationRecord | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadExaminations = useCallback(async () => {
    if (!customerId) return;

    setLoading(true);
    setError("");

    try {
      const records =
        await window.eyeExaminationAPI.getByCustomer(customerId);

      setExaminations(records);
    } catch (err) {
      console.error("Failed to load examinations:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load examination history."
      );
    } finally {
      setLoading(false);
    }
  }, [customerId]);

  useEffect(() => {
    void loadExaminations();
  }, [loadExaminations]);

  // Complete examination details view
  if (selectedExamination) {
    const exam = selectedExamination;

    return (
      <div className="eye-examinations-page">
        <div className="examination-details-toolbar">
          <button
            type="button"
            className="examination-secondary-button"
            onClick={() => setSelectedExamination(null)}
          >
            <ArrowLeft size={17} />
            Back to History
          </button>

          <button
  type="button"
  className="new-examination-button"
  onClick={() => onEditExamination(exam)}
>
  <Pencil size={16} />
  Edit Examination
</button>
        </div>

        <div className="examination-details-heading">
          <div className="empty-examination-icon">
            <Eye size={28} />
          </div>

          <div>
            <h2>Examination Details</h2>
            <p>Complete clinical examination record</p>
          </div>
        </div>

        <section className="examination-detail-section">
          <h3><CalendarDays size={18} /> Examination Information</h3>

          <div className="examination-detail-grid">
            <div>
              <span>Examination Date</span>
              <strong>{formatDate(exam.examinationDate)}</strong>
            </div>

            <div>
              <span>Examined By</span>
              <strong>{formatValue(exam.examinedBy)}</strong>
            </div>

            <div className="detail-full-width">
              <span>Chief Complaints</span>
              <strong>{formatValue(exam.chiefComplaints)}</strong>
            </div>
          </div>
        </section>

        <section className="examination-detail-section">
          <h3><Eye size={18} /> Visual Acuity</h3>

          <div className="refraction-table-wrapper">
            <table className="refraction-table">
              <thead>
                <tr>
                  <th>Eye</th>
                  <th>Unaided</th>
                  <th>Corrected</th>
                  <th>Pinhole</th>
                  <th>Final Vision</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Right (OD)</td>
                  <td>{formatValue(exam.unaidedVisionRight)}</td>
                  <td>{formatValue(exam.correctedVisionRight)}</td>
                  <td>{formatValue(exam.pinholeVisionRight)}</td>
                  <td>{formatValue(exam.finalVisionRight)}</td>
                </tr>
                <tr>
                  <td>Left (OS)</td>
                  <td>{formatValue(exam.unaidedVisionLeft)}</td>
                  <td>{formatValue(exam.correctedVisionLeft)}</td>
                  <td>{formatValue(exam.pinholeVisionLeft)}</td>
                  <td>{formatValue(exam.finalVisionLeft)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="examination-detail-section">
          <h3><Activity size={18} /> Refraction</h3>

          <div className="refraction-table-wrapper">
            <table className="refraction-table">
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
                  <td>{formatPower(exam.sphRight)}</td>
                  <td>{formatPower(exam.cylRight)}</td>
                  <td>{formatValue(exam.axisRight)}</td>
                  <td>{formatPower(exam.addRight)}</td>
                </tr>
                <tr>
                  <td>Left (OS)</td>
                  <td>{formatPower(exam.sphLeft)}</td>
                  <td>{formatPower(exam.cylLeft)}</td>
                  <td>{formatValue(exam.axisLeft)}</td>
                  <td>{formatPower(exam.addLeft)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="examination-detail-section">
          <h3><ClipboardList size={18} /> Additional Measurements</h3>

          <div className="examination-detail-grid">
            <div>
              <span>Distance PD</span>
              <strong>{formatValue(exam.pdDistance)}</strong>
            </div>

            <div>
              <span>Near PD</span>
              <strong>{formatValue(exam.pdNear)}</strong>
            </div>

            <div>
              <span>IOP Right (OD)</span>
              <strong>{formatValue(exam.iopRight)}</strong>
            </div>

            <div>
              <span>IOP Left (OS)</span>
              <strong>{formatValue(exam.iopLeft)}</strong>
            </div>

            <div>
              <span>Near Vision Right (OD)</span>
              <strong>{formatValue(exam.nearVisionRight)}</strong>
            </div>

            <div>
              <span>Near Vision Left (OS)</span>
              <strong>{formatValue(exam.nearVisionLeft)}</strong>
            </div>
          </div>
        </section>

        <section className="examination-detail-section">
          <h3><FileText size={18} /> Clinical Notes</h3>

          <div className="examination-detail-grid">
            <div className="detail-full-width">
              <span>Examination Findings</span>
              <p>{formatValue(exam.examinationFindings)}</p>
            </div>

            <div className="detail-full-width">
              <span>Recommendations</span>
              <p>{formatValue(exam.recommendations)}</p>
            </div>

            <div>
              <span>Follow-up Date</span>
              <strong>{formatDate(exam.followUpDate)}</strong>
            </div>
          </div>
        </section>

        <p className="examination-record-id">
          Examination ID: {exam.id}
        </p>
      </div>
    );
  }

  return (
    <div className="eye-examinations-page">
      <div className="eye-examinations-header">
        <div>
          <h2>Eye Examination History</h2>
          <p>
            View and manage the customer's previous eye examinations.
          </p>
        </div>

        <button
          type="button"
          className="new-examination-button"
          onClick={onNewExamination}
        >
          <Plus size={18} />
          New Examination
        </button>
      </div>

      <div className="examination-history-summary">
        <div className="history-summary-icon">
          <Activity size={22} />
        </div>

        <div>
          <span>Total Examinations</span>
          <strong>{loading ? "..." : examinations.length}</strong>
        </div>
      </div>

      {loading ? (
        <div className="examination-loading">
          <RefreshCw size={22} className="loading-icon" />
          <p>Loading examination history...</p>
        </div>
      ) : error ? (
        <div className="examination-error-state">
          <p>{error}</p>
          <button
            type="button"
            onClick={() => void loadExaminations()}
          >
            Try Again
          </button>
        </div>
      ) : examinations.length === 0 ? (
        <div className="examination-empty-state">
          <div className="empty-examination-icon">
            <Eye size={34} />
          </div>

          <h3>No Examinations Found</h3>

          <p>
            This customer does not have any recorded in-house eye
            examinations yet.
          </p>

          <button
            type="button"
            className="new-examination-button"
            onClick={onNewExamination}
          >
            <Plus size={17} />
            Record First Examination
          </button>
        </div>
      ) : (
        <div className="examination-history-list">
          {examinations.map((exam, index) => (
            <article className="examination-history-card" key={exam.id}>
              <div className="examination-card-header">
                <div className="examination-card-date">
                  <CalendarDays size={18} />
                  <div>
                    <span>Examination Date</span>
                    <strong>{formatDate(exam.examinationDate)}</strong>
                  </div>
                </div>

                <span className="examination-number">
                  Examination #{examinations.length - index}
                </span>
              </div>

              <div className="examination-card-details">
                <div>
                  <span>Examined By</span>
                  <strong>{exam.examinedBy || "Not recorded"}</strong>
                </div>

                <div>
                  <span>Chief Complaints</span>
                  <strong>{exam.chiefComplaints || "Not recorded"}</strong>
                </div>
              </div>

              <div className="examination-refraction">
                <h4>Refraction Summary</h4>

                <div className="refraction-table-wrapper">
                  <table className="refraction-table">
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
                        <td>{formatPower(exam.sphRight)}</td>
                        <td>{formatPower(exam.cylRight)}</td>
                        <td>{exam.axisRight ?? "—"}</td>
                        <td>{formatPower(exam.addRight)}</td>
                      </tr>

                      <tr>
                        <td>Left (OS)</td>
                        <td>{formatPower(exam.sphLeft)}</td>
                        <td>{formatPower(exam.cylLeft)}</td>
                        <td>{exam.axisLeft ?? "—"}</td>
                        <td>{formatPower(exam.addLeft)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {(exam.examinationFindings || exam.recommendations) && (
                <div className="examination-card-notes">
                  {exam.examinationFindings && (
                    <div>
                      <span>Clinical Findings</span>
                      <p>{exam.examinationFindings}</p>
                    </div>
                  )}

                  {exam.recommendations && (
                    <div>
                      <span>Recommendations</span>
                      <p>{exam.recommendations}</p>
                    </div>
                  )}
                </div>
              )}

              {exam.followUpDate && (
                <div className="examination-follow-up">
                  Follow-up: {formatDate(exam.followUpDate)}
                </div>
              )}

              <div className="examination-card-actions">
                <button
                  type="button"
                  className="examination-secondary-button"
                  onClick={() => setSelectedExamination(exam)}
                >
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default EyeExaminations;
