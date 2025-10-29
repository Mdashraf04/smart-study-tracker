import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">Smart Study Tracker</div>
        <div className="nav-links">
          <span>Welcome, {user?.name}</span>
          <button onClick={logout} className="btn btn-outline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;