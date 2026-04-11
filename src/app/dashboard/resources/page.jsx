import React from 'react';
import DashboardLayout from '../layout';

export default function ResourcesPage() {
  return (
    <DashboardLayout>
      <div className="resources-page">
        <h1>Resources</h1>
        <p>Access useful resources and documents here.</p>
        <ul>
          <li><a href="/resources/guide.pdf" target="_blank">Consultancy Guide</a></li>
          <li><a href="/resources/faq.pdf" target="_blank">Frequently Asked Questions</a></li>
        </ul>
      </div>
    </DashboardLayout>
  );
}