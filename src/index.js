import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./store";
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'
import {fetchBeats} from "./reducers/beats-reducer";
import Loader from "./components/loader/loader";

const state = store.getState();
if (!state.beats.beats.length) {
	store.dispatch(fetchBeats())
}
let persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Loader/>} persistor={persistor}>
				<App/>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
