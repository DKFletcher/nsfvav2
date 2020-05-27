import React from "react";
import indexModule from "../components/index.module.css";

const IndexFooter = props => {
  return (
    <footer className={indexModule.siteFoot}>
      &copy; NSFVisualArts {new Date().getFullYear()}
    </footer>
  );
};
export default IndexFooter;
