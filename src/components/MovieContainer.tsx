import { Card } from 'antd'
import { Result } from '../types/TypesMovies'

type result = {
  results: Result
}
const MovieContainer = ({ results }: result) => {

  const imgUrls = `https://image.tmdb.org/t/p/w500${results.poster_path}`

  return (
    <Card hoverable style={{ width: 300 }} styles={{ body: { padding: 0, overflow: 'hidden' } }}
    cover={<img src={imgUrls} alt={`${results.title || results.name}`} style={{ width: '200', height: '400'}}/>}
    >
      {/* <img src={imgUrls} alt={`${results.title || results.name}`} className="rounded-t-lg h-full w-full object-cover" /> */}
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">{results.title || results.name}</h2>
        <p className="mb-2 text-sm text-gray-700">Release Date: {results.release_date}</p>
        <p className="mb-4 text-sm text-gray-700">Rating: {results.vote_average.toFixed(1)}</p>
        <a href="#" className="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Watch Movie</a>
      </div>
    </Card>
  )
}

export default MovieContainer