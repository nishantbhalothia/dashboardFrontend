
import React from 'react'
import styles from '../Styles/Rentals.module.css'
import { Link } from 'react-router-dom'

const Rentals = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cards}>
            <div>
                <h2><Link to='/'>Share Your Room</Link></h2>
            </div>
        </div>
        <div className={styles.cards}>
            <div>
                <h2><Link to='/'>Share Your Room</Link></h2>
            </div>
        </div>
        <div className={styles.community}>
            <div>
                <Link to="/">Welcome</Link>
                <Link to="/">Safety</Link>
                <Link to="/">Azlveen True</Link>
                <Link to="/">Community</Link>
            </div>
        </div>
    </div>
  )
}

export default Rentals