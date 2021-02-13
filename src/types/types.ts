export interface SiteMetaData {
  defaultTitle: string;
  description: string;
  siteUrl: string;
  logo: string;
}

export interface Mdx {
  body: string;
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
