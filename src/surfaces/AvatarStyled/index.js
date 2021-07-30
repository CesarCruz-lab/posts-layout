import Avatar from '@material-ui/core/Avatar';

import './style.css';

export function AvatarStyled(props) {
	const { username, img } = props.data;
	const { css } = props;
	
	const customStyle = {
		background: '#E0E0E0',
		color: '#2C4C68',
		fontWeight: 600,
		fontSize: '1.5rem',
		...css
	};
	
	return (
		<Avatar className="avatar" src={img} style={customStyle}>
			{username[0]}
		</Avatar>
	);
}
