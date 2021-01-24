import { baseURL } from "./baseURL";
import axios from "axios";
import {ProcessEnum} from "../models/models";

export const placeOrder = async (order) => {
	try {
		await axios.post(`${baseURL}/orders`, order);
	} catch (e) {
		return e.message
	}
}

export const uploadBeat = async (beat) => {
	try {
		await axios.post(`${baseURL}/beats`, beat);
		return ProcessEnum.success;
	} catch (e) {
		return e.message;
	}
}
