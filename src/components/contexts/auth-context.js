import {createContext, useState} from "react";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
	const [token, setToken] = useState(localStorage.getItem('token') || '');

	const logout = () => {
		localStorage.removeItem('token');
		setToken('');
	}

	return (
		<AuthContext.Provider value={{token, setToken, logout}}>
			{children}
		</AuthContext.Provider>
	)
}
