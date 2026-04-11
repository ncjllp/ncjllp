import React from 'react';
import DashboardLayout from '../layout';

export default function SupportPage() {
  return (
    <DashboardLayout>
      <div className="support-page">
        <h1>Support</h1>
        <p>Contact our support team for assistance.</p>
        <form>
          <label>
            Your Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Your Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Enter your message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </DashboardLayout>
  );
}