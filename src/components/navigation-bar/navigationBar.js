import React, { useState } from 'react'
import NavBar from './nav-bar';
import SideBar from './tools/side-bar';

const NavigationBar = () => {
	const [toggleFlag, setToggleFlag] = useState(false);
	const hamHandler = () => {
		if (!toggleFlag) {
			setToggleFlag(true)
		}

	}
	const closeHandler = () => {
		setToggleFlag(false);
	}
	return (
		<div>
			<NavBar hamHandler={hamHandler}/>
			<SideBar close={closeHandler} show={toggleFlag}/>
		</div>
	)
}

export default NavigationBar
