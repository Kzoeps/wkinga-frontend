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
	const [emailError, setEmailError] = useState('');
	const [dirtyForms, setDirtyForm] = useState({ firstName: false, lastName: false, email: false, journalNumber: false, check: false});

	const firstNameHandle = e => {
		setFirstName(e.target.value);
		setDirtyForm({
			...dirtyForms,
			firstName: true
		})
	}
	const lastNameHandle = e => {
		setLastName(e.target.value);
		dirtyForms.lastName = true
	}
	const emailHandle = e => {
		setEmail(e.target.value);
		if (email) {
			if (validateEmail(email)) {
				setEmailError('');
			} else {
				setEmailError('Email Invalid');
			}
		}
		dirtyForms.email = true
	}
	const journalHandle = e => {
		setJournalNumber(e.target.value)
		setDirtyForm({
			...dirtyForms,
			journalNumber: true,
		})
	}
	const handleFlag = () => {
		setFlag(!flag);
	}
	const handleOpen = () => {
		if (firstName && lastName && email && validateEmail(email)) {
			setOpen(!open);
		}
		setDirtyForm({
			...journalNumber,
			firstName: true,
			lastName: true,
			email: true
		})
	}
	const handleCheck = () => {
		setCheck(!check);
		setDirtyForm({
			...dirtyForms,
			check: true
		})
	}
	const handleSubmit = e => {
		e.preventDefault();
		if (journalNumber && check) {
			window.open(
				`mailto:jigmetashi02@gmail.com?subject=MakingOrder&body=Name: ${firstName} ${lastName}`
			)
		}
		setDirtyForm({
			...dirtyForms,
			journalNumber: true,
			check: true
		})
	}
	const validateEmail = (email) => {
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email) {
			return (emailRegex.test(email));
		}
		return false;
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
			emailError={emailError}
			dirtyForms={dirtyForms}
		/>
	)
}
