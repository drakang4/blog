import React from 'react';
import Helmet from 'react-helmet';
import { formatDate } from '../utils/i18n';
import { MarkdownRemark, SiteMetaData } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark;
    site: {
      siteMetadata: SiteMetaData;
    };
  };
};

const Post: React.FC<Props> = ({ data }) => {
  const { markdownRemark, site } = data;

  const { frontmatter, excerpt, fields, html, timeToRead } = markdownRemark;
  const { title, date, thumbnail, tags } = frontmatter;

  const { siteMetadata } = site;
  const { siteUrl } = siteMetadata;

  return (
    <article className="center mv4 mw7">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`${siteUrl}${fields.slug}`} />
        {/* Facebook Open Graph */}
        <meta property="fb:app_id" content="191342008318335" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}${fields.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="Heeryong Kang" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${siteUrl}${fields.slug}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta
          name="twitter:image"
          content={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
        />
      </Helmet>
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
