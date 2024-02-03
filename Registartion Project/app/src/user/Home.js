import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../context/UserConext";
import Navbar from "../navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

export default function Home() {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await fetch(`http://localhost:8080/userinfo?username=${user.username}`);
      const data = await response.json();
      setUserInfo(data);
    }
    fetchUserInfo();
  }, [user.username]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {Array.isArray(userInfo) && userInfo.length > 0 ? (
          userInfo.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">User Information</h5>
                <p className="card-text"><strong>FirstName:</strong> {item.firstname}</p>
                <p className="card-text"><strong>LastName:</strong> {item.lastname}</p>
                <p className="card-text"><strong>Email:</strong> {item.email_id}</p>
                <p className="card-text"><strong>Phone:</strong> {item.phone}</p>
                <p className="card-text"><strong>Street:</strong> {item.street}</p>
                <p className="card-text"><strong>City:</strong> {item.city}</p>
                <p className="card-text"><strong>State:</strong> {item.state}</p>
                <p className="card-text"><strong>PinCode:</strong> {item.pincode}</p>
                <Link to={`/edit/${item.id}`} className="btn btn-success">Edit</Link>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-info" role="alert">
            No Registration Data
          </div>
        )}
      </div>
    </>
  );
}
