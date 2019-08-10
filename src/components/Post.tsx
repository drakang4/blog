import React from 'react';
import { formatDate } from '../utils/i18n';
import { MarkdownRemark } from '../types';

type Props = {
  data: MarkdownRemark;
};

const Post: React.FC<Props> = ({ data }) => {
  const { frontmatter, html, timeToRead } = data;
  const { title, date } = frontmatter;

  return (
    <article>
      <header>
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <div className="text-sm mt-4 text-gray-600">
          <span>{formatDate(date)}</span> · <span>{timeToRead}분 분량</span>
        </div>
      </header>
      <section className="mt-8 text-gray-800">
        <div className="remark" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </article>
  );
};

export default Post;
