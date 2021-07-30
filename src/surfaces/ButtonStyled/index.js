import Button from '@material-ui/core/Button';

import './style.css';

export function ButtonStyled(props) {
	const { css, children, ...rest } = props;
	
	const customStyle = {
		...css
	};
	
	return (
		<Button style={customStyle} {...rest}>
			{children}
		</Button>
	);
}
