import React, { Component } from 'react'
import styles from './section.module.scss'
import classNames from 'classnames'
// import { Helmet } from 'react-helmet'

const Section = ({ id, bg, backgroundText, title, children, backgroundTextColor, backgroundTextSize }) => (
  <div id={id} className={classNames(styles.section, styles[bg + 'Bg'])}>
		<p style={{fontSize: backgroundTextSize}}
			className={classNames('noselect', styles.backgroundText, styles[backgroundTextColor])}>
			{backgroundText}
		</p>
	  <div className={classNames(styles.innerContainer, "container")}>
	  	{title ? <h2 className={styles.title}>{title}</h2> : ''}
	  	{children}
	  </div>
	</div>
)

export default Section