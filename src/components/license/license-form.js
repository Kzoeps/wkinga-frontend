import styles from "./license-form.module.css";
import utilStyles from '../../assets/global-styles/utils.module.css';
import {FaWindowClose} from "react-icons/fa"
import LicenseInfo from "./license-info";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export default function LicenseForm(props) {
	const beat = useSelector(state => state.cart.currentBeat);
	const licensePrices = [{'Trackout Lease': beat.trackoutLeasePrice}, {'Premium Lease':beat.premiumLeasePrice}, {'Exclusive': beat.exclusivePrice}];

	const licensesInfo = licensePrices.map(license => (
		<LicenseInfo key={nanoid()} beatInfo={license} beat={beat} beatId={beat.id} setShow={props.setShow} setLabel={props.setLabel}/>
	))

	return (
		<div className={`${styles.licenseFormContainer}`}>
			<div className={`${styles.beatInfoContainer}`}>
				<img src={beat.albumImage}
					 className={styles.beatsImg} alt={'album'}/>
				<div className={`${styles.beatsInfo} ${utilStyles.ralewayFont}`}>
						<div className={`${styles.titleAndArtist}`}>
							<h4>{beat.beatName}</h4>
							<p>{beat.beatProducer}</p>
						</div>
						<div className={`${styles.windowClose} ${utilStyles.pointerHover}`} onClick={() => {
							props.setShow(false);
						}}>
							<FaWindowClose className={`${styles.windowCloseIcon}`}/>
						</div>
				</div>
			</div>
			<hr className={`${styles.formInfoDivider}`}/>
			{licensesInfo}
		</div>
	)
}
