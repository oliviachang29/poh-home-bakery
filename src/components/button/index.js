import React from 'react'
import styles from './button.module.scss'
import { Link } from 'gatsby'

const Button = ({ to, children }) => (
  <Link to={to} className={styles.container}>
    <p className={styles.text}>{children}</p>
  </Link>
)

export default Button