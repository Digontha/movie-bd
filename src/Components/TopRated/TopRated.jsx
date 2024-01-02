import axios from 'axios';
import  { useEffect, useState } from 'react';
import Banner from '../../Share/Banner';
import MovieCard from '../../Share/MovieCard';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies);


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=ceb836801d754447d4c89925b2dda930&language=en-US&page=1`)
            .then(data => setMovies(data.data.results))
    }, [])
    return (
        <>
            <div>
                <Banner></Banner>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 lg:gap-10 gap-2 lg:px-[2%] my-5">
                {
                    movies?.map(movie => <MovieCard key={movie?.id} movie={movie}></MovieCard>)
                }
            </div>


        </>
    );
};

export default TopRated;