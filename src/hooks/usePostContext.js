import { useContext } from 'react';
import { PostContext } from 'contexts/PostContext';

export function usePostContext() {
	const data = useContext(PostContext);
	return data;
}
