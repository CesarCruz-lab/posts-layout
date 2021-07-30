import PinDropIcon from '@material-ui/icons/PinDrop';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import { AvatarStyled } from 'surfaces/AvatarStyled';

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
	
	const avatarCustomStyle = {
		width: '112px',
		height: '112px',
		fontWeight: 700,
		fontSize: '2.4rem'
	};
	
	return (
		<div className="usercard">
			<header className="usercard-thumb">
				<img
					className="usercard-thumb-img"
					src="/studing.png"
					alt='user thumbnail'
				/>
			</header>
			<main className="usercard-info">
				<AvatarStyled data={{ username, img }} css={avatarCustomStyle} />
				
				<span className="usercard-info-name">{username}</span>
				<span className="usercard-info-atsign">{atSign}</span>
				<span className="usercard-info-job">{job}</span>
			</main>
			<footer className="usercard-more">
				<span>
					<PinDropIcon style={{ color: "#65C5FF" }} />
					{location}
				</span>
				<div className="usercard-more-detail">
					<span><WorkIcon /> {workplace}</span>
					<span><SchoolIcon /> {university}</span>
				</div>
			</footer>
		</div>
	);
}
