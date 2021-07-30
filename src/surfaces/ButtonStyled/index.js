import Button from '@material-ui/core/Button';

import './style.css';

export function ButtonStyled(props) {
	const { css } = props;
	
	const customStyle = {
		...css
	};
	
	return (
		<Button style={customStyle} {...props}>
			{props.children}
		</Button>
	);
}
