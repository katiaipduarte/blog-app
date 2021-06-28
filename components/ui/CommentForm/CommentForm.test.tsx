import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import CommentForm from './CommentForm';

describe('the <CommentForm /> component', () => {
  it('should render comment form to add a comment to post', () => {
    const tree = renderer
      .create(
        <CommentForm
          postId={10}
          parentCommentId={null}
          user={''}
          commentAdded={jest.fn().mockName('mockedFunction')}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render comment form to reply to a comment', () => {
    const tree = renderer
      .create(
        <CommentForm
          postId={10}
          parentCommentId={2}
          user={'test'}
          commentAdded={jest.fn().mockName('mockedFunction')}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
