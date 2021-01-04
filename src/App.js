import './App.css';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import CartReview from "./pages/cart-review/cart-review";
import AboutMe from "./pages/about-me/about-me";
import Contact from './pages/contact/contact'
import Checkout from "./pages/checkout/checkout";
import BeatsContainer from "./pages/beats/beats-container";
import HomeContainer from "./pages/home/home-container";
import 'react-bootstrap/dist/react-bootstrap';

function App() {
  return (
  	<BrowserRouter>
		<Switch>
			<Route exact path={'/'} component={HomeContainer}/>
			<Route exact path={'/home'} component={HomeContainer}/>
			<Route exact path={'/beats'} component={BeatsContainer}/>
			<Route exact path={'/cart-review'} component={CartReview}/>
			<Route exact path={'/about-me'} component={AboutMe}/>
			<Route exact path={'/contact'} component={Contact}/>
			<Route exact path={'/checkout'} component={Checkout}/>
		</Switch>
	</BrowserRouter>
  );
}

export default App;
