import axios from 'axios';

const KEY = 'AIzaSyC9XgzP0GPTEAUWC-NP9Ml5OFxtIXa0za8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
