import React from 'react';
import he from 'he';
import { useRouter } from 'next/router';
import { ArticleJsonLd, NextSeo } from 'next-seo';

type Props = {
  title: string;
  summary: string;
  date: string;
  author: string;
  lastmod?: string;
  images?: string[];
};

export const BlogSeo = (props: Props) => {
  const { title, summary, date, author, lastmod, images = [] } = props;
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`;
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  const imagesArr =
    images.length === 0 ? [] : typeof images === 'string' ? [images] : images;

  const featuredImages = imagesArr.map(img => {
    return {
      url: `${url}${img}`,
      alt: title
    };
  });

  return (
    <>
      <NextSeo
        title={`${he.decode(title)} | Blog App`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [`${url}/about`]
          },
          url,
          title,
          description: summary,
          images: featuredImages
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: 'featuredImages[0].url'
          }
        ]}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={[]}
        publisherName={author}
        title={title}
        url={url}
        publisherLogo=""
      />
    </>
  );
};
