import React, { Component } from "react";

export class VideoDetail extends Component {
  render() {
    return this.props.vid == null ? (
      <div> Loading...</div>
    ) : (
      <div>
        <div className="ui segment">
          <h4 className="ui header"> {this.props.vid.snippet.title} </h4>
          <p> {this.props.vid.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
