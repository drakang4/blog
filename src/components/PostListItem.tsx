import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { MarkdownRemark } from '../types';
import { formatDate } from '../utils/i18n';

type Props = {
  data: MarkdownRemark;
};

const PostListItem: React.FC<Props> = ({ data }) => {
  return (
    <div key={data.frontmatter.title} className="pv2 mb4">
      <Link to={data.fields.slug} className="db f3 fw7 mb3 link blue lh-title">
        {data.frontmatter.title}
      </Link>
      <div className="flex flex-row">
        <div className="flex-auto flex flex-column mr3 mr5-l">
          <div className="flex-auto flex flex-column">
            <div className="flex-auto mb3">
              <Link to={data.fields.slug} className="link lh-copy dark-gray">
                {data.excerpt}
              </Link>
            </div>
            <div className="lh-solid dark-gray f6">
              {formatDate(data.frontmatter.date)}
            </div>
          </div>
          {/* <div className="tags">
        {node.frontmatter.tags.map(tag => (
          // <Link key={tag} to={`/tags/${tag}`}>
          <Badge key={tag} color="light" className="mr-1">
            {tag}
          </Badge>
          // </Link>
        ))}
      </div> */}
        </div>
        <div>
          <Link to={data.fields.slug}>
            <GatsbyImage
              fixed={data.frontmatter.thumbnail.childImageSharp.fixed}
              alt={data.frontmatter.title}
              // className="mw3 mw-none-ns"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
