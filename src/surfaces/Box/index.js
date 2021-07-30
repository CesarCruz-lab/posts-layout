import './style.css';

export function Box(props) {
	const { style } = props;
	
	return (
		<div className="box" style={style}>
			{props.children}
		</div>
	);
}
