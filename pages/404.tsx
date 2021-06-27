import React from 'react';
import CustomErrorLayout from '@components/templates/CustomErrorLayout/CustomErrorLayout';
import PageSeo from '@lib/seo/PageSeo';

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <PageSeo title="Page not found" description="Blog App" />
      <CustomErrorLayout errorCode={404} message="Page requested not found." />
    </>
  );
};

export default NotFoundPage;
