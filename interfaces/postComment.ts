export type PostComment = {
  content: string;
  date: string;
  id: number;
  parent_id: number | null;
  postId: number;
  user: string;
};
