import React from 'react';
import { Box, Heading } from 'rebass';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const BlogPage = () => {
  return (
    <Layout>
      <Box mx="auto" my={4} px={3} css={{ maxWidth: '768px' }}>
        <Heading as="h1" fontSize={5} mb={4}>
          포스트
        </Heading>
        <PostList />
      </Box>
    </Layout>
  );
};

export default BlogPage;
