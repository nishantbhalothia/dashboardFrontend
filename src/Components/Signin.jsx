import React from "react";
import styles from "../Styles/Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser, setUser } from "../redux/userReducer";

const Signin = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch("https://dashboardbackend-3l6a.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        dispatch(setUser(data.user.name)); // Update user state in Redux store
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className={styles.signinContainer}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          {/* <label htmlFor="username">Username:</label> */}
          <input
            type="text"
            id="username"
            name="email"
            placeholder="Your Username"
          />
        </div>
        <div className={styles.formGroup}>
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Signin;
