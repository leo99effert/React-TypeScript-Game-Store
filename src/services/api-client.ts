import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '19702d5c1423406e8b60e8f104ac7d44'
  }
})