import { UserCard } from 'components/User/Card';

export function UserCardDisplay(argument) {
	const userData = {
		username: 'Username',
		atSign: '@username',
		job: 'Front-end developer',
		img: '',
		location: 'Rio Branco/Acre - Brasil',
		university: 'Uninorte',
		workplace: 'InCicle'
	};
	
	return (
		<UserCard info={userData} />
	);
}
