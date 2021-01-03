import { configureStore } from '@reduxjs/toolkit';
import songsReducer from "./reducers/songsReducer";
import cartReducer from "./reducers/cartReducer";

export default configureStore({
	reducer: {
		songs: songsReducer,
		cart: cartReducer
	}
})
