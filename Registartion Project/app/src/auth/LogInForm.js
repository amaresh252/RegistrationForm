import { useState,useEffect } from "react";
import './LoginForm.css'; 
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserConext";

export default function LogInForm() {
  const navigate = useNavigate();
  const {user, login } = useAuth();
const  [userData,setUserData]=useState({
    username:'',
    password:'',
  })
  
  
  function handleUserData(e) {
    setUserData({...userData,[e.target.name]:e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const loginUser=async()=>{
      const response=await fetch(`http://localhost:8080/user?username=${userData.username}`);
      const  data=await response.json();
      if(response.ok){
        if(data[0].password===userData.password){
          login({username:userData.username});
        }
      }
      else {
        console.log('user not loggedin')
      }
    }
    loginUser();
   
  }
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);
  return (
    <div className="login-container">
      <div><h1>Log in to your account</h1></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="email" name="username" value={userData.username} onChange={handleUserData} autoComplete="username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={userData.password} onChange={handleUserData} autoComplete="current-password" />
        <button id="button3" type="submit">LogIn</button>
      </form>
      <p>
        Don't have an account? <Link to="/signin">Sign Up</Link>
      </p>
    </div>
  );
}
