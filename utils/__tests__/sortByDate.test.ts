import { Post } from '@interfaces/post';
import { sortByDate } from '@utils/sortByDate';

describe('sortByDate test', () => {
  it('should sort array by date', () => {
    const mocked: Post[] = [
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 1,
        publish_date: '2021-01-01',
        slug: 'test',
        title: 'test'
      },
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 2,
        publish_date: '2021-02-01',
        slug: 'test',
        title: 'test'
      },
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 4,
        publish_date: '2020-02-01',
        slug: 'test',
        title: 'test'
      },
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 3,
        publish_date: '2021-06-01',
        slug: 'test',
        title: 'test'
      }
    ];

    const sorted: Post[] = [
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 3,
        publish_date: '2021-06-01',
        slug: 'test',
        title: 'test'
      },
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 2,
        publish_date: '2021-02-01',
        slug: 'test',
        title: 'test'
      },
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 1,
        publish_date: '2021-01-01',
        slug: 'test',
        title: 'test'
      },
      {
        author: 'author',
        content: 'bla',
        description: 'test',
        id: 4,
        publish_date: '2020-02-01',
        slug: 'test',
        title: 'test'
      }
    ];
    expect(sortByDate(mocked)).toStrictEqual(sorted);
  });
});
