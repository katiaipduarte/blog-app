import { PostComment } from '@interfaces/postComment';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './Comments';

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

describe('the <Comments /> component', () => {
  it('should render comments list', () => {
    const tree = renderer
      .create(<Comments postId={10} comments={mockedComments} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render 0 comments', () => {
    const tree = renderer
      .create(<Comments postId={10} comments={[] as PostComment[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
