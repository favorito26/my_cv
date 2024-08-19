"use client"
import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          companyName,
          message,
        }),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="contact" className="d-flex flex-column justify-content-center align-items-center bg-nav text-white" style={{ minHeight: "93vh", padding: "0 1rem" }}>
      <div className="row mb-5 w-100">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <div className="card mt-4 lg">
            <div className="card-body">
              <h5 className="card-title btn_w mb-3">Address:</h5>
              <p className="card-text btn_w">18/28 Sunderdas Terrace, Sankli Street above Sacred Heart School, 2nd floor, Byculla. Mumbai-400008</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title btn_w mb-3">Contact me:</h5>
              <a className="card-text btn_w">
              <img src="call.gif" alt="Instagram" height={"20"} />&nbsp;
                +918104136180</a> <br />
              <a className="card-text btn_w">
             
                mufaddal2003@gmail.com</a> <br />
              <a className="card-text btn_w">
              <img src="instagram.svg" alt="Instagram" height={"20"} />&nbsp;
                @mufaddal_chhatriwala2003</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="card p-3 mb-4" style={{ width: "95%"}}>
        <h5 className="card-title btn_w text-center">Send an Email</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group btn_w">
            <label htmlFor="email">Enter Your Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3 btn_w">
            <label htmlFor="companyName">Your Company Name:</label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3 btn_w">
            <label htmlFor="message">Your Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn bg-nav text-white mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
