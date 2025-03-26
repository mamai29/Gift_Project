'use client';

import './password.css';
import React, { useState, useEffect } from 'react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically open the modal when the component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    setErrorMessage('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === '' || confirmPassword === '') {
      setErrorMessage('Both password fields are required.');
    } else if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      setSuccessMessage('Password changed successfully.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-modal-button">
              &times;
            </button>

            <h2>Reset your password</h2>
            <p>Please choose a new password to finish signing in.</p>

            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="newPassword">New password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={handlePasswordChange}
                className="input-field"
                placeholder="Enter your new password"
              />

              <label htmlFor="confirmPassword">Re-enter new password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="input-field"
                placeholder="Re-enter your new password"
              />

              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}

              <button type="submit" className="submit-button">
                Change password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
