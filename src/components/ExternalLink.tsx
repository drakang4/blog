import React from 'react';

interface Props {
  href?: string;
}

const ExternalLink = ({ href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base"
    >
      <span aria-label="링크" className="print:hidden">
        🔗
      </span>
      <span className="hidden print:inline">({href})</span>
    </a>
  );
};

export default ExternalLink;
