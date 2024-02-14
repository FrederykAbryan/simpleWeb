import { showSeries } from '../API/Queries'
import MovieContainer from '../components/MovieContainer'
import { Result } from '../types/TypesMovies'

const Series = () => {
  const seriesDt = showSeries()
  if (seriesDt.isPending) {
    return <div>Loadingg....</div>
  }
  return (
    <>
      <section className='px2'>
        <div className='flex flex-wrap'>
          {
            seriesDt.data.results.map((movie: Result) => (
              <MovieContainer key={movie.id} results={movie} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Series