import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/baseURL";
import Loader from "../loader/loader";
import {v4 as uuidv4} from 'uuid';

const columns = [
	{field: 'journalID', headerName: 'Journal ID', width: 150},
	{field: 'email', headerName: 'email', width: 130},
	{field: 'beatName', headerName: 'Beat Name', width: 180},
	{field: 'beatId', headerName: 'Beat ID', width: 150,},
	{field: 'chosenLicenseType', headerName: 'License', width: 180},
];

export default function DataTable() {
	const [orders, setOrders] = useState([]);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		const getOrders = async () => {
			try {
				const orders = (await axios.get(`${baseURL}/orders`)).data;
				return orders.map((eachOrder) => {
					const cleanOrder = {};
					columns.forEach((eachHeader) => {
						const headerField = eachHeader.field;
						cleanOrder[headerField] = eachOrder[headerField];
						cleanOrder['id'] = uuidv4();
					})
					return cleanOrder;
				})
			} catch (e) {
				console.log(e.message);
				return [];
			} finally {
				setPending(false);
			}
		};
		getOrders().then((cleanOrders) => setOrders(cleanOrders));
	},[])
	if (pending) return <Loader/>
	return (
		<div style={{height: 400, width: '100%'}}>
			<DataGrid rows={orders} columns={columns} pageSize={5} checkboxSelection/>
		</div>
	);
}
