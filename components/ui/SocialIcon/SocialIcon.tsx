import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon: IconProp;
  href?: string;
};

const SocialIcon = (props: Props): JSX.Element => {
  const { icon, href = '' } = props;

  if (!href) return <></>;

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} role="button">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialIcon;
