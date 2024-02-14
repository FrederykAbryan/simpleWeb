import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }
})

  export const getMovies = async () => {
    return (await axiosInstance.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')).data
  }
  export const getSeries = async () => {
    return (await axiosInstance.get('/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc')).data
  }

  // export const getImage = async ({queryKey} : any) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const [_, url] = queryKey
  //   const { data } = (await axiosInstance.get(`${url}`)).data
  //   return data
  // }