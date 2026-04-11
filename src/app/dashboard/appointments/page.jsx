import React from 'react';
import DashboardLayout from '../layout';

export default function AppointmentsPage() {
  return (
    <DashboardLayout>
      <div className="appointments-page">
        <h1>Appointments</h1>
        <p>Manage your appointments with our consultants here.</p>
        <button>Schedule a New Appointment</button>
        <ul>
          <li>Appointment with John Doe - 2026-04-15</li>
          <li>Appointment with Jane Smith - 2026-04-20</li>
        </ul>
      </div>
    </DashboardLayout>
  );
}