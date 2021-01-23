import React from "react";
import {Button} from "@material-ui/core";
import PersistentDrawerLeft from "../../../components/drawer-material/cms-drawer";
import DataTable from "../../../components/table-paginator/paginate-orders";
import styles from './dashboard.module.css';

export default function Dashboard(props) {
	return (
		<React.Fragment>
			<div className={`${styles.container}`}>
				<PersistentDrawerLeft/>
				<div className={`${styles.dataContainer}`}><DataTable/></div>
				{/*<Button variant={'outlined'} color={'primary'} onClick={props.logout}>*/}
				{/*	Logout*/}
				{/*</Button>*/}
			</div>
		</React.Fragment>
	)
}
