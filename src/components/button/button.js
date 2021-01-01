import utilStyles from '../../assets/global-styles/utils.module.css';
export default function Button(props) {
	return (
		<div className={utilStyles.button}>
			{props.buttonLabel||"Pass props"}
		</div>
	)
}
