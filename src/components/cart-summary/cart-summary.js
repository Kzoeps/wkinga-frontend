import styles from './cart-summary.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css';
import Button from "../button/button";
import {Link} from "react-router-dom";
import Header from "../header/header";
import {useSelector} from "react-redux";
import {getLicensePrice, selectCart} from "../../reducers/cart-reducer";
import PriceNameHolder from "./price-name-holder";

export default function CartSummary() {
	const beatsInCart = useSelector(selectCart);
	const cartTotal = beatsInCart.reduce((sumPrice, currentBeat) => {
			return {totalPrice: sumPrice.totalPrice + getLicensePrice(currentBeat)}
		}, {totalPrice: 0});
	const beatsHolders = beatsInCart.map(eachBeat => (
		<PriceNameHolder key={eachBeat.beatId} beatName={eachBeat.beatName} licensePrice={getLicensePrice(eachBeat)}/>
	))
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
				{beatsHolders}
			</div>
			<hr className={`${styles.cartSummaryhr}`}/>
			<div className={`${styles.items}`}>
				<div className={`${styles.eachItem}`}>
					<div className={`${utilStyles.text}`}>
						Total
					</div>
					<div className={`${utilStyles.text}`}>
						{cartTotal.totalPrice}$
					</div>
				</div>
			</div>
			<div className={`${styles.checkoutButton}`}>
				<Link to="/checkout"><Button buttonLabel="Checkout"/></Link>
			</div>
		</div>
	)
}
