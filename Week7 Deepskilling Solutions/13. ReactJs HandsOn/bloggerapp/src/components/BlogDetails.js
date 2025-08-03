import React from 'react';

const BlogDetails = () => {
  const blogs = [];

  return (
    <div>
      <h2>Blog Details</h2>
      {
        blogs.length > 0 ? (
          <ul>
            {blogs.map((blog, index) => (
              <li key={index}>{blog}</li>
            ))}
          </ul>
        ) : (
          <p>No blogs available</p>
        )
      }
    </div>
  );
};

export default BlogDetails;
