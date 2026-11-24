
import {
  LayoutDashboard,
  Users,
  Eye,
  FileText,
  CalendarDays,
  Glasses,
  Package,
  ShoppingCart,
  ClipboardList,
  FlaskConical,
  Wallet,
  ChartNoAxesCombined,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  Clock,
  IndianRupee,
  Menu
} from "lucide-react";



import "./App.css";
import { useState } from "react";
import Customers from "./Customers";

const menu = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Customers", icon: Users },
  { title: "Eye Examination", icon: Eye },
  { title: "Prescriptions", icon: FileText },
  { title: "Appointments", icon: CalendarDays },
  { title: "Frames", icon: Glasses },
  { title: "Lens Inventory", icon: Package },
  { title: "Billing", icon: ShoppingCart },
  { title: "Spectacle Orders", icon: ClipboardList },
  { title: "Laboratory", icon: FlaskConical },
  { title: "Expenses", icon: Wallet },
  { title: "Reports", icon: ChartNoAxesCombined },
  { title: "Settings", icon: Settings }
];

const stats = [
  { title: "Today's Sales", value: "₹0", note: "No sales recorded yet", icon: IndianRupee },
  { title: "Total Customers", value: "0", note: "Registered customers", icon: Users },
  { title: "Eye Examinations", value: "0", note: "Today's examinations", icon: Eye },
  { title: "Pending Orders", value: "0", note: "Orders to complete", icon: Clock }
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><Eye size={25} /></div>
          <div>
            <h2>OptiMate</h2>
            <span>OPTICAL MANAGEMENT</span>
          </div>
        </div>

        <div className="menu-label">MAIN MENU</div>

        <nav className="navigation">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                className={`nav-item ${activePage === item.title ? "active" : ""}`}
onClick={() => setActivePage(item.title)}
              >
                <Icon size={19} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="owner-avatar">O</div>
          <div>
            <strong>Shop Owner</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="welcome">
            <button className="mobile-menu"><Menu /></button>
            <div>
              <h2>{activePage}</h2>
<p>
  {activePage === "Dashboard"
    ? "Welcome back! Here's your shop overview."
    : `Manage your ${activePage.toLowerCase()} information.`}
</p>
            </div>
          </div>

          <div className="top-actions">
            <div className="search-box">
              <Search size={18} />
              <input placeholder="Search anything..." />
            </div>
            <button className="notification">
              <Bell size={20} />
              <span></span>
            </button>
            <div className="profile">O</div>
          </div>
        </header>

        {activePage === "Customers" ? (
  <Customers />
) : (
  <section className="dashboard">
          <div className="page-heading">
            <div>
              <h1>Shop Overview</h1>
              <p>Monitor your optical business at a glance.</p>
            </div>
           <button
  className="primary-button"
  onClick={() => setActivePage("Customers")}
>
              <Plus size={18} /> New Customer
            </button>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="stat-card" key={stat.title}>
                  <div className="stat-top">
                    <span>{stat.title}</span>
                    <div className="stat-icon"><Icon size={21} /></div>
                  </div>
                  <h2>{stat.value}</h2>
                  <p>{stat.note}</p>
                </div>
              );
            })}
          </div>

          <div className="content-grid">
            <div className="panel">
              <div className="panel-heading">
                <div>
                  <h3>Sales Overview</h3>
                  <p>Your business performance</p>
                </div>
                <TrendingUp size={23} color="#16a085" />
              </div>
              <div className="empty-chart">
                <ChartNoAxesCombined size={45} />
                <strong>No sales data available</strong>
                <span>Sales statistics will appear here after your first sale.</span>
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading">
                <div>
                  <h3>Quick Actions</h3>
                  <p>Frequently used features</p>
                </div>
              </div>
              <div className="quick-actions">
                <button onClick={() => setActivePage("Customers")}>
  <Plus /> Add Customer
</button>
                <button><Eye /> New Eye Examination</button>
                <button><ShoppingCart /> Create New Bill</button>
                <button><CalendarDays /> Book Appointment</button>
              </div>
            </div>
          </div>

          <div className="panel recent-panel">
            <div className="panel-heading">
              <div>
                <h3>Recent Activity</h3>
                <p>Your latest shop transactions</p>
              </div>
            </div>
            <div className="empty-activity">
              No recent activity yet. Your customer visits and transactions will appear here.
            </div>
          </div>

          <footer>
            OptiMate Optical Management System © 2026
            <span>Version 1.0.0</span>
          </footer>
          </section>
)}
      </main>
    </div>
  );
}

export default App;