import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Timeline = ({ children }: Props) => {
  return (
    <div className="timeline pl-6 relative">
      <div className="absolute w-0.5 h-full -ml-6 bg-gray-300 dark:bg-gray-700 rounded-full" />
      {children}
    </div>
  );
};

export default Timeline;
