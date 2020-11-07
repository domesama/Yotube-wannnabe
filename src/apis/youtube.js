import axios from "axios";

const KEY = "AIzaSyAE8QjNEVRTgHa9hXXJ3zdzu0Z3R3K2QIk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
