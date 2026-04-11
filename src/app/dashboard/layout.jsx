import React from 'react';
import './dashboard.css';

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <nav>
          <ul>
            <li><a href="/dashboard/history">History</a></li>
            <li><a href="/dashboard/profile">Profile</a></li>
            <li><a href="/dashboard/services">Services</a></li>
            <li><a href="/dashboard/appointments">Appointments</a></li>
            <li><a href="/dashboard/resources">Resources</a></li>
            <li><a href="/dashboard/support">Support</a></li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
}