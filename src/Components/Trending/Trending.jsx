import  { useEffect, useState } from 'react';
import Banner from '../../Share/Banner';
import axios from 'axios';
import MovieCard from '../../Share/MovieCard';
import Loader from '../Loader/Loader';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies);


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=ceb836801d754447d4c89925b2dda930&language=en-US`)
            .then(data => setMovies(data.data.results))
    }, [])

    return (
        <>
            <div>
                <Banner></Banner>
            </div>

            {
            movies?.length < 1 ? <Loader></Loader>
                :
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 lg:gap-10 gap-2 lg:px-[2%] my-5">
                    {
                        movies?.map(movie => <MovieCard key={movie?.id} movie={movie}></MovieCard>)
                    }
                </div>
            }



        </>
    );
};

export default Trending;