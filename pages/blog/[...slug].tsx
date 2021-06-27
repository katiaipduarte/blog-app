import React from 'react';
import { GetServerSideProps } from 'next';

import CustomErrorLayout from '@components/templates/CustomErrorLayout/CustomErrorLayout';
import { Post } from '@interfaces/post';
import { urlRedirectHandler } from '@utils/urlRedirectHandler';
import { BlogSeo } from '@lib/seo/BlogSeo';
import PostLayout from '@components/templates/PostLayout/PostLayout';

type Props = {
  notFound: boolean;
  post: Post;
  comments: Comment[];
};

const PostPage = (props: Props): JSX.Element => {
  const { notFound, post, comments } = props;

  return (
    <>
      {notFound ? (
        <CustomErrorLayout errorCode={404} message="Post not found" />
      ) : (
        <>
          <BlogSeo
            title={post?.title}
            summary={post?.description}
            date={post?.publish_date}
            author={post?.author}
          />
          <PostLayout post={post} comments={comments} />
        </>
      )}
    </>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const slugParameter = ctx.params?.slug ?? '';

  const postReq = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/1`
  );

  if (postReq.status >= 400) {
    const urlResponse = urlRedirectHandler(ctx.req.url as string);
    ctx.res.statusCode = 404;
    ctx.res.setHeader('location', urlResponse);

    return {
      props: {
        notFound: true
      }
    };
  } else {
    const post = await postReq.json();

    const commentsReq = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/1/comments`
    );
    const comments = await commentsReq.json();

    return {
      props: {
        post,
        comments,
        notFound: false
      }
    };
  }
};
