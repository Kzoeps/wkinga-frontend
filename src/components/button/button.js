import utilStyles from '../../assets/global-styles/utils.module.css';
export default function Button(props) {
	return (
		<div className={`${utilStyles.button} ${utilStyles.buttonHover}`} onClick={props.onClick}>
			{props.buttonLabel||"Pass props"}
		</div>
	)
}
