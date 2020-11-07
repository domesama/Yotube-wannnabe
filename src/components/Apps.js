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
  componentDidMount() {
    this.userHasSubmmited("Pekora");
  }
  userHasSubmmited = async (term) => {
    // console.log(term);
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(res["data"]["items"]);
    this.setState({
      listOfVideos: res["data"]["items"],
      selectedVid: res["data"]["items"][0],
    });
  };
  onVideoSelect = (vid) => {
    console.log(vid);
    this.setState({ selectedVid: vid });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar userHasSubmmited={this.userHasSubmmited} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail vid={this.state.selectedVid} />
            </div>
            <div className="five wide column">
              <VideoList
                listOfVideos={this.state.listOfVideos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
