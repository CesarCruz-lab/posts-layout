import Button from '@material-ui/core/Button';

import './style.css';

export function ButtonStyled(props) {
	const { css, ...rest } = props;
	
	const customStyle = {
		...css
	};
	
	return (
		<Button style={customStyle} {...rest} />
	);
}
