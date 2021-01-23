import React from "react";
import PersistentDrawerLeft from "../../../components/drawer-material/cms-drawer";
import DataTable from "../../../components/table-paginator/paginate-orders";
import styles from './dashboard.module.css';

export default function Dashboard() {
	return (
		<React.Fragment>
			<div className={`${styles.container}`}>
				<PersistentDrawerLeft/>
				<div className={`${styles.dataContainer}`}><DataTable/></div>
			</div>
		</React.Fragment>
	)
}
