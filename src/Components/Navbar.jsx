import React, { useState, useEffect } from 'react';
import styles from '../Styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/userReducer';


const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser); 


  return (
    <div className={styles.container}>
      <div>
        <h1><Link to={'/'}>SheShare Vacation Rentals</Link></h1>
      </div>

      <div className={styles.login}>
        {isLoggedIn ? (
          <p className={styles.button}>Welcome {user}!</p>
        ) : (
          <>
            <p className={styles.button}>
              <Link to={'/signup'}>
                Register
              </Link>
            </p>
            <p className={styles.button}>
              <Link to={'/signin'}>
                Login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
