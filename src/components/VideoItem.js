import React, { Component } from "react";

export class VideoItem extends Component {
  render() {
    return (
      <div className="item">
        <img
          className="ui image"
          src={this.props.vid.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="content">
          <div className="header">{this.props.vid.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
