import axios from 'axios'

const KEY = 'AIzaSyCQZWrE6so59vqoPTUjdELkAC2ESeAR-rA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
}) 