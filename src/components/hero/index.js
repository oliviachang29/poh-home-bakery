import React from 'react'
import classNames from 'classnames'
import styles from './hero.module.scss'

const Hero = ({ text }) => (
  <div className={styles.hero}>
  	<div className="container">
    	<h1 className={styles.text}>{text}</h1>
    </div>
  </div>
)

export default Hero
