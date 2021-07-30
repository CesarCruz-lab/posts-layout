import { Box } from 'surfaces/Box';
import { PostsDisplay } from 'display/Posts';
import { UserCardDisplay } from 'display/UserCard';
import { AsideNotificationDisplay } from 'display/AsideNotification';

function App() {
	
  return (
		<Box>
			<UserCardDisplay />
			<PostsDisplay />
			<AsideNotificationDisplay />
		</Box>
  );
}

export default App;
