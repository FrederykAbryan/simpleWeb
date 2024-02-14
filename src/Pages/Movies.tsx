import MovieContainer from '../components/MovieContainer'
import { showMovies } from '../API/Queries'
import { Result } from '../types/TypesMovies'

const Movies = () => {
  const moviesDt = showMovies()
  if (moviesDt.isPending) {
    return <div>Loadingg....</div>
  }
  return (
    <>
      <section className='px2'>
        <div className='flex flex-wrap'>
          {
            moviesDt.data.results.map((movie: Result) => (
              <MovieContainer key={movie.id} results={movie} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Movies