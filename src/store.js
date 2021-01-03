import { configureStore } from '@reduxjs/toolkit';
import beatsReducer from "./reducers/beats-reducer";
import cartReducer from "./reducers/cart-reducer";

export default configureStore({
	reducer: {
		beats: beatsReducer,
		cart: cartReducer
	}
})
