import { Post } from '@interfaces/post';
import React from 'react';
import { PostContainer } from './PostLayout.style';
import Link from 'next/link';

type Props = {
  post: Post;
  comments: Comment[];
};

const PostLayout = (props: Props): JSX.Element => {
  const { post, comments } = props;

  const date = new Date(post.publish_date).toLocaleDateString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <PostContainer>
      <header>
        <dl>
          <dd>
            <time
              aria-label={`Published on ${date}`}
              dateTime={post.publish_date}
              tabIndex={0}
            >
              {date}
            </time>
          </dd>
        </dl>
        <h1>{post.title}</h1>
      </header>
      <div className="post" style={{ gridTemplateRows: 'auto 1fr' }}>
        <dl
          className="author"
          aria-label={`Post written by ${post.author}`}
          tabIndex={0}
        >
          <dd>{post.author}</dd>
        </dl>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
          tabIndex={0}
          role="text"
        ></div>
        <footer>
          <Link href={`/blog`} aria-label={`Go back to the blog`}>
            <button className="transparent" role="button">
              &larr; Back to the blog
            </button>
          </Link>
        </footer>
      </div>
    </PostContainer>
  );
};

export default PostLayout;
