import React from 'react';
import './style.css';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';

// Messages
const required = 'This field is required';
const minAge = "Your age doesn't meet requirements. Required age (25-100)";
const maxLength = 'Enter a valid phone number';
const emailPattern = 'Enter a valid email. eg:abc@xyz.com';
const exceedLength = 'Your value has exceeded the limit of characters';

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

export default function UserDetails() {
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    history.push('/dashboard', data);
    console.log(data);
  };

  return (
    <div className="container">
      <div className="col-sm-12">
        <h3>User Details</h3>
      </div>
      <div className="col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="Username"
              ref={register({ required: true, maxLength: 20 })}
            />
            {errors.Username &&
              errors.Username.type === 'required' &&
              errorMessage(required)}
            {errors.Username &&
              errors.Username.type === 'maxLength' &&
              errorMessage(exceedLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              placeholder="Age"
              name="Age"
              ref={register({ min: 25, required: true, max: 100 })}
            />
            {errors.Age &&
              errors.Age.type === 'required' &&
              errorMessage(required)}
            {errors.Age && errors.Age.type === 'min' && errorMessage(minAge)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="Mobile number"
              name="MobileNumber"
              ref={register({ maxLength: 10, required: true, minLength: 10 })}
            />
            {errors.MobileNumber &&
              errors.MobileNumber.type === 'required' &&
              errorMessage(required)}
            {errors.MobileNumber &&
              errors.MobileNumber.type === 'maxLength' &&
              errorMessage(maxLength)}
            {errors.MobileNumber &&
              errors.MobileNumber.type === 'minLength' &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email &&
              errors.Email.type === 'required' &&
              errorMessage(required)}
            {errors.Email &&
              errors.Email.type === 'pattern' &&
              errorMessage(emailPattern)}
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
            <input
              style={{ float: 'right' }}
              className="btn btn-outline-secondary"
              type="reset"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
