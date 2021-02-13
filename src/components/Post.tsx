import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Duration from './Duration';
import { formatDate } from '../utils/i18n';

interface Props {
  title: string;
  body: string;
  date: string;
}

const Post = ({ title, body, date }: Props) => {
  return (
    <article className="max-w-3xl mx-auto my-8 print:my-0 px-4 lg:px-0 print:px-0">
      <header>
        <h1 className="text-3xl font-bold leading-tight">{title}</h1>
        <Duration>{formatDate(date)}</Duration>
      </header>
      <section className="mt-8">
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </article>
  );
};

export default Post;
