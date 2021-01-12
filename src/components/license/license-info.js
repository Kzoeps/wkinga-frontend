import styles from "./license-info.module.css";
import {FaCheckCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {addBeatToCart} from "../../reducers/cart-reducer";

export default function LicenseInfo(props) {
	const licenseType = Object.keys(props.beatInfo)[0];
	const dispatch = useDispatch();

	const onCartAddClick = () => {
		props.setShow(false);
		props.setLabel('Remove From Cart');
		dispatch(addBeatToCart(props.beat, licenseType))
	}

	return(
		//TODO: exchange price and also file types for each license type;
		<div className={`${styles.licenseInfoContainer}`}>
				<div className={`${styles.licenseNamePrice}`}>
					<div className={`${styles.licenseName}`}>
						<h4 className={``}>
							{licenseType ? licenseType : 'error'}
						</h4>
					</div>
					<div className={`${styles.licensePriceContainer}`}>
						<h4 className={`${styles.licensePrice}`}>
							{`${props.beatInfo[licenseType]}$ / ${props.beatInfo[licenseType]*75}BTN`}
						</h4>
					</div>
				</div>
				<div className={`${styles.chooseFileType}`}>
					<div className={`${styles.fileFormats}`}>
						<p>Wav 3, Mp3 and others</p>
					</div>
					<div className={`${styles.selectLicense}`}>
						<FaCheckCircle className={`${styles.selectLicenseIcon}`}
									   onClick={onCartAddClick}
						/>
					</div>
				</div>
		</div>
	)
}
