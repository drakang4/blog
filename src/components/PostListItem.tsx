import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { Mdx } from '../types/types';
import { formatDate } from '../utils/i18n';

interface Props {
  data: Mdx;
}

const PostListItem = ({ data }: Props) => {
  return (
    <div key={data.frontmatter.title} className="my-8">
      <p className="text-lg font-bold my-4 text-blue-500">
        <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
      </p>
      <div className="flex flex-row">
        <div className="flex-auto flex flex-col mr-5 lg:mr-10">
          <div className="flex-auto flex flex-col">
            <p className="flex-auto mb-4">
              <Link to={data.fields.slug} className="">
                {data.excerpt}
              </Link>
            </p>
            <p className="text-sm">{formatDate(data.frontmatter.date)}</p>
          </div>
        </div>
        <div>
          <Link to={data.fields.slug}>
            {/* <GatsbyImage
              fixed={data.frontmatter.thumbnail.childImageSharp.fixed}
              alt={data.frontmatter.title}
            /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
