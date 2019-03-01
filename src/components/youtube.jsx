import axios from 'axios'

const KEY = 'AIzaSyAcNr5LMxSEMcLwDIX54evmS0f8JbODg40'

export default axios.create ({
          baseURL: 'https://www.googleapis.com/youtube/v3',
          params: {
            part : 'snippet',
            maxResults : 5,
            key : KEY 
          }
})
 
