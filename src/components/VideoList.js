// import React, { Component } from "react";
// import VideoItem from "./VideoItem";

// function VideoList(props) {
//   const listVideos = props.listOfVideos.map((vid) => {
//     return <VideoItem key={vid.id.videoId} vid={vid} />;
//   });

//   return <div>{listVideos}</div>;
// }

// export default VideoList;

import React, { Component } from "react";
import VideoItem from "./VideoItem";

export class VideoList extends Component {
  render() {
    const listVideos = this.props.listOfVideos.map((vid) => {
      return <VideoItem key={vid.id.videoId} vid={vid} />;
    });
    return <div className="ui relaxed divided list">{listVideos}</div>;
  }
}

export default VideoList;
