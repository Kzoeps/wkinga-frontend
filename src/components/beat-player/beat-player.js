import {useState} from "react";
import styles from "./beat-player.module.css";
import Button from "../button/button";
import LicenseForm from "../license/license-form";
import {useDispatch, useSelector} from "react-redux";
import utilStyles from '../../assets/global-styles/utils.module.css';
import {removeBeat, selectCart, setCurrentBeat} from "../../reducers/cart-reducer";

export default function BeatsPlayer(props) {

	const cart = useSelector(selectCart);
	const inCart = cart.find((eachBeat) => eachBeat.beatId === props.beat.id);
	const [showForm, setForm] = useState(false);
	const [btnLabel, setLabel] = useState(inCart ? 'Remove' : 'Add');
	const dispatch = useDispatch();

	const onAddToCartClicked = () => {
		if (btnLabel === 'Add') {
			setForm(true);
			dispatch(setCurrentBeat(props.beat));
		} else {
			setLabel('Add');
			dispatch(removeBeat(props.beat.id));
		}
	}
	const calculateBeatDuration = (duration) => {
		const minute = Math.floor(duration/60);
		const seconds = duration% 60;
		return `${minute}:${seconds}`
	}
	return (
		<div>
			<div className={styles.beatsPlayerContainer}>
				<div className={styles.albumArtContainer}>
					<img src={props.beat.imgURL} alt={'album'}/>
				</div>
				<div className={styles.beatDescription}>
					<div className={styles.songTitleMinute}>
						<div className={styles.songTitle}>
							{props.beat.beatName}
						</div>
						<div className={styles.songMinute}>
							{calculateBeatDuration(props.beat.beatDuration)}
						</div>
					</div>
					<div className={styles.prodCart}>
						<div className={styles.beatProd}>
							{props.beat.beatProducer}
						</div>
						<div className={`${styles.cartBtn} ${utilStyles.pointerHover} ${utilStyles.buttonHover}`} onClick={onAddToCartClicked}>
							<Button buttonLabel={btnLabel}/>
						</div>
					</div>
				</div>
			</div>
			{showForm ? <LicenseForm showLicense={true} setShow={setForm} setLabel={setLabel}/> : null}
		</div>
	)
}
