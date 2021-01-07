import utilStyles from '../../assets/global-styles/utils.module.css';
import {Container} from "react-bootstrap";
import Header from "../../components/header/header";
import CartSummary from "../../components/cart-summary/cart-summary";
import Footer from "../../components/footer/footer";

export default function CartReview(props) {
	return (
		<Container className={`${utilStyles.backgroundColor}`}>
			<Header title={'Cart Review'}/>
			{props.cartItems}
			<CartSummary/>
			<Footer/>
		</Container>
	)
}
