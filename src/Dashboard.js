import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = (props) => {
  const { Username, Age, MobileNumber, Email } =
    (props.location && props.location.state) || {};

  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Username:</strong> {Username}
        </div>
        <div>
          <strong>Age:</strong> {Age}
        </div>
        <div>
          <strong>MobileNumber:</strong> {MobileNumber}
        </div>
        <div>
          <strong>Email:</strong> {Email}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
