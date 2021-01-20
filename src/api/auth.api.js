import {baseURL} from "./baseURL";
import axios from "axios";

export const login = async (email, password) => {
	try {
		const response = await axios.post(`${baseURL}/login`, {email, password});
		return response.data.accessToken;
	} catch (e) {
		return false;
	}
}
