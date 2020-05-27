import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="dynamic-styles">Artists Statement</h3>
          <p>
            I am an environmentally-based artist interested in the body’s
            relationship to space and place. Viewing the city as a living
            organism, buildings and streets become external bodies through which
            we localise and experience the human consciousness. With particular
            focus on domestic dwellings, I explore the sense of belonging and
            being belonged to an external space. 
          </p>
          <p>
            My artwork is often site-specific; using domestic spaces and
            architectural structures as both a site and concept in which to
            define my work. Through image, installation and text, I explore the
            human-mind in direct relation to the spaces they inhabit – imagining
            each space as an extension of the self, our experiences, and the
            identity we have.
          </p>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.selfPortrait.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Self Portrait</figcaption>
          </figure>
        </div>
      </article>
      <footer className="post-content-footer">
        {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
      default byline. */}
      </footer>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    selfPortrait: file(relativePath: { eq: "2016-11-2916-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
