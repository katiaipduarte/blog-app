import { Post } from './post';

export type PostContextObject = {
  posts: Post[];
  loading: boolean;
};
