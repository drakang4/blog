import React from 'react';
import { Box, Link, Text } from 'rebass';

const Footer = () => (
  <footer className="no-print">
    <Box px={3} py={4}>
      <Text textAlign="center">
        Built with ❤️ using{' '}
        <Link href="https://reactjs.org/" css={{ textDecoration: 'none' }}>
          React
        </Link>{' '}
        and{' '}
        <Link href="https://www.gatsbyjs.org/" css={{ textDecoration: 'none' }}>
          Gatsby
        </Link>{' '}
        by Heeryong Kang
      </Text>
    </Box>
  </footer>
);

export default Footer;
