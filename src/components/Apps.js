// import React, { Component } from "react";
// import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
// import VideoList from "./VideoList";
// import VideoDetail from "./VideoDetail";

// export class Apps extends Component {
//   state = {
//     listOfVideos: [],
//     selectedVid: null,
//   };
//   componentDidMount() {
//     this.userHasSubmmited("Pekora");
//   }
//   userHasSubmmited = async (term) => {
//     const res = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     // console.log(res["data"]["items"]);
//     this.setState({
//       listOfVideos: res["data"]["items"],
//       selectedVid: res["data"]["items"][0],
//     });
//   };
//   onVideoSelect = (vid) => {
//     console.log(vid);
//     this.setState({ selectedVid: vid });
//   };
//   render() {
//     return (
//       <div className="ui container">
//         <h1
//           className="ui center aligned massive message"
//           style={{ marginTop: "50px" }}
//         >
//           OwO Search
//         </h1>
//         <SearchBar userHasSubmmited={this.userHasSubmmited} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail vid={this.state.selectedVid} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 listOfVideos={this.state.listOfVideos}
//                 onVideoSelect={this.onVideoSelect}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Apps;

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

function Apps() {
  // const [listOfVideoState, setListOfVideoState] = useState([]);
  const [selectedVid, setSelectedVidState] = useState(null);
  const [videos, search] = useVideos("Pekora");

  useEffect(() => {
    setSelectedVidState(videos[0]);
  }, [videos]);

  // useEffect(() => {
  //   userHasSubmmited("Pekora");
  // }, []);

  // const userHasSubmmited = async (term) => {
  //   const res = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   // console.log(res["data"]["items"]);
  //   setListOfVideoState(res["data"]["items"]);
  //   setSelectedVidState(res["data"]["items"][0]);
  // };

  return (
    <div className="ui container">
      <h1
        className="ui center aligned massive message"
        style={{ marginTop: "50px" }}
      >
        OwO Search
      </h1>
      <SearchBar userHasSubmmited={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail vid={selectedVid} />
          </div>
          <div className="five wide column">
            <VideoList
              listOfVideos={videos}
              // onVideoSelect={(vid) => setSelectedVidState(vid)}
              onVideoSelect={setSelectedVidState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
