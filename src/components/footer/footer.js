import styles from './footer.module.css';
import {
	AiFillFacebook, AiFillLinkedin,
	AiOutlineInstagram, AiOutlineTwitter,
} from "react-icons/all";
import logo from '../../assets/images/logo.svg'
import {Link} from "react-router-dom";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerChildOneContainer}>
				<div className={styles.footerOne}>
					<div className={styles.titleHolder}>
						<img className={styles.imgLogo} src={logo} alt="CompanyLogo"/>
						<h4>WK Beats</h4>
					</div>

					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</p>
					<div className={styles.footerOneMediaContainer}>
						<a href="https://instagram.com/sartsugbhutan" rel="noopener noreferrer" target="_blank" className={styles.footerInsta}><AiOutlineInstagram/>
						</a>
						<a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerFacebook}><AiFillFacebook/>
						</a>
						<a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerTwitter}><AiOutlineTwitter/>
						</a>
						<a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiFillLinkedin/>
						</a>
					</div>
				</div>

				<div className={styles.footerTwo}>
					<h4>Quick Links</h4>
					<Link to="/">Home</Link>
					<Link to="/beats">Beats</Link>
					<Link to={'/checkout'}>Checkout</Link>
					<Link to={'/cart-review'}>Cart-Review</Link>
				</div>
				<div className={styles.footerFour}>
					<h4>About Us</h4>
					<Link to="/about-me">About Me</Link>
					<Link to="/contact">Contact</Link>

				</div>
				<div className={styles.footerThree}>
					<h4>Legal</h4>
					<Link to="/">Terms and condition
					</Link>
					<Link to="/">Privacy and Policy</Link>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.footerChildTwoContainer}>
				<div className={styles.footerTwoContainer}>
					<p>
						&copy;Wk Beats Bhutan 2020-
						<span>making is the Cool beats la.</span>
					</p>
				</div>
			</div>
		</div>
	)
}
