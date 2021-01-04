import {Row, Col} from "react-bootstrap";
import styles from "./license-form.module.css";
import utilStyles from '../../assets/global-styles/utils.module.css';
import {FaWindowClose} from "react-icons/fa"
import LicenseInfo from "./license-info";

export default function LicenseForm(props) {
	return (
		<Row className={`no-gutters justify-content-center ${styles.licenseFormContainer}`}>
			<Col xs={12}>
				<Row className="no-gutters">
					<Col xs={4}>
						<img src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
							 className={styles.beatsImg} alt={'album'}/>
					</Col>
					<Col xs={8} className={`${styles.beatsInfo} ${utilStyles.ralewayFont}`}>
						<Row className={`no-gutters`}>
							<Col xs={8}>
								<h4>Song Title</h4>
							</Col>
							<Col xs={4} className={`${styles.windowClose}`} onClick={() => {
								props.setShow(false);
							}}>
								<FaWindowClose className={`${styles.windowCloseIcon}`}/>
							</Col>
						</Row>
						<p>SONG ARTIEST</p>
					</Col>
				</Row>
				<hr className={`${styles.formInfoDivider}`}/>
				<LicenseInfo setShow={props.setShow} setLabel={props.setLabel}/>
				<LicenseInfo setShow={props.setShow} setLabel={props.setLabel}/>
				<LicenseInfo setShow={props.setShow} lastLicense={true} setLabel={props.setLabel}/>
			</Col>
		</Row>
	)
}
