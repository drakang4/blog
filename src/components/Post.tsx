import React from 'react';
import Helmet from 'react-helmet';
import { formatDate } from '../utils/i18n';
import { MarkdownRemark, SiteMetaData } from '../types';

type Props = {
  data: MarkdownRemark;
};

const Post: React.FC<Props> = ({ data }) => {
  const { frontmatter, html, timeToRead } = data;
  const { title, date } = frontmatter;

  return (
    <article className="center mv4 mw7">
      <header className="ph3 mb4">
        <h1 className="mv2 f2 fw7 lh-title dark-gray">{title}</h1>
        <div className="f6 gray">
          <span>{formatDate(date)}</span> · <span>{timeToRead}분 분량</span>
        </div>
      </header>
      <section className="ph3 dark-gray">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </article>
  );
};

export default Post;
