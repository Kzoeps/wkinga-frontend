import React from 'react'
import styles from './ham.module.css';

const HamBurger = ({click}) => {
	return (
		<button className={styles.hamburger} onClick={click}>
			<div className={styles.hamLine}></div>
			<div className={styles.hamLine}></div>
			<div className={styles.hamLine}></div>
		</button>
	)
}

export default HamBurger
