import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AboutMe from "./pages/about-me/about-me";
import BeatsContainer from "./pages/beats/beats-container";
import HomeContainer from "./pages/home/home-container";
import CartReviewContainer from "./pages/cart-review/cart-review-container";
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutContainer from "./pages/checkout/checkout-container";
import ContactContainer from "./pages/contact/contact-container";
import LoginContainer from "./pages/cms/login/login-container";
import DashboardContainer from "./pages/cms/dashboard/dashboard-container";
import {AuthProvider} from "./components/auth-context/auth-context";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={'/'} component={HomeContainer}/>
				<Route exact path={'/home'} component={HomeContainer}/>
				<Route exact path={'/beats'} component={BeatsContainer}/>
				<Route exact path={'/cart-review'} component={CartReviewContainer}/>
				<Route exact path={'/about-me'} component={AboutMe}/>
				<Route exact path={'/contact'} component={ContactContainer}/>
				<Route exact path={'/checkout'} component={CheckoutContainer}/>
				<AuthProvider>
					<Route exact path={'/auth/login'} component={LoginContainer}/>
					<Route exact path={'/dashboard'} component={DashboardContainer}/>
				</AuthProvider>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
