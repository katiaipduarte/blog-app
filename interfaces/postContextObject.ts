import { Post } from './post';

export type PostContextObject = {
  posts: Post[];
  error: string | null;
  loading: boolean;
};
