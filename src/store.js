import { configureStore } from '@reduxjs/toolkit';
import beatsReducer from "./reducers/songsReducer";
import cartReducer from "./reducers/cartReducer";

export default configureStore({
	reducer: {
		beats: beatsReducer,
		cart: cartReducer
	}
})
