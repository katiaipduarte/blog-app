export type Comment = {
  content: string;
  date: string;
  id: number;
  parent_id: number | null;
  postId: number;
  user: string;
};
