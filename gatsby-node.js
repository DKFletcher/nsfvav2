const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const installationPost = path.resolve(`./src/templates/installation-post.js`);
  const tagPage = path.resolve(`./src/templates/tag-page.js`);
  const photographyTemplate = path.resolve(
    `./src/templates/photographyTemplate.js`
  );

  return graphql(
    `
      {
        allContentfulPhotographyPost {
          edges {
            node {
              slug
            }
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                makePage
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMarkdownRemark.edges;
    const contentful_posts = result.data.allContentfulPhotographyPost.edges;
    const tagSet = new Set();
    contentful_posts.forEach((cPosts, cIndex) => {
      createPage({
        component: photographyTemplate,
        path: `/${cPosts.node.slug}`,
        context: {
          slug: cPosts.node.slug
        }
      });
    });
    //   posts.forEach((post, index) => {
    //     const previous =
    //       index === posts.length - 1 ? null : posts[index + 1].node;
    //     const next = index === 0 ? null : posts[index - 1].node;

    //     // Get tags for tags pages.
    //     if (post.node.frontmatter.tags) {
    //       post.node.frontmatter.tags.forEach(tag => {
    //         tagSet.add(tag);
    //       });
    //     }
    //     var pageFormat;
    //     post.node.frontmatter.makePage === 1
    //       ? (pageFormat = blogPost)
    //       : (pageFormat = installationPost);
    //     createPage({
    //       path: post.node.fields.slug,
    //       component: pageFormat,
    //       context: {
    //         slug: post.node.fields.slug,
    //         previous,
    //         next
    //       }
    //     });
    //   });

    //   // Create tags pages.
    //   tagSet.forEach(tag => {
    //     createPage({
    //       path: `/tags/${_.kebabCase(tag)}/`,
    //       component: tagPage,
    //       context: {
    //         tag
    //       }
    //     });
    //   });
    //   return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       // Get tags for tags pages.
//       if (post.node.frontmatter.tags) {
//         post.node.frontmatter.tags.forEach(tag => {
//           tagSet.add(tag);
//         });
//       }

//       createPage({
//         path: post.node.fields.slug,
//         component: blogPost,
//         context: {
//           slug: post.node.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })

//     // Create tags pages.
//     tagSet.forEach(tag => {
//       createPage({
//         path: `/tags/${_.kebabCase(tag)}/`,
//         component: tagPage,
//         context: {
//           tag
//         }
//       });
//     });

//     return null
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
