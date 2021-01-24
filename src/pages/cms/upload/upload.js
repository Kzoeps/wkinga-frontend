import React from 'react';
import PersistentDrawerLeft from "../../../components/drawer-material/cms-drawer";
import UploadForm from "../../../components/upload-form/upload-form";
import styles from './upload.module.css'

export default function Upload() {
	return (
		<div className={styles.container}>
			<PersistentDrawerLeft/>
			<UploadForm className={styles.form}/>
		</div>
	)
}
