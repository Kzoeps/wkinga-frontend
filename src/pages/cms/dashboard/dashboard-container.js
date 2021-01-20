import Dashboard from "./dashboard";
import {useContext} from "react";
import {AuthContext} from "../../../components/contexts/auth-context";

export default function DashboardContainer() {
	const { logout } = useContext(AuthContext);
	return (
		<Dashboard
			logout={logout}
		/>
	)
}
