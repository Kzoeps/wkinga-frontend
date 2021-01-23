import utilStyles from '../../assets/global-styles/utils.module.css';
import styles from './beats.module.css';
import Button from "../../components/button/button";
import BeatsPlayer from "../../components/beat-player/beat-player";
import CartSummary from "../../components/cart-summary/cart-summary";
import Header from "../../components/header/header";
import {Link} from "react-router-dom";
import Loader from "../../components/loader/loader";
import NavigationBar from "../../components/navigation-bar/navigationBar";
import Footer from "../../components/footer/footer";

export default function Beats(props) {
	return (
		<div className={`${utilStyles.backgroundColor} ${styles.metaContainer}`}>
			<NavigationBar/>
			<Header title={'Beats'}/>
			<div className={`${styles.beatsDescriptionComp} ${utilStyles.text}`}>
				<div className={`${styles.descriptionItem}`}>
					<p className={`${styles.beatsDescriptionCompFirstP}`}>
						My beats are solely produced by me and i make them for fun but would be down for a
						collaboration
						as well.
					</p>
				</div>
				<div className={`${styles.descriptionItem}`}>
					<p>
						The beats are licensed under apache 2.0 and please dont fork.
						All beats are pretty good and if you really want to use but no money then email me.
					</p>
				</div>
			</div>
			<div className={styles.buttonHolder}>
				<div className={styles.button}>
					<Link to={'/cart-review'}><Button buttonLabel="Checkout"/></Link>
				</div>
			</div>
			<div className={`${styles.cartAndBeats}`}>
				<div className={`${styles.beatsPlayer} no-gutters`}>
					{props.beatsStatus ? props.beats.map(beat =>
						(
							<div className={styles.beatPlayer} key={beat.id}>
								<BeatsPlayer beat={beat}/>
							</div>
						)
					) : <Loader/>}
				</div>
				<div className={styles.cartSummary}><CartSummary/></div>
			</div>
			<Footer/>
		</div>

	)
}
