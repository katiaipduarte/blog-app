import React from 'react';
import Link from 'next/link';

import { CustomErrorContainer } from './CustomErrorLayout.style';

type Props = {
  errorCode: number;
  message: string;
};

const CustomErrorLayout = (props: Props): JSX.Element => {
  const { errorCode, message } = props;

  return (
    <CustomErrorContainer>
      <div className="http-code">
        <h1 tabIndex={0} aria-label={`Error ${errorCode}`}>
          {errorCode}
        </h1>
      </div>
      <div className="message">
        <h4 tabIndex={0}>{message}</h4>
        <p role="text" tabIndex={0}>
          Don't worry just click on the following button and you can go back to
          our homepage!
        </p>
        <Link href="/">
          <button aria-label="Go back to homepage" type="button">
            Go back to homepage.{' '}
          </button>
        </Link>
      </div>
    </CustomErrorContainer>
  );
};

export default CustomErrorLayout;
