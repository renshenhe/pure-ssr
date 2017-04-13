// @flow

import React from 'react';

type Props = {
  posts: Array<any>,
};

const Posts = ({ posts }: Props) => (
  <ul>
    { posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
);

export default Posts;