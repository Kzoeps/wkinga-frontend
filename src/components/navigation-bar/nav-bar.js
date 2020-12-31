import {useState} from 'react';
const Navbar = ({hamHandler}) => {
	const [count, setCount] = useState(0);
	return (
		<header>
			<div>
				<Ham click={hamHandler}/>
			</div>
			<div>
				<img />
			</div>
		</header>
	)
}
