import { Box } from 'components/Box';
import { UserCard } from 'components/UserCard';

function App() {
	const boxStyle = {
		padding: '16px',
		gap: '32px'
	};
	
	const userInfo = {
		username: 'Username',
		atSign: '@username',
		job: 'Front-end developer',
		img: '',
		location: 'Rio Branco/Acre - Brasil',
		university: 'Uninorte',
		workplace: 'InCicle'
	};
	
  return (
		<Box style={boxStyle}>
			<UserCard info={userInfo} />
		</Box>
  );
}

export default App;
