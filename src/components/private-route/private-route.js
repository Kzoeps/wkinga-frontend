import { Route, Redirect } from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../contexts/auth-context";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
	const { token } = useContext(AuthContext);
	return <Route {...rest} render={(routeProps) => (!!token ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />)} />;
}

export default PrivateRoute;
