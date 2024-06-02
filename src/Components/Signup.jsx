

import React from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../Styles/Signup.module.css";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch("https://dashboardbackend-3l6a.onrender.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json()
        if (response.status === 200) {
          navigate("/signin");
        } else {
          console.log("Error:", response);
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.signupContainer}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" name="username" placeholder="Your Name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        {/* ================== This form is for user and default role is user ======================== */}
        <div className={styles.formGroup} >
          <label htmlFor="role"> Type: </label>
          <select id="role" name="role">
            <option value="landlord">Share A Room</option> 
            <option value="tennent">Rent A Room</option> 
          </select>
          {/* <input
            type="text"
            id="role"
            name="role"
            value="user"
          /> */}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
