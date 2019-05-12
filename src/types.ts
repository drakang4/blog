export interface SiteMetaData {
  title: string;
  description: string;
  author: {
    name: string;
    url: string;
  };
  siteUrl: string;
}

export interface MarkdownRemark {
  html: string;
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    thumbnail: any;
    tags: string[] | null;
  };
  timeToRead: number;
  wordCount: {
    paragraphs: number;
    sentences: number;
    words: number;
  };
}
