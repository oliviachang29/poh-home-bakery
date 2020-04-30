import React from 'react'
import styles from './button.module.scss'

const Button = ({ href, children }) => (
  <a href={href} className={styles.container}>
    <p className={styles.text}>{children}</p>
  </a>
)

export default Button