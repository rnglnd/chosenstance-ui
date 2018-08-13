import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Bio from '../components/Bio'
import { blogPageClassName, linkMainClassName, header1ClassName } from '../utils/styles';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pathContext

    return (
      <div className={blogPageClassName}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1 className={header1ClassName}>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio />

        {/* <ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev" className={linkMainClassName}>
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next" className={linkMainClassName}>
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul> */}

        <Link to="/blog" className={linkMainClassName}>Back</Link>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`