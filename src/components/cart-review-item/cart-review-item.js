import utilStyles from '../../assets/global-styles/utils.module.css';
import styles from './cart-review-item.module.css';
import {FaPlay, RiCloseLine} from "react-icons/all";

export default function CartReviewItem() {
	return (
		<div className={`${styles.cartReviewItemWholeContainer}`}>
			<div className={styles.cartReviewItemContainer}>
				<div className={`${styles.playIconContainer}`}>
					<FaPlay className={`${styles.playIcon}`}/>
				</div>
				<div className={`${utilStyles.text} ${styles.titleAndArtist}`}>
					<div className={`${styles.beatName}`}>
						<span>Deathroes</span>
					</div>
					<div className={`${styles.producer}`}>
						<span>Wangchuk Kinga</span>
					</div>
				</div>
				<div className={`${utilStyles.text} ${styles.priceAndLicense}`}>
					<div className={`${styles.priceAndClose}`}>
						<div className={`${styles.prices}`}>
							<span>30$ / 2100 BTN</span>
						</div>
						<div className={`${styles.closeButton}`}>
							<span> <RiCloseLine/> </span>
						</div>
					</div>
					<div className={`no-gutters`}>
						<div className={`${styles.licenseName}`}>
							<span>Lease License</span>
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
