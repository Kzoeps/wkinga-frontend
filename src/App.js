import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Beats from "./pages/beats/beats";

function App() {
  return (
  	<BrowserRouter>
		<Switch>
			<Route exact path={'/'} component={Home}/>
			<Route exact path={'/beats'} component={Beats}/>
		</Switch>
	</BrowserRouter>
  );
}

export default App;
