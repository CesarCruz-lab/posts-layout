import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';
import LockIcon from '@material-ui/icons/Lock';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { AvatarStyled } from 'surfaces/AvatarStyled';
import { Dropdown } from 'surfaces/Dropdown';
import { usePostContext } from 'hooks/usePostContext';

import './style.css';

export function PostUser() {
	const { post } = usePostContext();
	
	const {
		username,
		img,
		created,
		privatePost
	} = post;
	
	return (
		<div className="postuser">
			<AvatarStyled
				className="postuser-avatar"
				data={{ username, img }}
				css={{ width: '60px', height: '60px' }}
			/>
			<div className="postuser-box">
				<div className="postuser-detail">
					<span className="postuser-detail-username">{username}</span>
					<span className="postuser-detail-created">
						<AccessTimeIcon /> {created}
					</span>
					{privatePost ? (
							<span className="postuser-detail-type">
								<LockIcon /> Somente eu
							</span>
						) : (
							<span className="postuser-detail-type">
								<PublicIcon /> Público
							</span>
						)
					}
				</div>
				<div className="postuser-selector">
					<Dropdown view={() => <KeyboardArrowDownIcon/>}>
						<span>None</span>
					</Dropdown>
				</div>
			</div>
		</div>
	);
}
