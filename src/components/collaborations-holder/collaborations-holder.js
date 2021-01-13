import utilStyles from '../../assets/global-styles/utils.module.css';
import styles from './collaborations-holder.module.css'

export default function CollaborationsHolder(props) {
	return (
		<div className={`${styles.container}`}>
			<div className={`${styles.imageContainer}`}>
				<img src={props.img} className={`${styles.image}`} alt={'album'}/>
			</div>
			<div className={`${styles.descriptionContainer}`}>
				<h4 className={`${utilStyles.title} ${styles.descriptionTitle}`}>{props.description}</h4>
			</div>
		</div>
	)
}
