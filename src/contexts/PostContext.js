import { createContext, useState } from 'react';

export const PostContext = createContext({});

export function PostContextProvider(props) {
	let [ post, setPost ] = useState(props.initValue || {});
	
	const updatePost = data => {
		setPost(state => ({ ...state, ...data }));
	}
	
	const postContextData = {
		post,
		updatePost
	};
	
	return (
		<PostContext.Provider value={postContextData}>
			{props.children}
		</PostContext.Provider>
	);
}
