import { useState } from 'react';

import './style.css';

export function Dropdown(props) {
	const { view, children } = props;
	const [ drop, setDrop ] = useState(false);
	
	const toggleDrop = () => setDrop(!drop);
	
	return (
		<nav className="dropdown">
			<label className={`dropdown-view ${drop && 'dropped'}`} onClick={toggleDrop}>
				{view()}
			</label>
			<div className={`dropdown-content ${drop && 'drop'}`}>
				{children}
			</div>
		</nav>
	);
}
