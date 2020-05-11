export interface SiteMetaData {
  title: string;
  description: string;
  siteUrl: string;
  logo: string;
  image: string;
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

export interface Resume {
  lang: string;
  name: string;
  summary: string;
  contacts: {
    network: string;
    icon: string;
    url: string;
  }[];
  skills: {
    name: string;
    keywords: string[];
  }[];
  works: {
    company: string;
    role: string;
    website: string;
    startDate: string;
    endDate: string;
    descriptions: ResumeDescription[];
  }[];
  projects: {
    name: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    descriptions: ResumeDescription[];
  }[];
  educations: {
    school: string;
    faculty: string;
    studyType: string;
    startDate: string;
    endDate: string;
  }[];
  etcs: {
    text: string;
    startDate: string;
    endDate: string;
  }[];
}

export interface ResumeDescription {
  heading?: string;
  highlights: string[];
}
