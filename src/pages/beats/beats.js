import NavigationBar from "../../components/navigation-bar/navigationBar";
import {Col, Container, Row} from "react-bootstrap";
import utilStyles from '../../assets/global-styles/utils.module.css';
import styles from './beats.module.css';
import aboutMeStyles from '../about-me/about-me.module.css'
import Button from "../../components/button/button";
import BeatsPlayer from "../../components/beat-player/beat-player";
import CartSummary from "../../components/cart-summary/cart-summary";

export default function Beats() {
	return (
		<Container className={`${utilStyles.backgroundColor} ${styles.metaContainer}`} fluid={true}>
			{/*<NavigationBar/>*/}
			<Row className={`justify-content-center ${utilStyles.headers} ${aboutMeStyles.header}`}>
				<Col xs={11} lg={11}>
					<h3 className={`${utilStyles.title} ${aboutMeStyles.title}`}>Beats</h3>
					<hr className={utilStyles.hr}/>
				</Col>
			</Row>
			<Row className={`justify-content-center no-gutters ${styles.beatsDescription}`}>
				<Col xs={8} lg={4} className={`${utilStyles.text} ${aboutMeStyles.text} ${styles.text}`}>
					<p>
						My beats are solely produced by me and i make them for fun but would be down for a collaboration
						as well.
					</p>
					<p>
						The beats are licensed under apache 2.0 and please dont fork.
						All beats are pretty good and if you really want to use but no money then email me.
					</p>
				</Col>
			</Row>
			<div className={`${styles.beatsDescriptionComp}`}>
				<Col className={`${styles.beatsDescriptionContainer}`}>
					<Row>
						<Col lg={{span: 5}}
							 className={`${utilStyles.text} ${aboutMeStyles.text} ${styles.text} ${styles.textContainer}`}>
							<p className={`${styles.beatsDescriptionCompFirstP}`}>
								My beats are solely produced by me and i make them for fun but would be down for a
								collaboration
								as well.
							</p>
							<p>
								The beats are licensed under apache 2.0 and please dont fork.
								All beats are pretty good and if you really want to use but no money then email me.
							</p>
						</Col>
					</Row>
				</Col>
			</div>
			<Row className={`no-gutters`}>
				<Col xs={{span: 4, offset: 7}} className={styles.button}>
					<Button buttonLabel="Checkout"/>
				</Col>
			</Row>
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
		</Container>

	)
}
