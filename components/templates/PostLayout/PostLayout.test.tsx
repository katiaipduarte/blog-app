import { Post } from '@interfaces/post';
import { PostComment } from '@interfaces/postComment';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import PostLayout from './PostLayout';

const mockedPost: Post = {
  author: 'author',
  content: 'bla',
  description: 'test',
  id: 1,
  publish_date: '2021-01-01',
  slug: 'test',
  title: 'test'
};

const mockedComments: PostComment[] = [
  {
    content: 'banana',
    user: 'test',
    date: '2021-06-28',
    parent_id: null,
    postId: 10,
    id: 8
  },
  {
    content: 'bananan 2x',
    user: 'yolo',
    date: '2021-06-28',
    parent_id: 8,
    postId: 10,
    id: 9
  }
];

describe('the <PostLayout /> component', () => {
  it('should render Post empty', () => {
    const tree = renderer
      .create(<PostLayout post={{} as Post} comments={[] as PostComment[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Post with 0 comments', () => {
    const tree = renderer
      .create(<PostLayout post={mockedPost} comments={[] as PostComment[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Post with comments', () => {
    const tree = renderer
      .create(<PostLayout post={mockedPost} comments={mockedComments} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
