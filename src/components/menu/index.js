import React from 'react'
import classNames from 'classnames'
import styles from './menu.module.scss'

const Menu = ({ title, infoText, items }) => {
  return (
    <div>
      <p className={styles.infoText}>{infoText}</p>
      <div className="row">
        {items.map(( item , i) => (
        	<div key={i} className={classNames("col-md-6", styles.container)}>
        		<div className={styles.name_n_price}>
        			<h5 className={styles.name}>{item.name}</h5>
              <p className={styles.price}>{item.price}</p>
        		</div>
        		<p className={styles.description}>{item.description}</p>
    	    </div>
    	  ))}
      </div>
    </div>
  )
}

export default Menu
