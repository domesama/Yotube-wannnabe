import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export class Apps extends Component {
  state = {
    listOfVideos: [],
  };
  userHasSubmmited = async (term) => {
    console.log(term);
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(res["data"]["items"]);
    this.setState({ listOfVideos: res["data"]["items"] });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar userHasSubmmited={this.userHasSubmmited} />
        <VideoList listOfVideos={this.state.listOfVideos} />
      </div>
    );
  }
}

export default Apps;
