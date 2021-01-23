import utilStyles from '../../assets/global-styles/utils.module.css';
import Header from "../../components/header/header";
import CartSummary from "../../components/cart-summary/cart-summary";
import Footer from "../../components/footer/footer";
import styles from './cart-review.module.css'

export default function CartReview(props) {
	return (
		<div className={`${utilStyles.backgroundColor}`}>
			<Header title={'Cart Review'}/>
			<div className={`${styles.holders}`}>
				<div className={`${styles.beats}`}>
					{props.cartItems}
				</div>
				<div className={`${styles.cartSummary}`}>
					<CartSummary/>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
