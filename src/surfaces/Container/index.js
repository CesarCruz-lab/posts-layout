import Container from '@material-ui/core/Container';

import './style.css';

export function ContainerComponent(props) {
	const containerStyle = {
		minWidth: '800px',
		...props.css
	};
	
	return (
		<Container style={containerStyle}>
			{props.children}
		</Container>
	);
}
