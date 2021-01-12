import React from 'react'
import styles from './side-bar.module.css';
import {Link} from 'react-router-dom';
import {ImCross} from 'react-icons/im'
const SideBar = ({close, show}) => {


	return (
		<div className={`${styles.sidebar} ${show && styles.open}`}>
			<div className={styles.sidebarHeader}>
				<p className={styles.logo}>WKBeats</p>
				<ImCross className={styles.cross} onClick={close}/>
			</div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about-me">About Me</Link></li>
				<li><Link to="/beats">Beats</Link></li>
				<li><Link to="/contact">Contact</Link></li>
				<li><Link to="/cart-review">Cart Review</Link></li>
			</ul>
		</div>
	)
}

export default SideBar
