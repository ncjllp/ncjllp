import React from 'react';
import DashboardLayout from '../layout';
import './services.css';

export default function ServicesPage() {
  return (
  
      <div className="services-page">
        <h1>Our Services</h1>
        <p>Explore the services we offer.</p>
        <ul>
          <li>GST Filing</li>
          <li>Income Tax Return</li>
          <li>Business Registration</li>
        </ul>
      </div>
    
  );
}