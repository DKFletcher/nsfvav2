import React from "react";
import { Link } from "gatsby";

import IndexFooter from "../components/indexFooter";

const LayoutIndex = props => {
  const { title, children, path } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div id="menu" className="site-head-container">
          <a
            className="nav-burger"
            href={`#menu`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>{" "}
              <div className="hamburger-text-menu-text hidden">Menu</div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              {/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/photography`}>Photography</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/installation`}>Installation</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <IndexFooter />
    </div>
  );
};

export default LayoutIndex;