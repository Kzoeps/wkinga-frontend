import React, { useState } from 'react';

const NavigationBar = () => {
	const [toggleFlag, setToggleFlag] = useState(false);
	const hamHandler = () => {
		if (!toggleFlag) {
			setToggleFlag(true);
		}
	}
	const closeHandler = () => {
		setToggleFlag(false);
	}
	return (
		<div>

		</div>
	)
}
