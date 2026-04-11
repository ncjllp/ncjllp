import React from 'react';
import DashboardLayout from '../layout';
import './profile.css';

export default function ProfilePage() {
  return (
   
      <div className="profile-page">
        <h1>Your Profile</h1>
        <p>Manage your profile information here.</p>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <button type="submit">Save Changes</button>
        </form>
      </div>
  
  );
}