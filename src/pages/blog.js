import React from 'react';
import Link from 'gatsby-link';
import { blogPageClassName, linkMainClassName, header1ClassName } from '../utils/styles';

const Blog = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className={blogPageClassName}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div key={post.fields.slug}>
              <h1 className={header1ClassName}>
                <Link to={post.fields.slug} className={linkMainClassName}>
                  {post.frontmatter.title}
                </Link>
              </h1>
              <p>
                <b>{post.frontmatter.date}</b>
              </p>
              <p>
                {post.excerpt}
              </p>
              <Link to={post.fields.slug} className={linkMainClassName}>Read more</Link>
            </div>
          );
        })}
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
