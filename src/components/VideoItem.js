import React, { Component } from "react";
import "./VideoItem.css";

export class VideoItem extends Component {
  state = {
    currentVid: null,
  };
  render() {
    return (
      <div
        className=" video-item item"
        onClick={() => this.props.onVideoSelect(this.props.vid)}
      >
        <img
          className="ui image"
          src={this.props.vid.snippet.thumbnails.medium.url}
          alt={this.props.vid.snippet.title}
        />
        <div className="content">
          <div className="header">{this.props.vid.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
