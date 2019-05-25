import React from 'react';
import Post from '../components/Post';

const PostPreview = ({ entry, widgetFor }) => {
  return (
    <div className="pa3">
      <Post
        data={{
          html: '',
          frontmatter: {
            title: entry.getIn(['data', 'title']),
            date: entry.getIn(['data', 'date']),
          },
          timeToRead: 0,
          wordCount: 0,
        }}
      />
      {widgetFor('body')}
    </div>
  );
};

export default PostPreview;
