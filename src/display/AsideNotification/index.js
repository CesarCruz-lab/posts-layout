import { Notify } from 'components/Notify';

import './style.css';

export function AsideNotificationDisplay() {
	const data = [
		{
			img: '/balao.png',
			title: 'Aniversariantes',
			subtitle: '',
			message: 'Nenhum dos seus amigos comemora aniversário hoje'
		},
		{
			img: '/clock.png',
			title: 'Pendências',
			subtitle: 'Seg, 21 de Jun',
			message: 'Você não tem nenhuma pendência para hoje'
		}
	];
	
	return (
		<aside className="asidenotify">
			<ul className="asidenotify-list">
				{data.map(item => (
					<li className="asidenotify-list-item">
						<Notify data={item} />
					</li>
				))}
			</ul>
		</aside>
	);
}
