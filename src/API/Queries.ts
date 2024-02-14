/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query"
import { getMovies, getSeries } from "./MasterAPI"

export function showMovies() {
    return useQuery({
        queryKey: ["movies"],
        queryFn: getMovies,
        // enabled: true
    })
}
export function showSeries() {
    return useQuery({
        queryKey: ["series"],
        queryFn: getSeries,
        // enabled: true
    })
}
// export function getImages(url:string) {
//     return useQuery({
//         queryKey: ["image", url],
//         queryFn: async () => { return await getImage(url)},
//         // enabled: true
//     })
// }