import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import beatsReducer from "./reducers/beats-reducer";
import cartReducer from "./reducers/cart-reducer";
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from "redux-persist";

const reducers = combineReducers({
	beats: beatsReducer,
	cart: cartReducer
})
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, reducers)
export default configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	})
})
