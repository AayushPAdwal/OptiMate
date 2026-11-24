
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  Users,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  UserRound,
  ArrowLeft,
  Eye,
  FileText,
  Receipt,
  ClipboardList,
  History,
  Clock,
} from "lucide-react";

import "./Customers.css";
import EyeExaminations from "./modules/eye-examinations/EyeExaminations";
import ExaminationForm from "./modules/eye-examinations/ExaminationForm";
import Prescriptions from "./modules/Prescriptions/Prescriptions";

type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  notes: string;
  createdAt: string;
};

type CustomerInput = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  dob?: string;
  gender?: string;
  address?: string;
  notes?: string;
};

type ExaminationRecord = Awaited<
  ReturnType<typeof window.eyeExaminationAPI.getByCustomer>
>[number];

type ProfileTab =
  | "Overview"
  | "Eye Examinations"
  | "Prescriptions"
  | "Orders"
  | "Billing"
  | "History";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  dob: "",
  gender: "",
  address: "",
  notes: "",
};

const api = window.customerAPI;

function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  const [activeProfileTab, setActiveProfileTab] =
    useState<ProfileTab>("Overview");

  const [showExaminationForm, setShowExaminationForm] = useState(false);

  const [editingExamination, setEditingExamination] =
    useState<ExaminationRecord | null>(null);

  // Load customers directly from SQLite.
  async function loadCustomers(): Promise<Customer[]> {
    try {
      setLoading(true);
      setError("");

      const result = await api.getAll();

      const normalizedCustomers: Customer[] = result.map((customer) => ({
        ...customer,
        email: customer.email ?? "",
        dob: customer.dob ?? "",
        gender: customer.gender ?? "",
        address: customer.address ?? "",
        notes: customer.notes ?? "",
        createdAt: customer.createdAt ?? "",
      }));

      setCustomers(normalizedCustomers);
      return normalizedCustomers;
    } catch (err) {
      console.error("Failed to load customers:", err);
      setError("Unable to load customers from the database.");
      return [];
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadCustomers();
  }, []);

  const filteredCustomers = useMemo(() => {
    const term = search.toLowerCase().trim();

    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(term) ||
        customer.phone.toLowerCase().includes(term) ||
        customer.id.toLowerCase().includes(term)
    );
  }, [customers, search]);

  function openAddForm() {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function openEditForm(customer: Customer) {
    setEditingId(customer.id);

    setForm({
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      dob: customer.dob,
      gender: customer.gender,
      address: customer.address,
      notes: customer.notes,
    });

    setShowForm(true);
  }

  function openCustomerProfile(customer: Customer) {
    setSelectedCustomer(customer);
    setActiveProfileTab("Overview");
    setShowExaminationForm(false);
    setEditingExamination(null);
  }

  function closeCustomerProfile() {
    setSelectedCustomer(null);
    setActiveProfileTab("Overview");
    setShowExaminationForm(false);
    setEditingExamination(null);
  }

  function closeExaminationForm() {
    setShowExaminationForm(false);
    setEditingExamination(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanPhone = form.phone.trim();

    if (!/^[0-9]{10}$/.test(cleanPhone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!form.name.trim()) {
      alert("Please enter the customer's name.");
      return;
    }

    const customerData: CustomerInput = {
      id: editingId ?? `OPT-${Date.now().toString().slice(-8)}`,
      name: form.name.trim(),
      phone: cleanPhone,
      email: form.email.trim(),
      dob: form.dob,
      gender: form.gender,
      address: form.address.trim(),
      notes: form.notes.trim(),
    };

    try {
      setSaving(true);
      setError("");

      if (editingId) {
        await api.update(customerData);
      } else {
        await api.create(customerData);
      }

      const updatedCustomers = await loadCustomers();

      setShowForm(false);
      setForm(emptyForm);

      if (editingId) {
        const updatedCustomer = updatedCustomers.find(
          (customer) => customer.id === editingId
        );

        if (updatedCustomer && selectedCustomer) {
          setSelectedCustomer(updatedCustomer);
        }
      } else {
        const savedCustomer = updatedCustomers.find(
          (customer) => customer.id === customerData.id
        );

        if (savedCustomer) {
          openCustomerProfile(savedCustomer);
        } else {
          openCustomerProfile({
            ...customerData,
            email: customerData.email ?? "",
            dob: customerData.dob ?? "",
            gender: customerData.gender ?? "",
            address: customerData.address ?? "",
            notes: customerData.notes ?? "",
            createdAt: new Date().toISOString(),
          });
        }
      }

      setEditingId(null);
    } catch (err) {
      console.error("Failed to save customer:", err);
      alert("Unable to save customer. Please check the database connection.");
    } finally {
      setSaving(false);
    }
  }

  async function deleteCustomer(customer: Customer) {
    const confirmed = window.confirm(
      `Delete customer ${customer.name} (${customer.id})?`
    );

    if (!confirmed) return;

    try {
      setError("");
      await api.delete(customer.id);
      await loadCustomers();
    } catch (err) {
      console.error("Failed to delete customer:", err);
      alert("Unable to delete customer. Please try again.");
    }
  }

  function formatDate(dateValue: string) {
    if (!dateValue) return "Not provided";

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) return dateValue;

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  const profileTabs: ProfileTab[] = [
    "Overview",
    "Eye Examinations",
    "Prescriptions",
    "Orders",
    "Billing",
    "History",
  ];

  function renderProfileContent() {
    if (!selectedCustomer) return null;

    switch (activeProfileTab) {
      case "Overview":
        return (
          <>
            <div className="profile-section-heading">
              <div>
                <h3>Customer Information</h3>
                <p>Personal and contact details</p>
              </div>

              <button
                className="customer-edit-btn profile-edit-button"
                onClick={() => openEditForm(selectedCustomer)}
                title="Edit customer"
              >
                <Pencil size={17} />
                Edit Details
              </button>
            </div>

            <div className="profile-details-grid">
              <div className="profile-detail">
                <span>Full Name</span>
                <strong>{selectedCustomer.name}</strong>
              </div>

              <div className="profile-detail">
                <span>Mobile Number</span>
                <strong>{selectedCustomer.phone}</strong>
              </div>

              <div className="profile-detail">
                <span>Email Address</span>
                <strong>{selectedCustomer.email || "Not provided"}</strong>
              </div>

              <div className="profile-detail">
                <span>Date of Birth</span>
                <strong>{formatDate(selectedCustomer.dob)}</strong>
              </div>

              <div className="profile-detail">
                <span>Gender</span>
                <strong>{selectedCustomer.gender || "Not provided"}</strong>
              </div>

              <div className="profile-detail">
                <span>Registration Date</span>
                <strong>{formatDate(selectedCustomer.createdAt)}</strong>
              </div>

              <div className="profile-detail profile-detail-full">
                <span>Address</span>
                <strong>{selectedCustomer.address || "Not provided"}</strong>
              </div>

              <div className="profile-detail profile-detail-full">
                <span>Additional Notes</span>
                <strong>{selectedCustomer.notes || "No additional notes"}</strong>
              </div>
            </div>
          </>
        );

      case "Eye Examinations":
        return showExaminationForm ? (
          <ExaminationForm
            customerId={selectedCustomer.id}
            examination={editingExamination ?? undefined}
            onCancel={closeExaminationForm}
            onSaved={closeExaminationForm}
          />
        ) : (
          <EyeExaminations
            customerId={selectedCustomer.id}
            onNewExamination={() => {
              setEditingExamination(null);
              setShowExaminationForm(true);
            }}
            onEditExamination={(examination) => {
              setEditingExamination(examination);
              setShowExaminationForm(true);
            }}
          />
        );

      case "Prescriptions":
  return (
    <Prescriptions
      customerId={selectedCustomer.id}
    />
  );

      case "Orders":
        return (
          <div className="profile-module-empty">
            <div className="profile-module-icon">
              <ClipboardList size={30} />
            </div>
            <h3>Customer Orders</h3>
            <p>Spectacle and laboratory orders will appear here.</p>
            <span>Order management has not been connected yet.</span>
          </div>
        );

      case "Billing":
        return (
          <div className="profile-module-empty">
            <div className="profile-module-icon">
              <Receipt size={30} />
            </div>
            <h3>Billing and Payments</h3>
            <p>
              Customer bills, payments and outstanding balances will appear
              here.
            </p>
            <span>
              Billing will be connected in a later development stage.
            </span>
          </div>
        );

      case "History":
        return (
          <div className="profile-module-empty">
            <div className="profile-module-icon">
              <History size={30} />
            </div>
            <h3>Customer Activity History</h3>
            <p>
              Previous visits, examinations, prescriptions, orders and
              transactions will appear here.
            </p>
            <span>
              Customer activity history will be developed with the related
              modules.
            </span>
          </div>
        );

      default:
        return null;
    }
  }

  // CUSTOMER PROFILE SCREEN
  if (selectedCustomer) {
    return (
      <section className="customers-page customer-profile-page">
        <button
          className="profile-back-button"
          onClick={closeCustomerProfile}
        >
          <ArrowLeft size={18} />
          Back to Customers
        </button>

        <div className="profile-header">
          <div className="profile-customer-avatar">
            {selectedCustomer.name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-header-info">
            <span className="profile-eyebrow">CUSTOMER PROFILE</span>
            <h1>{selectedCustomer.name}</h1>
            <p>
              Customer ID: {selectedCustomer.id}
              <span className="profile-header-divider">•</span>
              <Phone size={14} />
              {selectedCustomer.phone}
            </p>
          </div>

          <button
            className="customer-primary-btn profile-header-edit"
            onClick={() => openEditForm(selectedCustomer)}
          >
            <Pencil size={16} />
            Edit Customer
          </button>
        </div>

        <div className="profile-quick-actions">
          <button
            className="profile-action-card"
            onClick={() => {
              setActiveProfileTab("Eye Examinations");
              setEditingExamination(null);
              setShowExaminationForm(true);
            }}
          >
            <div className="profile-action-icon eye-action-icon">
              <Eye size={22} />
            </div>
            <div>
              <strong>New Eye Examination</strong>
              <span>Open examination section</span>
            </div>
            <Plus size={18} className="profile-action-plus" />
          </button>

          <button
            className="profile-action-card"
            onClick={() => setActiveProfileTab("Prescriptions")}
          >
            <div className="profile-action-icon prescription-action-icon">
              <FileText size={22} />
            </div>
            <div>
              <strong>Add Prescription</strong>
              <span>View prescription section</span>
            </div>
            <Plus size={18} className="profile-action-plus" />
          </button>

          <button
            className="profile-action-card"
            onClick={() => setActiveProfileTab("Billing")}
          >
            <div className="profile-action-icon billing-action-icon">
              <Receipt size={22} />
            </div>
            <div>
              <strong>Create Bill</strong>
              <span>Open billing section</span>
            </div>
            <Plus size={18} className="profile-action-plus" />
          </button>

          <button
            className="profile-action-card"
            onClick={() => setActiveProfileTab("History")}
          >
            <div className="profile-action-icon history-action-icon">
              <History size={22} />
            </div>
            <div>
              <strong>View History</strong>
              <span>Customer activity records</span>
            </div>
            <Clock size={18} className="profile-action-plus" />
          </button>
        </div>

        <div className="profile-tabs-panel">
          <div className="profile-tabs">
            {profileTabs.map((tab) => (
              <button
                key={tab}
                className={`profile-tab ${
                  activeProfileTab === tab ? "active" : ""
                }`}
                onClick={() => {
                  setActiveProfileTab(tab);

                  if (tab !== "Eye Examinations") {
                    closeExaminationForm();
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="profile-tab-content">
            {renderProfileContent()}
          </div>
        </div>

        {showForm && (
          <div className="customer-modal-overlay">
            <div className="customer-modal">
              <div className="customer-modal-heading">
                <div>
                  <h2>Edit Customer</h2>
                  <p>Update the customer's information below.</p>
                </div>

                <button
                  className="customer-close-btn"
                  onClick={() => setShowForm(false)}
                  type="button"
                  aria-label="Close form"
                >
                  <X size={22} />
                </button>
              </div>

              <CustomerForm
                form={form}
                setForm={setForm}
                saving={saving}
                editing={true}
                onSubmit={handleSubmit}
                onCancel={() => setShowForm(false)}
              />
            </div>
          </div>
        )}
      </section>
    );
  }

  // CUSTOMER LIST SCREEN
  return (
    <section className="customers-page">
      <div className="customer-heading">
        <div>
          <h1>Customer Management</h1>
          <p>Manage your optical shop customers and their details.</p>
        </div>

        <button
          className="customer-primary-btn"
          onClick={openAddForm}
          disabled={loading}
        >
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      <div className="customer-summary">
        <div className="customer-summary-icon">
          <Users size={24} />
        </div>
        <div>
          <span>Total Customers</span>
          <h2>{customers.length}</h2>
        </div>
      </div>

      <div className="customer-table-panel">
        <div className="customer-table-heading">
          <div>
            <h3>All Customers</h3>
            <p>View and manage your registered customers.</p>
          </div>

          <div className="customer-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search name, phone or ID..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>

        {error && (
          <div role="alert" style={{ padding: "12px", color: "#dc2626" }}>
            {error}
            <button
              type="button"
              onClick={() => void loadCustomers()}
              style={{ marginLeft: "12px" }}
            >
              Retry
            </button>
          </div>
        )}

        <div className="customer-table-scroll">
          <table className="customer-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Customer ID</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5}>
                    <div className="customer-empty">
                      Loading customers...
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td>
                        <div className="customer-name-cell">
                          <div className="customer-avatar">
                            {customer.name.charAt(0).toUpperCase()}
                          </div>
                          <strong>{customer.name}</strong>
                        </div>
                      </td>

                      <td>{customer.id}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.email || "—"}</td>

                      <td>
                        <div className="customer-actions">
                          <button
                            className="customer-view-btn"
                            title="View customer profile"
                            onClick={() => openCustomerProfile(customer)}
                          >
                            <UserRound size={17} />
                          </button>

                          <button
                            className="customer-edit-btn"
                            title="Edit customer"
                            onClick={() => openEditForm(customer)}
                          >
                            <Pencil size={17} />
                          </button>

                          <button
                            className="customer-delete-btn"
                            title="Delete customer"
                            onClick={() => void deleteCustomer(customer)}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredCustomers.length === 0 && (
                    <tr>
                      <td colSpan={5}>
                        <div className="customer-empty">
                          <Users size={38} />
                          <strong>
                            {search
                              ? "No matching customers found"
                              : "No customers yet"}
                          </strong>
                          <span>
                            {search
                              ? "Try searching with another name, phone or ID."
                              : "Click Add Customer to register your first customer."}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        <div className="customer-table-footer">
          Showing {filteredCustomers.length} of {customers.length} customers
        </div>
      </div>

      {showForm && (
        <div className="customer-modal-overlay">
          <div className="customer-modal">
            <div className="customer-modal-heading">
              <div>
                <h2>{editingId ? "Edit Customer" : "Add New Customer"}</h2>
                <p>Enter the customer's information below.</p>
              </div>

              <button
                className="customer-close-btn"
                onClick={() => setShowForm(false)}
                type="button"
                aria-label="Close form"
              >
                <X size={22} />
              </button>
            </div>

            <CustomerForm
              form={form}
              setForm={setForm}
              saving={saving}
              editing={Boolean(editingId)}
              onSubmit={handleSubmit}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}

type CustomerFormProps = {
  form: typeof emptyForm;
  setForm: React.Dispatch<React.SetStateAction<typeof emptyForm>>;
  saving: boolean;
  editing: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

function CustomerForm({
  form,
  setForm,
  saving,
  editing,
  onSubmit,
  onCancel,
}: CustomerFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className="customer-form-grid">
        <label>
          Full Name *
          <div className="customer-input-wrap">
            <UserRound size={17} />
            <input
              required
              maxLength={100}
              placeholder="Enter full name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
          </div>
        </label>

        <label>
          Mobile Number *
          <div className="customer-input-wrap">
            <Phone size={17} />
            <input
              required
              type="tel"
              maxLength={10}
              pattern="[0-9]{10}"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={(event) =>
                setForm({
                  ...form,
                  phone: event.target.value.replace(/\D/g, ""),
                })
              }
            />
          </div>
        </label>

        <label>
          Email Address
          <div className="customer-input-wrap">
            <Mail size={17} />
            <input
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
            />
          </div>
        </label>

        <label>
          Date of Birth
          <div className="customer-input-wrap">
            <CalendarDays size={17} />
            <input
              type="date"
              value={form.dob}
              onChange={(event) =>
                setForm({ ...form, dob: event.target.value })
              }
            />
          </div>
        </label>

        <label>
          Gender
          <select
            value={form.gender}
            onChange={(event) =>
              setForm({ ...form, gender: event.target.value })
            }
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </label>

        <label>
          Address
          <div className="customer-input-wrap">
            <MapPin size={17} />
            <input
              placeholder="Enter address"
              value={form.address}
              onChange={(event) =>
                setForm({ ...form, address: event.target.value })
              }
            />
          </div>
        </label>

        <label className="customer-full-width">
          Notes
          <textarea
            rows={3}
            placeholder="Additional customer information..."
            value={form.notes}
            onChange={(event) =>
              setForm({ ...form, notes: event.target.value })
            }
          />
        </label>
      </div>

      <div className="customer-form-actions">
        <button
          type="button"
          className="customer-cancel-btn"
          onClick={onCancel}
          disabled={saving}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="customer-primary-btn"
          disabled={saving}
        >
          {saving
            ? "Saving..."
            : editing
              ? "Save Changes"
              : "Save Customer"}
        </button>
      </div>
    </form>
  );
}

export default Customers;
