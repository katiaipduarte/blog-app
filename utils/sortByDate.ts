import { Post } from '@interfaces/post';

export const sortByDate = (obj: Post[]): Post[] => {
  const arr = obj.sort((a: Post, b: Post) => {
    const aDate = a.publish_date.split('/').reverse().join('');
    const bDate = b.publish_date.split('/').reverse().join('');

    return aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
  });

  return arr;
};
