import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SmsIcon from '@material-ui/icons/Sms';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

import { ButtonStyled } from 'surfaces/ButtonStyled';
import { usePostContext } from 'hooks/usePostContext';

import './style.css';

export function PostAction(props) {
	const { post } = usePostContext();
	const { updatePost } = usePostContext();
	
	const handleLike = () => {
		const { liked, likes } = post;
		
		if (liked) {
			updatePost({ liked: false, likes: likes - 1 });
			return
		}
		
		updatePost({ liked: true,	likes: likes + 1 });
	}
	
	const handleComment = () => {
		alert('<Code />');
	}
	
	const handleShare = () => {
		alert('<Code />');
	}
	
	return (
		<div className="postaction">
			<ButtonStyled onClick={handleLike}>
				<ThumbUpAltIcon className={`postaction-icon ${post.liked && 'liked'}`} />
				{post.liked ? 'Curtiu' : 'Curtir'}
			</ButtonStyled>
			<ButtonStyled onClick={handleComment}>
				<SmsIcon className="postaction-icon" /> Comentar
			</ButtonStyled>
			<ButtonStyled onClick={handleShare}>
				<ScreenShareIcon className="postaction-icon" /> Compartilhar
			</ButtonStyled>
		</div>
	);
}
