import React from 'react';
import DashboardLayout from '../layout';
import './history.css';

export default function HistoryPage() {
  return (
   
      <div className="history-page">
        <h1>History</h1>
        <p>View your activity history here.</p>
        <ul>
          <li>Service A - Completed on 2026-04-01</li>
          <li>Service B - Completed on 2026-03-15</li>
        </ul>
      </div>
 
  );
}