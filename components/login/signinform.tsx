"use client"
import React, { useState } from 'react';
import './style.css'
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, phone }),
    });

    const data = await response.json();
    // Handle the response from your server
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Sign in</span></div>
        <form onSubmit={handleSubmit} id="registrationForm">
          <div className="row">
            <i className="fas fa-user"></i>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="row">
            <i className="fas fa-phone"></i>
            <input
              type="tel"
              placeholder="Phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="pass"><a href="change.html">Forgot password?</a></div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">Not a member? <a href="signup.html">Signup now</a></div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
