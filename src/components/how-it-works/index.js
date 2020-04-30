import React from 'react'
import classNames from 'classnames'
import styles from './how-it-works.module.scss'
import Button from 'components/button'

const HowItWorks = ({ }) => (
	<div className="row">
		<div className={classNames("col-lg-4", styles.container)}>
			<div>
				<h3>1. Browse Menu</h3>
				<p>Choose from a selection of tasty treats!</p>
			</div>
			<Button href="#menu">Menu</Button>
		</div>
		<div className={classNames("col-lg-4", styles.container)}>
			<div>
				<h3>2. Order</h3>
				<p>Place your order by calling or texting through WhatsApp.</p>
			</div>
			<Button href="tel:60194973778">Call</Button>
		</div>
		<div className={classNames("col-lg-4", styles.container)}>
			<div>
				<h3>3. Pick Up</h3>
				<p>28 Western Gardens<br />10450 Penang, Malaysia</p>
			</div>
			<Button href="https://goo.gl/maps/N6DGEF2wRR52">Get Directions</Button>
		</div>
	</div>
)

export default HowItWorks