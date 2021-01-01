import styles from './cart-review.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/header/header";
import CartReviewItem from "../../components/cart-review-item/cart-review-item";
import CartSummary from "../../components/cart-summary/cart-summary";

export default function CartReview() {
	return (
		<Container className={`${utilStyles.backgroundColor}`}>
			<Header title={'Cart Review'}/>
				<CartReviewItem/>
				<CartReviewItem/>
				<CartReviewItem/>
			<CartSummary/>
		</Container>
	)
}
