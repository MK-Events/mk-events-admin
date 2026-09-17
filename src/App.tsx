import {
  IconCalendarEvent,
  IconChevronDown,
  IconClock,
  IconLogout,
  IconMenu2,
  IconPhoto,
  IconPlus,
  IconSettings,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react";
import { useState } from "react";
import "./App.css";

const events = [
  {
    name: "Monsoon Music Festival",
    date: "18 Aug 2025",
    status: "Published",
    tickets: "486 / 600",
    accent: "coral",
  },
  {
    name: "Heritage Walk: Fort Kochi",
    date: "24 Aug 2025",
    status: "Draft",
    tickets: "—",
    accent: "gold",
  },
  {
    name: "Open Air Cinema",
    date: "06 Sep 2025",
    status: "Published",
    tickets: "124 / 250",
    accent: "blue",
  },
];

const menuItems = [
  { label: "Events", icon: IconCalendarEvent },
  { label: "Registrations", icon: IconTicket },
  { label: "Gallery", icon: IconPhoto },
  { label: "Team", icon: IconUsers },
];

function App() {
  const [activeItem, setActiveItem] = useState("Events");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-shell">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <span className="brand-mark">MK</span>
          <span>MK Events</span>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <p className="nav-label">Manage</p>
          {menuItems.map(({ label, icon: Icon }) => (
            <button
              className={`nav-item ${activeItem === label ? "active" : ""}`}
              key={label}
              onClick={() => {
                setActiveItem(label);
                setSidebarOpen(false);
              }}
            >
              <Icon size={19} stroke={1.8} /> {label}
            </button>
          ))}
          <button
            className="nav-item nav-item-spaced"
            onClick={() => setActiveItem("Settings")}
          >
            <IconSettings size={19} stroke={1.8} /> Settings
          </button>
        </nav>
        <div className="sidebar-bottom">
          <div className="profile">
            <span className="avatar">AS</span>
            <span>
              <strong>Ananya Shah</strong>
              <small>Administrator</small>
            </span>
            <IconChevronDown size={15} />
          </div>
          <button className="logout">
            <IconLogout size={17} /> Sign out
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <IconMenu2 size={22} />
          </button>
          <div className="breadcrumbs">
            <span>MK Events</span>
            <b>/</b>
            <strong>{activeItem}</strong>
          </div>
          <div className="topbar-actions">
            <span className="notification-dot" />
            <div className="top-avatar">AS</div>
          </div>
        </header>
        <div className="page-content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">MONDAY, 11 AUGUST 2025</p>
              <h1>
                Good morning, Ananya<span className="wave">✦</span>
              </h1>
              <p className="heading-copy">
                Here is what is happening across your events today.
              </p>
            </div>
            <button className="primary-button">
              <IconPlus size={18} /> Create event
            </button>
          </section>
          <section className="stats-grid" aria-label="Events summary">
            <article className="stat-card">
              <div className="stat-icon coral-icon">
                <IconCalendarEvent size={20} />
              </div>
              <div>
                <span>Upcoming events</span>
                <strong>08</strong>
                <small className="positive">↗ 2 this month</small>
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-icon gold-icon">
                <IconUsers size={20} />
              </div>
              <div>
                <span>Total registrations</span>
                <strong>1,248</strong>
                <small className="positive">↗ 18.4% vs last month</small>
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-icon blue-icon">
                <IconTicket size={20} />
              </div>
              <div>
                <span>Tickets sold</span>
                <strong>862</strong>
                <small className="positive">↗ 12.8% vs last month</small>
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-icon green-icon">
                <IconClock size={20} />
              </div>
              <div>
                <span>Next event in</span>
                <strong>
                  07 <em>days</em>
                </strong>
                <small>Monsoon Music Festival</small>
              </div>
            </article>
          </section>
          <section className="content-grid">
            <article className="panel events-panel">
              <div className="panel-heading">
                <div>
                  <h2>Events overview</h2>
                  <p>Keep an eye on your upcoming experiences.</p>
                </div>
                <button className="text-button">
                  View all <span>→</span>
                </button>
              </div>
              <div className="event-table">
                <div className="table-head">
                  <span>Event</span>
                  <span>Date</span>
                  <span>Status</span>
                  <span>Registrations</span>
                  <span />
                </div>
                {events.map((event) => (
                  <div className="event-row" key={event.name}>
                    <div className="event-name">
                      <span className={`event-thumb ${event.accent}`}>
                        <IconCalendarEvent size={19} />
                      </span>
                      <strong>{event.name}</strong>
                    </div>
                    <span>{event.date}</span>
                    <span>
                      <b className={`status ${event.status.toLowerCase()}`}>
                        {event.status}
                      </b>
                    </span>
                    <span className="ticket-count">{event.tickets}</span>
                    <button
                      className="row-menu"
                      aria-label={`Open ${event.name} menu`}
                    >
                      •••
                    </button>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel activity-panel">
              <div className="panel-heading">
                <div>
                  <h2>Recent activity</h2>
                  <p>Latest updates from your events.</p>
                </div>
                <button className="more-button" aria-label="More activity">
                  •••
                </button>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-avatar coral">RM</span>
                  <p>
                    <strong>Rohan Mehta</strong> registered for{" "}
                    <b>Monsoon Music Festival</b>
                    <small>12 minutes ago</small>
                  </p>
                </div>
                <div className="activity-item">
                  <span className="activity-avatar blue">SY</span>
                  <p>
                    <strong>Shreya &amp; Yash</strong> updated the gallery for{" "}
                    <b>Open Air Cinema</b>
                    <small>1 hour ago</small>
                  </p>
                </div>
                <div className="activity-item">
                  <span className="activity-avatar gold">NK</span>
                  <p>
                    <strong>Nikhil Kapoor</strong> created a new event draft
                    <small>3 hours ago</small>
                  </p>
                </div>
                <div className="activity-item">
                  <span className="activity-avatar green">PM</span>
                  <p>
                    <strong>Priya Menon</strong> exported registration data
                    <small>Yesterday</small>
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="tip-banner">
            <div className="tip-symbol">✦</div>
            <div>
              <strong>Make your next event memorable</strong>
              <p>
                Add a cover image, event highlights, and a clear schedule to
                give guests everything they need.
              </p>
            </div>
            <button className="text-button">
              Explore event settings <span>→</span>
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
