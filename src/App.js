import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
  	<BrowserRouter>
		<Switch>
			<Route exact path={'/'} component={Home}/>
		</Switch>
	</BrowserRouter>
  );
}

export default App;
