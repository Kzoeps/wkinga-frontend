import utilStyles from '../../assets/global-styles/utils.module.css';
import styles from './cart-review-item.module.css';
import {FaPlay, RiCloseLine} from "react-icons/all";
import {getLicensePrice, removeBeat} from "../../reducers/cart-reducer";
import { useDispatch } from "react-redux";

export default function CartReviewItem(props) {
	const dispatch = useDispatch();
	const licenseChosenPrice = getLicensePrice(props.beat);
	const removeFromCart = () => {
		dispatch(removeBeat(props.beat.beatId))
	}

	return (
		<div className={`${styles.cartReviewItemWholeContainer}`}>
			<div className={styles.cartReviewItemContainer}>
				<div className={`${styles.playIconContainer}`}>
					<FaPlay className={`${styles.playIcon}`}/>
				</div>
				<div className={`${utilStyles.text} ${styles.titleAndArtist}`}>
					<div className={`${styles.beatName}`}>
						<span>{props.beat.beatName}</span>
					</div>
					<div className={`${styles.producer}`}>
						<span>{props.beat.beatProducer}</span>
					</div>
				</div>
				<div className={`${utilStyles.text} ${styles.priceAndLicense}`}>
					<div className={`${styles.priceAndClose}`}>
						<div className={`${styles.prices}`}>
							<span>{licenseChosenPrice}$/ {licenseChosenPrice*75} BTN</span>
						</div>
						<div className={`${styles.closeButton} ${utilStyles.pointerHover}`}>
							<span> <RiCloseLine onClick={removeFromCart}/> </span>
						</div>
					</div>
					<div className={`no-gutters`}>
						<div className={`${styles.licenseName}`}>
							<span>{props.beat.chosenLicenseType}</span>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.hr}`}>
				<hr className={`${utilStyles.hr}`}/>
			</div>
		</div>
	)
}
