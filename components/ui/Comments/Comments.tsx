import { PostComment } from '@interfaces/postComment';
import React, { memo, useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import { CommentsContainer } from './Comments.style';

type Props = {
  comments: PostComment[];
  postId: number;
};

const Comments = (props: Props): JSX.Element => {
  const { comments, postId } = props;
  const [parentId, setParentId] = useState<number | null>(null);
  const [parentUser, setParentUser] = useState<string>('');
  const [commentList, setCommentList] = useState<PostComment[]>(comments);

  const renderComments = (): JSX.Element => {
    return (
      <ul>
        {commentList.map((comment: PostComment) => (
          <li key={comment.id}>
            {!comment.parent_id && buildParentComments(comment)}
            {buildChildrenComments(comment.id, comment.user)}
          </li>
        ))}
      </ul>
    );
  };

  const buildParentComments = (comment: PostComment): JSX.Element => {
    return (
      <div className="parent">
        <div>
          <h3 tabIndex={0}>{`${comment.user} on ${comment.date}`}</h3>
          <p tabIndex={0}>{comment.content}</p>
        </div>
        <button
          role="button"
          className="full"
          onClick={() => handleReply(comment.id, comment.user)}
          onKeyPress={() => handleReply(comment.id, comment.user)}
        >
          Reply
        </button>
      </div>
    );
  };

  const buildChildrenComments = (id: number, user: string): JSX.Element => {
    return (
      <>
        {commentList
          .filter((i: PostComment) => i.parent_id === id)
          .map((comment: PostComment) => {
            return (
              <div className="child" key={comment.id}>
                <div>
                  <h3
                    tabIndex={0}
                    role="text"
                  >{`${comment.user} response to ${user} on ${comment.date}`}</h3>
                  <p tabIndex={0} role="text">
                    {comment.content}
                  </p>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  const handleReply = (parentCommentId: number, user: string): void => {
    setParentId(parentCommentId);
    setParentUser(user);

    const userInput = document.querySelector('#user');

    if (userInput) {
      (userInput as HTMLInputElement).focus();
    }
  };

  const commentAdded = async (): Promise<void> => {
    setParentId(null);
    setParentUser('');

    const commentsReq = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${postId}/comments`
    );
    const comments = await commentsReq.json();
    setCommentList(comments);
  };

  return (
    <CommentsContainer>
      <h2 tabIndex={0}>{`${commentList.length} Comments`}</h2>
      {renderComments()}
      <CommentForm
        postId={postId}
        parentCommentId={parentId}
        user={parentUser}
        commentAdded={commentAdded}
      />
    </CommentsContainer>
  );
};

export default memo(Comments);
