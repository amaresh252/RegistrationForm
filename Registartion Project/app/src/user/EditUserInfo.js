import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/UserConext';
import Navbar from '../navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const EditUserInfo = () => {
  const navigate = useNavigate();
  const params=useParams();
  const { user } = useAuth();
  const [UserInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email_id: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await fetch(`http://localhost:8080/userinfo?username=${user.username}`);
      const data = await response.json();
      setUserInfo(data[0]);
    };
    fetchUserInfo();
  }, []);

  const handleUserInfo = (e) => {
    setUserInfo({
      ...UserInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:8080/userinfo/${params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(UserInfo),
        });

        if (response.ok) {
          console.log('User information updated successfully');
        } else {
          console.log('Failed to update user information');
        }
      } catch (error) {
        console.error('Error updating user information:', error);
      }
    };

    updateUserInfo();
    navigate('/home');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="card p-4 registration-form-container1">
          <h2 className="mb-4">Edit UserInfo</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Fistname
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={UserInfo.firstname}
                  onChange={handleUserInfo}
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
                  value={UserInfo.lastname}
                  onChange={handleUserInfo}
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
                  value={UserInfo.email_id}
                  onChange={handleUserInfo}
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
                  value={UserInfo.phone}
                  onChange={handleUserInfo}
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
                  value={UserInfo.street}
                  onChange={handleUserInfo}
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
                  value={UserInfo.city}
                  onChange={handleUserInfo}
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
                  value={UserInfo.state}
                  onChange={handleUserInfo}
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
                  value={UserInfo.pincode}
                  onChange={handleUserInfo}
                  required
                />
              </label>
            </div>

            <button className="btn btn-success" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserInfo;
