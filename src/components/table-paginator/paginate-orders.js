import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../loader/loader";

const columns = [
    {field: 'id', headerName: 'Order ID', width: 150,},
    {field: 'journalID', headerName: 'Journal ID', width: 150},
    {field: 'emailID', headerName: 'Email Id', width: 130},
    {field: 'beatName', headerName: 'Beat Name', width: 180},
    {field: 'chosenLicenseType', headerName: 'License', width: 180},
];

export default function DataTable() {
    const [orders, setOrders] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const orders = (await axios.get(`/orders`)).data;
                return orders.map((eachOrder) => {
                    const cleanOrder = {};
                    columns.forEach((eachHeader) => {
                        const headerField = eachHeader.field;
                        cleanOrder[headerField] = eachOrder[headerField];
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
    }, [])
    if (pending) return <Loader/>
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid rows={orders} columns={columns} pageSize={5} checkboxSelection/>
        </div>
    );
}
