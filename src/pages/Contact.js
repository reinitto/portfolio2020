import React, { useState, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import { ExternalButton } from "../components/ExternalButton";
const firebaseConfig = {
  apiKey: "AIzaSyBRh9vSZgi8Hj3BtkRcHnWu-kw57oUy0_s",
  authDomain: "portfolio-a89a3.firebaseapp.com",
  // databaseURL: "http://localhost:9000/?ns=portfolio-a89a3",
  databaseURL: "https://portfolio-a89a3.firebaseio.com",
  projectId: "portfolio-a89a3",
  storageBucket: "portfolio-a89a3.appspot.com",
  messagingSenderId: "147183013986",
  appId: "1:147183013986:web:9613594a039a3a4ce8813b",
  measurementId: "G-H308PMCQ0L",
};

export function Contact() {
  let [emailValue, setEmailValue] = useState("");
  let [messageValue, setMessageValue] = useState("");
  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  });
  // Firebase configuration
  let submitMessage = async () => {
    var database = firebase.database();
    if (emailValue && messageValue) {
      await database.ref("messages").push({
        email: emailValue,
        message: messageValue,
      });
      alert("Email Delivered!");
      setEmailValue("");
      setMessageValue("");
      // console.log("res", await res.toJSON());
    } else {
      alert("Missing email or message");
    }
    return true;
  };

  return (
    <div>
      <h2>My Profiles</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ExternalButton link="https://github.com/reinitto" text="Github" />
        <ExternalButton
          link="https://www.freecodecamp.org/fcc13da22b9"
          text="Free Code Camp"
        />
        <ExternalButton
          link="https://www.hackerrank.com/reinitto"
          text="HackerRank"
        />
      </div>
      <h2>Contact Me</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ExternalButton
          link={"mailto:rozensteins.reinis@gmail.com"}
          text={"rozensteins.reinis@gmail.com"}
        />
      </div>

      <div className="contact-form">
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
