import axios from "axios";

const KEY = "AIzaSyDAsDtrZnsK0E9PPNmU0Ieq9_WM4pFhupc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
