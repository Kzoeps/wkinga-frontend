import React from "react";
import {Button} from "@material-ui/core";
import PersistentDrawerLeft from "../../../components/drawer-material/cms-drawer";
export default function Dashboard(props) {
	return (
		<React.Fragment>
			<PersistentDrawerLeft/>
			<Button variant={'outlined'} color={'primary'} onClick={props.logout}>
				Logout
			</Button>
		</React.Fragment>
	)
}
