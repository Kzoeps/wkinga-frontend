import React, {useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/baseURL";
import Loader from "../loader/loader";

const AuthContext = React.createContext(undefined);

export const AuthProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(undefined);
	const [token, setToken] = useState(localStorage.getItem('token') || undefined);
	const [pending, setPending] = useState(false);

	const login = async (email, password) => {
		try {
			setPending(true);
			const response = await axios.post(`${baseURL}/login`, {email, password});
			setPending(false);
			if (response.data) setToken(response.data);
		} catch (e) {
			return e.message
		}
	}

	const logout = () => {
		localStorage.clear();
		setCurrentUser(undefined);
		setToken(undefined);
	}

	if (pending) return (<Loader/>);
	return (
		<AuthContext.Provider value={{currentUser, token, login, logout}}>
			{children}
		</AuthContext.Provider>
	)
}
