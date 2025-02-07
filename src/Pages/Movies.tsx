import MovieContainer from '../components/MovieContainer'
import { showMovies } from '../API/Queries'
import { Result } from '../types/TypesMovies'
import { Flex, Skeleton } from 'antd'

const Movies = () => {
  const moviesDt = showMovies()
  if (moviesDt.isPending) {
    return <Flex align='start' justify='center'>
      <Skeleton.Node active style={{ width: '80vw', height: '70vh' }} />
    </Flex>
  }
  return (
    <>
      <section className='px2 flex flex-col items-center'>
          <Flex wrap gap={50} align='start' justify='center'>
            {
              moviesDt.data.results.map((movie: Result) => (
                <MovieContainer key={movie.id} results={movie} />
              ))
            }
          </Flex>
      </section>
    </>
  )
}

export default Movies