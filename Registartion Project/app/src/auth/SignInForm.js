import React, { useState,useEffect } from "react";
import "./SignInForm.css"; 
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserConext";

export default function SignInForm() {
  const navigate = useNavigate();
  const {user,login } = useAuth();
  const  [userData,setUserData]=useState({
    username:'',
    password:'',
  })
  
  function handleUserData(e) {
    setUserData({...userData,[e.target.name]:e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
   console.log(userData)
      const createUser=async()=>{
        const response=await fetch('http://localhost:8080/user',{
          method:'POST',
          body:JSON.stringify(userData),
          headers:{'content-type':'application/json'}
        });
        const  data=await response.json();
        if(response.ok){
          login({username:userData.username})
        }
        else {
          console.log('user not created')
        }
      }
      createUser();
      
  }
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);


  return (
    <>
    <div className="signup-container">
      <div><h1>Sign in to your account</h1></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="email" name="username" value={userData.username} onChange={handleUserData}></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={userData.password} onChange={handleUserData}></input>
        <button  id="button2" type="submit">SignIn</button>
      </form>
      <p className="link-text">
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </div>
    </>
    
  );
}
