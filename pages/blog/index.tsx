import React from 'react';

import PageSeo from '@lib/seo/PageSeo';
import ListLayout from '@components/templates/ListLayout/ListLayout';

const Blog = (): JSX.Element => {
  return (
    <>
      <PageSeo
        title="Blog"
        description="See all the Posts available in our Blog!"
      />
      <ListLayout homepage={false} />
    </>
  );
};

export default Blog;
