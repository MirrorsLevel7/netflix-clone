const API_KEY = '89dfa85ffc10bdac3ad28006e10cf783'
const baseUrl = 'https://api.themoviedb.org/3'

const Requests = {
    fetchTrendingUrl: `${baseUrl}/trending/movie/day?api_key=${API_KEY}`,
    fetchPopularUrl: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming: `${baseUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetTvSeasons: `${baseUrl}/movie/latest?api_key=${API_KEY}&language=en-US`
}
 export default Requests;