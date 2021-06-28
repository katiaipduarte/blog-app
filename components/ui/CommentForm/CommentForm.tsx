import React, { ChangeEvent, FormEvent, memo, useState } from 'react';
import { CommentFormContainer } from './CommentForm.style';

type Props = {
  postId: number;
  parentCommentId: number | null;
  user: string;
  commentAdded: () => Promise<void>;
};

const CommentForm = (props: Props): JSX.Element => {
  const { postId, parentCommentId, user, commentAdded } = props;
  const [formData, setFormData] = useState({
    content: '',
    user: ''
  });
  const [invalidUser, setInvalidUser] = useState<boolean>(false);
  const [invalidComment, setInvalidComment] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ): void => {
    const target = event.target;
    const id = target.id;
    const value = target.value;

    if (id === 'content') {
      setInvalidComment(false);
    } else {
      setInvalidUser(false);
    }

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.content === '' || formData.user === '') {
      setInvalidComment(formData.content === '');
      setInvalidUser(formData.content === '');
      return;
    }

    await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${postId}/comments`,
      {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString().split('T')[0],
          parent_id: parentCommentId,
          postId: postId
        })
      }
    )
      .then(() => {
        setFormData({
          content: '',
          user: ''
        });

        commentAdded();
      })
      .catch(() => {
        console.error('something went wrong while adding a comment');
      });
  };

  return (
    <CommentFormContainer onSubmit={handleSubmit}>
      <h2>Submit a comment</h2>
      {user && <p>{`Reply to ${user}`}</p>}
      <div>
        <input
          id="user"
          type="text"
          placeholder="Username"
          value={formData.user}
          onChange={handleChange}
          className={invalidUser ? 'invalid' : ''}
        />
        <span className={invalidUser ? 'show message' : 'message'}>
          Username cannot be empty
        </span>
      </div>
      <div>
        <textarea
          name="comment"
          id="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your comment here..."
          className={invalidComment ? 'invalid' : ''}
        />
        <span className={invalidComment ? 'show message' : 'message'}>
          Comment cannot be empty
        </span>
      </div>
      <button type="submit" className="full">
        Submit
      </button>
    </CommentFormContainer>
  );
};

export default memo(CommentForm);
