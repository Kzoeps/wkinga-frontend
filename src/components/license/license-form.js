import styles from "./license-form.module.css";
import utilStyles from '../../assets/global-styles/utils.module.css';
import {FaWindowClose} from "react-icons/fa"
import LicenseInfo from "./license-info";

export default function LicenseForm(props) {
	return (
		<div className={`${styles.licenseFormContainer}`}>
			<div className={`${styles.beatInfoContainer}`}>
				<img src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
					 className={styles.beatsImg} alt={'album'}/>
				<div className={`${styles.beatsInfo} ${utilStyles.ralewayFont}`}>
						<div className={`${styles.titleAndArtist}`}>
							<h4>Song Title</h4>
							<p>Wangchuk Kinga</p>
						</div>
						<div className={`${styles.windowClose}`} onClick={() => {
							props.setShow(false);
						}}>
							<FaWindowClose className={`${styles.windowCloseIcon}`}/>
						</div>
				</div>
			</div>
			<hr className={`${styles.formInfoDivider}`}/>
			<LicenseInfo setShow={props.setShow} setLabel={props.setLabel}/>
			<LicenseInfo setShow={props.setShow} setLabel={props.setLabel}/>
			<LicenseInfo setShow={props.setShow} lastLicense={true} setLabel={props.setLabel}/>
		</div>
	)
}
