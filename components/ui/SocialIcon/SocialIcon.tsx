import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  name: string;
  icon: IconProp;
  href?: string;
};

const SocialIcon = (props: Props): JSX.Element => {
  const { name, icon, href = '' } = props;

  if (!href) return <></>;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      role="button"
      aria-label={`Link to ${name}`}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialIcon;
