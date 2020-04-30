import { Link } from 'gatsby'
import React from 'react'
import styles from './footer.module.scss'

const Footer = ({ author, title }) => {
  const year = new Date().getFullYear()
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h3>Mrs. Poh's Home Bakery</h3>
        <p>Call or WhatsApp: <a href="tel:60194973778">60194973778</a></p> 
        <p>28 Western Gardens<br />10450 Penang, Malaysia</p>
      </div>
      <p className={styles.copyright}>&#xa9; {year}. All rights reserved. Site by <a href="https://oliviachang.me">Olivia Chang</a>.</p>
    </div>
  )
}

export default Footer
