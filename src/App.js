import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Beats from "./pages/beats/beats";
import CartReview from "./pages/cart-review/cart-review";
import AboutMe from "./pages/about-me/about-me";
import Contact from './pages/contact/contact'

function App() {
  return (
  	<BrowserRouter>
		<Switch>
			<Route exact path={'/'} component={Home}/>
			<Route exact path={'/beats'} component={Beats}/>
			<Route exact path={'/cart-review'} component={CartReview}/>
			<Route exact path={'/about-me'} component={AboutMe}/>
			<Route exact path={'/contact'} component={Contact}/>
		</Switch>
	</BrowserRouter>
  );
}

export default App;
