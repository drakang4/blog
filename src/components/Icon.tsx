import React from 'react';

type Props = {
  name: string;
  className?: string;
};

const Icon: React.FC<Props> = ({ name, className }) => (
  <svg
    className={`inline-block align-middle ${className}`}
    width="1em"
    height="1em"
  >
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default Icon;
