import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Duration = ({ children }: Props) => {
  return (
    <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
      {children}
    </span>
  );
};

export default Duration;
