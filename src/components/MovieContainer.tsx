import { Result } from '../types/TypesMovies'

type result =  {
  results: Result
  }
const MovieContainer = ({ results }: result) => {

  const imgUrls = `https://image.tmdb.org/t/p/w500${results.poster_path}`
  
  return (
    <div className="m-4 mb-8 px-4 mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="rounded-lg bg-white shadow-lg">
            <img src={imgUrls} alt={`${results.title || results.name}`} className="rounded-t-lg h-full w-full object-cover" />
            {/* <img src="https://source.unsplash.com/400x500/?dark" alt="movie poster" className="rounded-t-lg h-60 w-full object-cover" /> */}
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">{results.title || results.name}</h2>
              <p className="mb-2 text-sm text-gray-700">Release Date: {results.release_date}</p>
              <p className="mb-4 text-sm text-gray-700">Rating: {results.vote_average.toFixed(1)}</p>
              <a href="#" className="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Watch Movie</a>
            </div>
          </div>
        </div>
  )
}

export default MovieContainer