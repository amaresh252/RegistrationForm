import React from 'react';
import { UserProvider } from './context/UserConext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInForm from './auth/LogInForm';
import SignInForm from './auth/SignInForm';
import RegistrationForm from './user/RegistrationForm';
import Home from './user/Home';
import EditUserInfo from './user/EditUserInfo';

function App() {
  
  return (
    <Router>
      <UserProvider>
        <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/signin" element={<SignInForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit/:id" element={<EditUserInfo/>} />
          </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
