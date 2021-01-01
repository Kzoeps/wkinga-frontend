import styles from '../../pages/beats/beats.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css';
import Button from "../button/button";
import {Link} from "react-router-dom";

export default function CartSummary(){
	return (
		<div className={`${styles.cartSummary}`}>
			<div className={`${styles.cartSummaryTitle}`}>
				<h3 className={`${utilStyles.headers} ${utilStyles.title} ${styles.title}`}>Cart
					Summary</h3>
				<hr className={`${utilStyles.hr}`}/>
			</div>
			<div className={`${styles.cartSummaryItemPrice}`}>
				<div className={`${utilStyles.text}`}>
					<p>Item</p>
				</div>
				<div className={`${utilStyles.text}`}>
					<p>Price</p>
				</div>
			</div>
			<hr className={`${styles.cartSummaryhr}`}/>
			<div className={`${styles.items}`}>
				<div className={`${styles.eachItem}`}>
					<div className={`${utilStyles.text}`}>
						Song Name
					</div>
					<div className={`${utilStyles.text}`}>
						30$
					</div>
				</div>
				<div className={`${styles.eachItem}`}>
					<div className={`${utilStyles.text}`}>
						Toosie Slide
					</div>
					<div className={`${utilStyles.text}`}>
						30$
					</div>
				</div>
				<div className={`${styles.eachItem}`}>
					<div className={`${utilStyles.text}`}>
						Black Leather Gloves
					</div>
					<div className={`${utilStyles.text}`}>
						30$
					</div>
				</div>
			</div>
			<hr className={`${styles.totalHR}`}/>
			<div className={`${styles.items}`}>
				<div className={`${styles.eachItem}`}>
					<div className={`${utilStyles.text}`}>
						Total
					</div>
					<div className={`${utilStyles.text}`}>
						90$
					</div>
				</div>
			</div>
			<div className={`${styles.checkoutButton}`}>
				<Link to="/checkout"><Button buttonLabel="Checkout"/></Link>
			</div>
		</div>
	)
}
