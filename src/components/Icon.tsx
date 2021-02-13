import React from 'react';

interface Props {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: Props) => (
  <svg
    className={`inline-block align-middle ${className}`}
    width="1em"
    height="1em"
  >
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default Icon;
