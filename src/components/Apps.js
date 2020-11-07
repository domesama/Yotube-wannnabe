import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export class Apps extends Component {
  state = {
    listOfVideos: [],
    selectedVid: null,
  };
  userHasSubmmited = async (term) => {
    // console.log(term);
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(res["data"]["items"]);
    this.setState({ listOfVideos: res["data"]["items"] });
  };
  onVideoSelect = (vid) => {
    console.log(vid);
    this.setState({ selectedVid: vid });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar userHasSubmmited={this.userHasSubmmited} />
        <VideoDetail vid={this.state.selectedVid} />
        <VideoList
          listOfVideos={this.state.listOfVideos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default Apps;
