import axios from 'axios'

// fetch gifs
export const fetchGifs = async (searchTerm, offset) => {
    try {
      const results = await axios.get(`https://api.giphy.com/v1/gifs/${searchTerm}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          limit: 15,
          offset: offset,
        }
      })
      return results.data.data;
    } catch (e) {
      console.log(e);
    }
}