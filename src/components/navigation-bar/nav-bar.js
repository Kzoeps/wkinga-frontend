import {useState} from 'react';
import Logo from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from "react-icons/all";
import HamBurger from "./tools/ham";

const NavBar = ({hamHandler}) => {
	const [count, setCount] = useState(0);
	return (
		<header>
			<div>
				<HamBurger click={hamHandler}/>
			</div>
			<div>
				<img src={Logo} alt={'hello'}/>
			</div>
			<nav>
				<ul>
					<Link to='/'>Home</Link>
					<Link to="/aboutMe">About Me</Link>
					<Link to="/beats">Beats</Link>
					<Link to="/contactUs">Contact</Link>
					<Link to="/">Cart Review</Link>
				</ul>
			</nav>
			<div>
				<Link to={'/checkout'}><FaShoppingCart/></Link>
				<p>{count}</p>
			</div>
		</header>
	)
}

export default NavBar;
