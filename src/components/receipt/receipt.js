import styles from './receipt.module.css';
import {Card} from '@material-ui/core';

export default function Receipt() {
	return (
		<Card className={styles.receiptContainer}>
			<div className={styles.receiptTitleContainer}>
				<p>ITEM</p>
				<p>PRICE</p>
			</div>
			<hr className={styles.line}/>

			<div className={styles.receiptItemContainer}>
				{/* Use map funcion to display the item when the backend is ready */}
				<div className={styles.item}>
					<div className={styles.itemContent}>
						<h6>Wangchuk Kinga beats 1</h6>
						<p>Lease</p>
					</div>
					<p>30$</p>
				</div>
				<div className={styles.item}>
					<div className={styles.itemContent}>
						<h6>Wangchuk Kinga beats 1</h6>
						<p>Lease</p>
					</div>
					<p>30$</p>
				</div>
				<div className={styles.item}>
					<div className={styles.itemContent}>
						<h6>Wangchuk Kinga beats 1</h6>
						<p>Lease</p>
					</div>
					<p>30$</p>
				</div>
			</div>
			<hr className={styles.line}/>
			<div className={styles.receiptPriceContainer}>
				<p>Total</p>
				<p>90$</p>
			</div>
		</Card>
	)
}
