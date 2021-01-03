import styles from './cart-summary.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css';
import Button from "../button/button";
import {Link} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function CartSummary(){
	return (
		<div className={`${styles.cartSummary}`}>
			<Header title={'Cart Summary'}/>
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
			<hr className={`${styles.cartSummaryhr}`}/>
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
