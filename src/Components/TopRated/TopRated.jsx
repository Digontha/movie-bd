import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from '../../Share/Banner';
import MovieCard from '../../Share/MovieCard';
import Loader from '../Loader/Loader';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery,setSearchQuery]= useState('');
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=ceb836801d754447d4c89925b2dda930&language=en-US&page=${currentPage}`)
            .then(data => {
                setMovies(data.data.results)
                setLoading(false);
            })
    }, [currentPage])

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleSearch = () => {
        setLoading(true);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ceb836801d754447d4c89925b2dda930&query=${searchQuery}`)
            .then(data => {
                setMovies(data.data.results);
                setLoading(false);
            })
    };

    return (
        <>
            <div>
                <Banner></Banner>
            </div>

            <div className="flex justify-center my-5">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-red-500 rounded-md"
                />
                <button onClick={handleSearch} className="btn btn-neutral ml-2">Search</button>
            </div>

            {loading ? <Loader /> :
                movies.length < 1 ?
                    <p className='text-center text-xl my-20'>No movies found</p> :
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 lg:gap-10 gap-2 lg:px-[2%] my-5">
                        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                    </div>
            }

            <div className="flex justify-center gap-10">
                <button onClick={handlePrevClick} className="btn btn-neutral hover:bg-red-600">Prev</button>
                <p className="lg:text-2xl text-[16px] bg-red-600 bg-opacity-20 font-mono font-medium border-red-600 rounded-full p-3 border-2">Page: {currentPage}</p>
                <button onClick={handleNextClick} className="btn btn-neutral hover:bg-red-600">Next</button>
            </div>

        </>
    );
};

export default TopRated;