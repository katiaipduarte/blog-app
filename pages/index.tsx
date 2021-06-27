import React from 'react';

import PageSeo from '@lib/seo/PageSeo';
import ListLayout from '@components/templates/ListLayout/ListLayout';

const Home = (): JSX.Element => {
  return (
    <>
      <PageSeo title="Homepage" description="Welcome to Blog App!" />
      <ListLayout homepage={true} />
    </>
  );
};

export default Home;
