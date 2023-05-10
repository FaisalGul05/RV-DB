import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState(
    "Please write an essay about your favorite DOM element."
  );

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("An essay was submitted: " + message);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="labels">
        <label className="label">
          <h1>Full Name</h1>
          <textarea
            value={fullName}
            onChange={handleFullNameChange}
            className="textArea"
          />
        </label>
        <label className="labelR">
          <h1>Phone Number</h1>
          <textarea
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="textArea"
          />
        </label>
        <label className="label">
          <h1>Email Address</h1>
          <textarea
            value={email}
            onChange={handleEmailChange}
            className="textArea"
          />
        </label>
        <label className="labelR">
          <h1>Dealership Address</h1>
          <textarea
            value={address}
            onChange={handleAddressChange}
            className="textArea"
          />
        </label>
        <label className="lastLabel">
          <h1>Type Message</h1>
          <textarea
            className="lastText"
            value={message}
            onChange={handleMessageChange}
          />
        </label>
      </div>
      <input type="submit" value="Send" className="submitBtn" />
    </form>
  );
}

export default Form;
