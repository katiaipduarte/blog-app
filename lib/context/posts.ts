import { PostContextObject } from '@interfaces/postContextObject';
import { createContext } from 'react';

export const PostsContext = createContext<PostContextObject>({
  posts: [],
  loading: true
});
