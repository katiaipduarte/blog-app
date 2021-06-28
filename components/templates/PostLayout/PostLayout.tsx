import { Post } from '@interfaces/post';
import React, { memo, useContext, useEffect, useState } from 'react';
import { PostContainer } from './PostLayout.style';
import Link from 'next/link';
import { PostsContext } from '@lib/context/posts';
import Comments from '@components/ui/Comments/Comments';
import { PostComment } from '@interfaces/postComment';

type Props = {
  post: Post;
  comments: PostComment[];
};

const PostLayout = (props: Props): JSX.Element => {
  const { post, comments } = props;
  const { loading, posts } = useContext(PostsContext);
  const [next, setNext] = useState<Post>();
  const [prev, setPrev] = useState<Post>();

  useEffect(() => {
    if (!loading) {
      if (post.id !== 1) {
        setNext(posts.find(i => i.id === post.id - 1));
      }
      if (post.id !== posts.length) {
        setPrev(posts.find(i => i.id === post.id + 1));
      }
    }
  }, [loading, post.id, posts]);

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
          <dt></dt>
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
      <div className="post">
        <dl
          className="author"
          aria-label={`Post written by ${post.author}`}
          tabIndex={0}
        >
          <dt></dt>
          <dd>{post.author}</dd>
        </dl>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
          tabIndex={0}
        ></div>
        <Comments comments={comments} postId={post.id} />
        <footer>
          {(next || prev) && (
            <div className="other-articles">
              {prev && (
                <div className="previous-article">
                  <h2>Previous Article</h2>
                  <Link
                    href={`/blog/${prev.id}/${prev.slug}`}
                    aria-label={`Read ${prev.title} article`}
                  >
                    <button className="transparent" role="button">
                      {prev.title}
                    </button>
                  </Link>
                </div>
              )}
              {next && (
                <div className="next-article">
                  <h2>Next Article</h2>
                  <Link
                    href={`/blog/${next.id}/${next.slug}`}
                    aria-label={`Read ${next.title} article`}
                  >
                    <button className="transparent" role="button">
                      {next.title}
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}

          <Link href={`/blog`} aria-label={`Go back to the blog`}>
            <button className="transparent go-back" role="button">
              &larr; Back to the blog
            </button>
          </Link>
        </footer>
      </div>
    </PostContainer>
  );
};

export default memo(PostLayout);
