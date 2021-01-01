import NavigationBar from "../../components/navigation-bar/navigationBar";
import {Col, Container, Row} from "react-bootstrap";
import utilStyles from '../../assets/global-styles/utils.module.css';
import styles from './beats.module.css';
import aboutMeStyles from '../about-me/about-me.module.css'
import Button from "../../components/button/button";
import BeatsPlayer from "../../components/beat-player/beat-player";
import CartSummary from "../../components/cart-summary/cart-summary";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function Beats() {
	return (
		<Container className={`${utilStyles.backgroundColor} ${styles.metaContainer}`} fluid={true}>
			{/*<NavigationBar/>*/}
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
				<Col className={styles.button}>
					<Button buttonLabel="Checkout"/>
				</Col>
			</div>
			<div className={`${styles.cartAndBeats}`}>
				<div className={`${styles.beatsPlayer} no-gutters`}>
					<div className={styles.beatPlayer}>
						<BeatsPlayer beatDuration="2:59"
									 imgURL="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png"/>
					</div>
					<div className={styles.beatPlayer}>
						<BeatsPlayer beatDuration="3:00"
									 imgURL={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}/>
					</div>
					<div className={styles.beatPlayer}>
						<BeatsPlayer beatDuration="1:54"
									 imgURL={"https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png"}/>
					</div>
					<div className={styles.beatPlayer}>
						<BeatsPlayer beatDuration="1:23"
									 imgURL={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}/>
					</div>
				</div>
				<CartSummary/>
			</div>
			<Footer/>
		</Container>

	)
}
