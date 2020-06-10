import React, { useState } from "react";

export function Contact() {
  let [emailValue, setEmailValue] = useState("");
  let [messageValue, setMessageValue] = useState("");
  let submitMessage = () => {
    return true;
  };
  return (
    <div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <div className="form-input">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Your Email"
            required
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            className="form-control"
            id="message"
            aria-describedby="message"
            placeholder="Your Message"
            required
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=""
          style={{ display: "block", margin: "auto" }}
          onClick={submitMessage}
        >
          Send message
        </button>
      </div>
    </div>
  );
}

export default Contact;
