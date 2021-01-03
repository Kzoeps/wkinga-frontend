import styles from './playlist.module.css';

export default function Playlist(props) {
		return (
			<div className={styles.playlistContainer}>
				<p className={styles.playlistHeading}>{props.title}</p>
				<div className={styles.albumContainer}>
					<img className={`${styles.albumImage} ${props.long && styles.makeLong}`} src={props.imageOne} alt="Album"/>
					<img className={`${styles.albumImage} ${props.long && styles.makeLong}`} src={props.imageTwo} alt="Album"/>
					<img className={`${styles.albumImage} ${props.long && styles.makeLong}`} src={props.imageTwo} alt="Album"/>
					<img className={`${styles.albumImage} ${props.long && styles.makeLong}`} src={props.imageOne} alt="Album"/>
				</div>
			</div>
		)
}
