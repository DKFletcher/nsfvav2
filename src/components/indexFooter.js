import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";
import indexModule from "../components/index.module.css";

const IndexFooter = props => {
  console.log(props.path);
  return (
    <footer className={indexModule.siteFoot}>
      &copy; NSFVisualArts {new Date().getFullYear()}
    </footer>
  );
};
export default IndexFooter;
// export default function Footer(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query HeadingQuery {
//           site {
//             siteMetadata {
//               title
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <footer className="site-foot">
//           &copy; {new Date().getFullYear()} <Link to={`/`}>{"siteTitle"}</Link>{" "}
//           &mdash; Built with{" "}
//           <a
//             href="https://gatsbyjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Gatsby
//           </a>
//         </footer>
//       )}
//     />
//   );
// }
