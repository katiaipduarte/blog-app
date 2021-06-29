import { render, screen, fireEvent } from '@testing-library/react';
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

  it('should render comment error message, when missing on submit', () => {
    render(
      <CommentForm
        postId={10}
        parentCommentId={2}
        user={'test'}
        commentAdded={jest.fn().mockName('mockedFunction')}
      />
    );
    const username = screen.getByPlaceholderText('Username');
    const textarea = screen.getByPlaceholderText('Write your comment here...');

    expect(screen.getByTestId('comments-error-message').className).toBe(
      'message'
    );
    expect(textarea.className).toBe('');

    fireEvent.change(username, { target: { value: 'test' } });

    fireEvent.click(screen.getByTestId('submit'));

    expect(screen.getByTestId('comments-error-message').className).toBe(
      'show message'
    );
    expect(textarea.className).toBe('invalid');
  });
});
