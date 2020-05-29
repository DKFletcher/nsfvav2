import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/head";

export const query = graphql`
  query($slug: String!) {
    contentfulPhotographyPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
    site {
      siteMetadata {
        title
        description
        profession
      }
    }
  }
`;

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log("blog props: ", node);
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      }
    }
  };
  return (
    <Layout title={props.data.site.siteMetadata.title}>
      <Head title={props.data.contentfulPhotographyPost.title} />
      <h1>{props.data.contentfulPhotographyPost.title}</h1>
      <p>{props.data.contentfulPhotographyPost.date}</p>
      {console.log(
        "options for contentful rtf component: ",
        props.data.contentfulPhotographyPost.body.json
      )}
      {documentToReactComponents(
        props.data.contentfulPhotographyPost.body.json,
        options
      )}
    </Layout>
  );
};

export default Blog;

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `
// const Blog = props => {
//   return (
//     <Layout>
//       <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//       <p>{props.data.markdownRemark.frontmatter.date}</p>
//       <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html }}></div>
//     </Layout>
//   )
// }
