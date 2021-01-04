import {useState} from "react";
import styles from "./beat-player.module.css";
import Button from "../button/button";
import LicenseForm from "../license/license-form";

export default function BeatsPlayer(props) {
	const [showForm, setForm] = useState(false);
	const [btnLabel, setLabel] = useState('Add To Cart')
	return (
		<div>
			<div className={styles.beatsPlayerContainer}>
				<div className={styles.albumArtContainer}>
					<img src={props.beat.albumImage} alt={'album'}/>
				</div>
				<div className={styles.beatDescription}>
					<div className={styles.songTitleMinute}>
						<div className={styles.songTitle}>
							{props.beat.beatName}
						</div>
						<div className={styles.songMinute}>
							{props.beat.beatDuration}
						</div>
					</div>
					<div className={styles.prodCart}>
						<div className={styles.beatProd}>
							{props.beat.beatProducer}
						</div>
						<div className={styles.cartBtn} onClick={() => {
							if (btnLabel === 'Add To Cart') {
								setForm(true);
							} else {
								setLabel('Add To Cart')
							}

						}}>
							<Button buttonLabel={btnLabel}/>
						</div>
					</div>
				</div>
			</div>
			{showForm ? <LicenseForm showLicense={true} setShow={setForm} setLabel={setLabel}/> : null}
		</div>
	)
}
