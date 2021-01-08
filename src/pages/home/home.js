import styles from './home.module.css'
import Footer from "../../components/footer/footer";
import Playlist from "../../components/playlist/playlist";

export default function Home(props) {
	return (
		<div className={styles.containerEn}>
			<main className={styles.mainPage}>
				<div className={styles.mainContentContainer}>
					<div className={styles.homeHeadingContainer}>
						<p className={styles.headingOne}>#1 market place to buy beats</p>
						<p className={styles.headingTwo}>We have more than 1.2 m happy customers</p>
					</div>
				</div>
			</main>
			{props.beatsStatus ? <div className={styles.homepagePlaylistContainer}>
				{/* For now the image link is directly passed as props , when db is ready will do in the component itself */}
				<Playlist title="Recommended Playlist" imageOne="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png" imageTwo="https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"/>
				<Playlist title="Popular Playlist" imageTwo="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png" imageOne="https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg" long/>
				<Playlist title="Lorem Ipsum Playlist" imageOne="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png" imageTwo="https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg" />
			</div> : <div className={styles.loader}>Loading ...</div>}

			<Footer/>
		</div>
	)
}
