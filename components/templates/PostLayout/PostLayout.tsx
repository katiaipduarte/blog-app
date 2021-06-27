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
          {/* {(next || prev) && (
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                {prev && (
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Previous Article
                    </h2>
                    <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                    </div>
                  </div>
                )}
                {next && (
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Next Article
                    </h2>
                    <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                    </div>
                  </div>
                )}
              </div>
            )} */}

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
