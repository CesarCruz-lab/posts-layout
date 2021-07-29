import Avatar from '@material-ui/core/Avatar';
import PinDropIcon from '@material-ui/icons/PinDrop';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import './style.css';

export function UserCard(props) {
	const {
		username,
		atSign,
		job,
		img,
		location,
		university,
		workplace
	} = props.info;
	
	const AvatarStyle = {
		width: '112px',
		height: '112px',
		background: '#E0E0E0',
		color: '#2C4C68',
		fontWeight: 700,
		fontSize: '2.4rem'
	};
	
	return (
		<div className="userCard">
			<header className="userCard-thumb">
				<img
					className="userCard-thumb-img"
					src="/studing.png"
					alt='user thumbnail'
				/>
			</header>
			<main className="userCard-info">
				<Avatar className="userCard-info-avatar" src={img} style={AvatarStyle}>
					{username[0]}
				</Avatar>
				
				<span className="userCard-info-name">{username}</span>
				<span className="userCard-info-nickname">{atSign}</span>
				<span className="userCard-info-job">{job}</span>
			</main>
			<footer className="userCard-more">
				<span>
					<PinDropIcon style={{ color: "#65C5FF" }} />
					{location}
				</span>
				<div className="userCard-more-detail">
					<span><WorkIcon /> {workplace}</span>
					<span><SchoolIcon /> {university}</span>
				</div>
			</footer>
		</div>
	);
}
