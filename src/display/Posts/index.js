import { ContainerComponent } from 'surfaces/Container';

import { PostItem } from 'components/Post/Item';

import './style.css';

export function PostsDisplay() {
	const postsData = [
		{
			username: 'Paulo Lucas',
			img: '/icon-avatar.jpg',
			created: 'há cerca de 8 horas',
			privatePost: true,
			liked: false,
			likes: 0,
			comments: 0,
			shares: 0,
			message: 'Hello'
		},
		{
			username: 'Paulo Lucas',
			img: '/icon-avatar.jpg',
			created: 'há 8 dias',
			privatePost: false,
			liked: false,
			likes: 1,
			comments: 0,
			shares: 3,
			message: 'Hello'
		}
	];
	
	return (
		<ContainerComponent css={{ marginTop: 0 }}>
			<ul className="posts">
				{postsData.map(post => {
					return (
						<li className="posts-item" ><PostItem data={post} /></li>
					);
				})}
			</ul>
		</ContainerComponent>
	);
}
