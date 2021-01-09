import styles from './navbar.module.css';
import HamBurger from './tools/ham';
import {FaShoppingCart} from "react-icons/fa"
import {Link} from 'react-router-dom';

const Navbar = ({hamHandler}) => {
	return (
		<header className={styles.navBar}>
			<div className={styles.hamHolder}>
				<HamBurger click={hamHandler}/>
			</div>
			<div className={styles.img_container}>
				<img className={styles.header__logo} src='images/logo.svg' alt="Hello"/>
			</div>

			<nav className={styles.header__navigation}>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/about-me">About Me</Link>
					<Link to="/beats">Beats</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/cart-review">Cart Review</Link>
				</ul>
			</nav>
			<div className={styles.cartHolder}>
				<Link to="/checkout"><FaShoppingCart className={styles.cartIcon}/></Link>
				<p>12</p>
			</div>
		</header>
	)
}

export default Navbar
