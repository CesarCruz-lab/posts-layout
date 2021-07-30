import { PostUser } from 'components/Post/User';
import { PostContent } from 'components/Post/Content';
import { PostAction } from 'components/Post/Action';
import { PostContextProvider } from 'contexts/PostContext';

import './style.css';

export function PostItem(props) {
	return (
		<PostContextProvider initValue={props.data}>
			<div className="post">
				<header>
					<PostUser />
				</header>
				<article>
					<PostContent />
				</article>
				<footer>
					<PostAction />
				</footer>
			</div>
		</PostContextProvider>
	);
}
