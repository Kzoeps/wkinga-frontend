import styles from "./license-info.module.css";
import {FaCheckCircle} from "react-icons/fa"

export default function LicenseInfo(props) {
	return(
		//:TODO: decide which are gonna be props and how its all going to work
		//what i have in mind right now is that a props is going to be passed which is the song id and then info corresponding to that id
		<div className={props.lastLicense ? `${styles.lastLicenseInfoContainer}`:`${styles.licenseInfoContainer}`}>
				<div className={`${styles.licenseNamePrice}`}>
					<div className={`${styles.licenseName}`}>
						<h4 className={``}>
							LEASE
						</h4>
					</div>
					<div className={`${styles.licensePriceContainer}`}>
						<h4 className={`${styles.licensePrice}`}>
							30$ / BTN 2100
						</h4>
					</div>
				</div>
				<div className={`${styles.chooseFileType}`}>
					<div className={`${styles.fileFormats}`}>
						<p>Wav 3, Mp3 and others</p>
					</div>
					<div className={`${styles.selectLicense}`}>
						<FaCheckCircle className={`${styles.selectLicenseIcon}`}
									   onClick={()=>{
										   props.setShow(false);
										   props.setLabel('Remove From Cart')
									   }}
						/>
					</div>
				</div>
		</div>
	)
}
