import React from 'react'
import styles from './about.module.scss'
import classNames from 'classnames'
import image from './about.jpg'

const About = ({ text }) => {
  return (
    <div className={classNames("row", styles.container)}>
    	<div className={classNames("col-lg-6", styles.imageContainer)}>
        <img
          src={image}
          alt="Picture of Mrs. Poh"
        />
    	</div>
    	<div className={classNames("col-lg-6", styles.textContainer)}>
  	  	<h2>About</h2>
  		  <p>As a teacher, Mrs. Poh began baking cakes for her students as motivation for her class to win awards. Now, 40 years later, she's still baking delicious cakes for friends, family, and anyone who wants them!</p>
      </div>
    </div>
  )
}

export default About
