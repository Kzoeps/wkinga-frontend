import styles from "./cart-summary.module.css";
import utilStyles from "../../assets/global-styles/utils.module.css";

export default function PriceNameHolder(props) {
	return (
		<div className={`${styles.eachItem}`}>
			<div className={`${utilStyles.text}`}>
				{props.beatName}
			</div>
			<div className={`${utilStyles.text}`}>
				{props.licensePrice}$
			</div>
		</div>
	)
}
