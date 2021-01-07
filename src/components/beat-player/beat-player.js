import {useState} from "react";
import styles from "./beat-player.module.css";
import Button from "../button/button";
import LicenseForm from "../license/license-form";
import {useDispatch, useSelector} from "react-redux";
import {removeBeat, selectCart, setCurrentBeat} from "../../reducers/cart-reducer";

export default function BeatsPlayer(props) {

	const cart = useSelector(selectCart);
	const inCart = cart.find((eachBeat) => eachBeat.beatId === props.beat.id);
	const [showForm, setForm] = useState(false);
	const [btnLabel, setLabel] = useState(inCart ? 'Remove From Cart' : 'Add To Cart');
	const dispatch = useDispatch();

	const onAddToCartClicked = () => {
		if (btnLabel === 'Add To Cart') {
			setForm(true);
			dispatch(setCurrentBeat(props.beat));
		} else {
			setLabel('Add To Cart');
			dispatch(removeBeat(props.beat.id));
		}
	}
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
						<div className={styles.cartBtn} onClick={onAddToCartClicked}>
							<Button buttonLabel={btnLabel}/>
						</div>
					</div>
				</div>
			</div>
			{showForm ? <LicenseForm showLicense={true} setShow={setForm} setLabel={setLabel}/> : null}
		</div>
	)
}
