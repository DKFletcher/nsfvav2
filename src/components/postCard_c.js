import React, { Component } from "react";
import { Link } from "gatsby";
import Tags from "./tag";

export default props => (
  <article
    className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
      props.postClass
    } ${props.node.node.thumbnail.resolutions.src ? `with-image` : `no-image`}`}
    style={
      props.node.node.thumbnail.resolutions.src && {
        backgroundImage: `url(${props.node.node.thumbnail.resolutions.src})`
      }
    }
  >
    {console.log("props: ", props.node.node.thumbnail.resolutions.src)}
    {props.node.node.thumbnail.resolutions.src ? (
      <ContentWithImage props={props} />
    ) : (
      <ContentNoImage props={props} />
    )}
  </article>
);

class ContentNoImage extends Component {
  render() {
    const { props } = this.props;
    return (
      <div className="post-card-content">
        <div>
          <Link to={props.node.node.slug} className="post-card-link">
            <h2 className="post-card-title">
              {props.node.node.title || props.node.node.slug}
            </h2>
          </Link>
        </div>
        <div className="post-card-date">{props.node.node.date}</div>
        <div className="post-card-body">{props.node.node.thumbnailText}</div>
        <div>
          <Link
            to={props.node.node.slug}
            className="post-card-link post-card-readmore"
          >
            {props.node.node.thumbnailText ? "Read more" : null}
          </Link>
        </div>
      </div>
    );
  }
}

class ContentWithImage extends Component {
  render() {
    const { props } = this.props;
    return (
      <Link to={props.node.node.slug} className="post-card-link">
        <div className="post-card-content">
          <h2 className="post-card-title">
            {props.node.node.title || props.node.node.slug}
          </h2>
        </div>
      </Link>
    );
  }
}
