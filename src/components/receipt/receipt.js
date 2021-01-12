import styles from './receipt.module.css';
import {Card} from '@material-ui/core';
import {useSelector} from "react-redux";
import {getLicensePrice, getTotal, selectCart} from "../../reducers/cart-reducer";

export default function Receipt() {
	const beatsInCart = useSelector(selectCart);
	const cartTotal = getTotal(beatsInCart);

	const items = beatsInCart.map((eachBeat) => (
		<div key={eachBeat.beatId} className={styles.item}>
			<div className={styles.itemContent}>
				<h6>{eachBeat.beatName}</h6>
				<p>{eachBeat.chosenLicenseType}</p>
			</div>
			<p>{getLicensePrice(eachBeat)}$</p>
		</div>
	))
	return (
		<Card className={styles.receiptContainer}>
			<div className={styles.receiptTitleContainer}>
				<p>ITEM</p>
				<p>PRICE</p>
			</div>
			<hr className={styles.line}/>

			<div className={styles.receiptItemContainer}>
				{items}
			</div>
			<hr className={styles.line}/>
			<div className={styles.receiptPriceContainer}>
				<p>Total</p>
				<p>{cartTotal.totalPrice}$</p>
			</div>
		</Card>
	)
}
