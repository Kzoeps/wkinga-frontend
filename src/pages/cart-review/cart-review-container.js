import React from "react";
import CartReview from "./cart-review";
import {useSelector} from "react-redux";
import {selectCart} from "../../reducers/cart-reducer";
import CartReviewItem from "../../components/cart-review-item/cart-review-item";

export default function CartReviewContainer() {
	const beatsInCart = useSelector(selectCart);
	const cartItems = beatsInCart.map(eachBeat =>
		<CartReviewItem key={eachBeat.beatId} beat={eachBeat}/>
	)

	return (
		<CartReview cartItems={cartItems}/>
	)
}
