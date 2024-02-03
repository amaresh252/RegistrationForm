import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/UserConext';
import Navbar from '../navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const RegistrationForm = () => {
  const { user } = useAuth();
  const [registrationData, setRegistrationData] = useState({
    firstname: '',
    lastname: '',
    email_id: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    username: '',
  });

  const handleRegistration = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };
   useEffect(()=>{
    if (!registrationData.username) {
      setRegistrationData({
        ...registrationData,
        username: user.username
      });
    }
    console.log(user.username)
   },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    const Registration = async () => {
      const response = await fetch(`http://localhost:8080/userinfo`, {
        method: 'POST',
        body: JSON.stringify(registrationData),
        headers: { 'content-type': 'application/json' },
      });
      if (response.ok) {
        console.log('Registration Done');
        alert('Registration Completed');
      } else {
        console.log('Error in registration');
      }
    };
    Registration();

  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="card p-4 registration-form-container">
          <h2 className="mb-4">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Firstname
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={registrationData.firstname}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Lastname
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={registrationData.lastname}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="email_id" className="form-label">
                Email
                <input
                  type="email"
                  className="form-control"
                  id="email_id"
                  name="email_id"
                  value={registrationData.email_id}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={registrationData.phone}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="street" className="form-label">
                Street
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  name="street"
                  value={registrationData.street}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={registrationData.city}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={registrationData.state}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">
                PinCode
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  value={registrationData.pincode}
                  onChange={handleRegistration}
                  required
                />
              </label>
            </div>

            

            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
