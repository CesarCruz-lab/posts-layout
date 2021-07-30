import { Box } from 'surfaces/Box';
import { PostsDisplay } from 'display/Posts';
import { UserCardDisplay } from 'display/UserCard';

function App() {
	
  return (
		<Box>
			<UserCardDisplay />
			<PostsDisplay />
		</Box>
  );
}

export default App;
