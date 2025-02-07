import { Flex } from 'antd'
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
        <Flex wrap gap={50} align='start' justify='center'>
          {
            seriesDt.data.results.map((movie: Result) => (
              <MovieContainer key={movie.id} results={movie} />
            ))
          }
        </Flex>
      </section>
    </>
  )
}

export default Series