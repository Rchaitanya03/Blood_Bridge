import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './DonorDashboard.css';

const DonorDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="donor-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Welcome, {user?.name || 'Donor'}!</h1>
            <p className="welcome-subtitle">Thank you for registering as a blood donor. Your contribution saves lives.</p>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-cards">
            <Link to="/requestor-dashboard" className="dashboard-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <h3>Find Donors</h3>
              <p>Search for nearby blood donors by location and blood type</p>
            </Link>

            <Link to="/donors" className="dashboard-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>View All Donors</h3>
              <p>Browse the complete list of registered blood donors</p>
            </Link>

            <Link to="/add-donor" className="dashboard-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </div>
              <h3>Update Profile</h3>
              <p>Update your donor information and eligibility status</p>
            </Link>

            <button onClick={handleLogout} className="dashboard-card logout-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </div>
              <h3>Logout</h3>
              <p>Sign out of your account</p>
            </button>
          </div>

          <div className="dashboard-info">
            <div className="info-card">
              <h3>Quick Information</h3>
              <ul>
                <li>You must wait at least 56 days between donations</li>
                <li>Ensure you meet all eligibility requirements before donating</li>
                <li>Keep your profile updated with accurate location information</li>
                <li>Mark yourself as active when you're available to donate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;

