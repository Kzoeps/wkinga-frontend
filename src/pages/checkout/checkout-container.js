import Checkout from "./checkout";
import {useSelector} from "react-redux";
import {useState} from "react";
import {getTotal, selectCart} from "../../reducers/cart-reducer";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function CheckoutContainer() {
	const beatsInCart = useSelector(selectCart);
	const cartTotal = getTotal(beatsInCart);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [journalNumber, setJournalNumber] = useState('');
	const [flag, setFlag] = useState(true);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	const [open, setOpen] = useState(false);
	const [check, setCheck] = useState(false);

	const firstNameHandle = e => {
		setFirstName(e.target.value)
	}
	const lastNameHandle = e => {
		setLastName(e.target.value)
	}
	const emailHandle = e => {
		setEmail(e.target.value)
	}
	const journalHandle = e => {
		setJournalNumber(e.target.value)
	}
	const handleFlag = () => {
		setFlag(!flag);
	}
	const handleOpen = () => {
		setOpen(!open);
	}
	const handleCheck = () => {
		setCheck(!check)
	}
	const handleSubmit = e => {
		e.preventDefault();
		window.open(
			`mailto:jigmetashi02@gmail.com?subject=MakingOrder&body=Name: ${firstName} ${lastName}`
		)
	}

	return (
		<Checkout
			cartTotal={cartTotal.totalPrice}
			firstName={firstName}
			firstNameHandle={firstNameHandle}
			lastName={lastName}
			lastNameHandle={lastNameHandle}
			email={email}
			emailHandle={emailHandle}
			journalNumber={journalNumber}
			journalHandle={journalHandle}
			flag={flag}
			handleFlag={handleFlag}
			fullScreen={fullScreen}
			handleOpen={handleOpen}
			open={open}
			check={check}
			handleCheck={handleCheck}
			handleSubmit={handleSubmit}
		/>
	)
}
