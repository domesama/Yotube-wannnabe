import axios from "axios";

const KEY = "AIzaSyCCNGW6L0QvWBZaoxjGD2tWNN4jzVf-87A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
