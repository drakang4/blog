import React from 'react';
import Helmet from 'react-helmet';
import { Box, Text, Heading } from 'rebass';
import { formatDate } from '../utils/i18n';

type Props = {
  data: any;
};

const Post: React.FC<Props> = ({ data }) => {
  const { markdownRemark, site } = data;

  const { frontmatter, excerpt, fields, html, timeToRead } = markdownRemark;
  const { title, date, thumbnail, tags } = frontmatter;

  const { siteMetadata } = site;
  const { siteUrl } = siteMetadata;

  return (
    <Box as="article" mx="auto" my={4} css={{ maxWidth: '768px' }}>
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
      <Box px={3}>
        <Box as="section" mb={[3, 5]}>
          <Heading as="h1" mb={2} fontSize={5}>
            {title}
          </Heading>
          <Box>
            <Text as="span" fontWeight={300}>
              {formatDate(date)}
            </Text>
            <Text as="span" fontWeight={300}>
              {' · '}
            </Text>
            <Text as="span" fontWeight={300}>
              {timeToRead} 분 분량
            </Text>
          </Box>
        </Box>
        <Box as="section">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
