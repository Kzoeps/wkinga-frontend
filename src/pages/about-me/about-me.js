import utilStyles from '../../assets/global-styles/utils.module.css'
import styles from './about-me.module.css';
import Header from "../../components/header/header";
import CollaborationsHolder from "../../components/collaborations-holder/collaborations-holder";
import NavigationBar from "../../components/navigation-bar/navigationBar";
import Footer from "../../components/footer/footer";

export default function AboutMe() {
	return (
		<div className={`${utilStyles.backgroundColor} ${styles.aboutMeContainer}`}>
			<NavigationBar/>
			<Header title={'About Me'}/>
			<div className={`${utilStyles.text} ${styles.text} ${styles.descriptionWK}`}>
				<p>
					Hello! I'm Brittany, a software engineer based in Boston, MA.
					I enjoy creating things that live on the internet, whether that be websites, applications, or
					anything in between. My goal is to always build products that provide pixel-perfect, performant
					experiences.
					<br/>
					<br/>
					Shortly after graduating from Northeastern University, I joined the engineering team at
					Upstatement where I work on a wide variety of interesting and meaningful projects on a daily
					basis.
				</p>
			</div>

			<Header title={'Collaboration'}/>
			<div className={`${styles.collaborationContainer}`}>
				<CollaborationsHolder className={`${styles.collabContainerItem}`} img={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
									  description={'Wangchuk Kinga X GSD'}/>
				<CollaborationsHolder img={'https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png'}
									  description={'Wangchuk K X DORJidorol'}/>
			</div>
			<div className={`${styles.collaborationContainer}`}>
				<CollaborationsHolder className={`${styles.collabContainerItem}`} img={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
									  description={'Wangchuk Kinga X GSD'}/>
				<CollaborationsHolder img={'https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png'}
									  description={'Wangchuk K X DORJidorol'}/>
			</div>
			<Footer/>
		</div>
	)
}
