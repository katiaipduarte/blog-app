import React, { memo, useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { ListContainer } from './ListLayout.style';
import { BlogConfiguration } from '@constants/blogConfiguration';
import { Post } from '@interfaces/post';
import SearchBar from '@components/ui/SearchBar/SearchBar';
import { PostsContext } from '@lib/context/posts';

type Props = {
  homepage: boolean;
};

const ListLayout = (props: Props): JSX.Element => {
  const { homepage } = props;
  const [postList, setPostList] = useState<Post[]>([]);
  const [term, setTerm] = useState<string>('');
  const { loading, posts } = useContext(PostsContext);

  useEffect(() => {
    if (!loading) {
      setPostList(posts);
    }
  }, [loading, posts]);

  const renderContent = (): JSX.Element => {
    if (postList.length === 0) {
      return (
        <li>
          <h2>No posts found.</h2>
        </li>
      );
    } else {
      return buildPostList();
    }
  };

  const buildPostList = (): JSX.Element => {
    const config: number = homepage
      ? +BlogConfiguration.MAX_HOMEPAGE
      : +BlogConfiguration.MAX_PER_PAGE;

    return (
      <>
        {postList
          .filter((post: Post) => {
            return post.title.toLowerCase().includes(term.toLowerCase());
          })
          .slice(0, config)
          .map((post: Post) => {
            const date = new Date(post.publish_date).toLocaleDateString('en', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <li key={post.slug} className={homepage ? '' : 'blog-page'}>
                <article>
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
                  <div className="post">
                    <div className="description">
                      <h2 role="button">
                        <Link
                          href={`/blog/${post.id}/${post.slug}`}
                          aria-label={`Read "${post.title}"`}
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p role="text" tabIndex={0}>
                        {post.description}
                      </p>
                    </div>
                    {homepage && (
                      <Link
                        href={`/blog/${post.id}/${post.slug}`}
                        aria-label={`Read more about "${post.title}"`}
                      >
                        <button className="transparent" role="button">
                          Read more &rarr;
                        </button>
                      </Link>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
      </>
    );
  };

  const renderAllPostBtn = (): JSX.Element => {
    return (
      <button className="all-post-btn transparent" role="button">
        <Link href="/blog">All Posts &rarr;</Link>
      </button>
    );
  };

  return (
    <ListContainer>
      <div className="title">
        <h1 tabIndex={0}>{homepage ? 'Latest' : 'All Posts'}</h1>
        {homepage && (
          <p role="text" tabIndex={0}>
            Welcome to our Blog App!
          </p>
        )}
        {!homepage && <SearchBar find={(term: string) => setTerm(term)} />}
      </div>
      <ul>{renderContent()}</ul>
      {homepage && renderAllPostBtn()}
    </ListContainer>
  );
};

export default memo(ListLayout);
