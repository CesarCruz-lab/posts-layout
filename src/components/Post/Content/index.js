import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import { usePostContext } from 'hooks/usePostContext';

import './style.css';

export function PostContent(props) {
	const { post } = usePostContext();
	
	const {
		privatePost,
		message,
		likes,
		comments,
		shares
	} = post;
	
	const likesMessage = {
		0: 'Seja o primeiro a curtir',
		1: `${likes} pessoa curtiu isso`,
		'more': `${likes} pessoas curtiram isso`
	};
	
	return (
		<div>
			<p className="postcontent-message">
				{privatePost ?
					'Esta publicação Está configurada no modo privado "somente eu".'
					: message
				}
			</p>
			<div className="postcontent-detail">
				<span className="postcontent-detail-like">
					<ThumbUpAltIcon />
					{likesMessage[likes > 1 ? 'more' : likes]}
				</span>
				<div>
					<span>{comments} comentários</span>
					<span>{shares} compartilhamentos</span>
				</div>
			</div>
		</div>
	);
}
