import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";

import blogStyles from "../tmp/blog.module.scss";

import Head from "../tmp/head";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          profession
        }
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            # publishedDate(fromNow:true)
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout title={siteTitle}>
      {/* <Head title='Blog'/> */}
      <h2>My Blog</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};
export default BlogPage;

// import React from "react";
// import { graphql, StaticQuery } from "gatsby";

// import Layout from "../components/layout";
// import SEO from "../components/seo";
// // import Bio from "../components/bio"
// import PostCard from "../components/postCard";

// import "../style/normalize.css";
// import "../style/all.scss";
// //TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
// const BlogIndex = ({ data }, location) => {
//   const siteTitle = data.site.siteMetadata.title;
//   const posts = data.allMarkdownRemark.edges;
//   let postCounter = 0;

//   return (
//     <Layout title={siteTitle}>
//       <SEO
//         title="Photography"
//         keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
//       />
//       {/* <Bio /> */}
//       {data.site.siteMetadata.description && (
//         <header className="page-head">
//           <h2 className="page-head-title">Photography</h2>
//         </header>
//       )}
//       <div className="post-feed">
//         {posts.map(({ node }) => {
//           postCounter++;
//           return (
//             <PostCard
//               key={node.fields.slug}
//               count={postCounter}
//               node={node}
//               postClass={`post`}
//             />
//           );
//         })}
//       </div>
//     </Layout>
//   );
// };

// const indexQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         profession
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { fileAbsolutePath: { regex: "/blog/" } }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM D, YYYY")
//             title
//             description
//             tags
//             thumbnail {
//               childImageSharp {
//                 fluid(maxWidth: 1360) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default props => (
//   <StaticQuery
//     query={indexQuery}
//     render={data => (
//       <BlogIndex location={props.location} props data={data} {...props} />
//     )}
//   />
// );
