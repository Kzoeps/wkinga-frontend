import { baseURL } from "./baseURL";
import axios from "axios";

export const placeOrder = async (order) => {
	try {
		await axios.post(`${baseURL}/orders`, order);
	} catch (e) {
		return e.message
	}
}
