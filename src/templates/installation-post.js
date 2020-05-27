import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import SEO from "../components/seo";

class InstallationPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header"></header>

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            <h1 className="post-content-title">
              <Link to={`/installation`}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </h1>
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
      default byline. */}
          </footer>
        </article>
      </Layout>
    );
  }
}

export default InstallationPostTemplate;

export const pageQuery = graphql`
  query InstallationPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
