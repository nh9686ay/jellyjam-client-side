import axios from 'axios';
import React from 'react'

function GenreCards() {
  const client_id = '638824d8d1cf48bca579d7fa24c5ac40';
  const client_secret = 'cb118a82d49d4d51b6f2e5ecefed9085';

  const [token, setToken] = useState("")

  useEffect(() => {
    async function fetchData() {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      const res = await axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
          'Content-Type': "application/x-www-form-urlencoded"
        },
      })
      setToken(res.data.access_token)
    }
    fetchData();
  }, [])

  const getGenreCards = async (e) => {
    e.preventDefault();
    const { data } = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
      headers: {
        'Authorization': `Bearer ${token}`}
    })
    console.log(data)
    getGenreCards()
  }

  return (
    <div>GenreCards

    </div>
  )
}

export default GenreCards;