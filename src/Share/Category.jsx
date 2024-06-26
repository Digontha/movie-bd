import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loader from "../Components/Loader/Loader";


const Category = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ceb836801d754447d4c89925b2dda930&page=${currentPage}`)
            .then(data => {
                setMovies(data.data.results);
                setLoading(false);
            })
    }, [currentPage]);

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
            <div className="flex justify-center my-5">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-red-500 rounded-md outline-none dark:bg-[#282828] dark:text-white"
                />
                <button onClick={handleSearch} className="btn btn-neutral rounded-xl bg-red-600 text-white border-none ml-2">Search</button>
            </div>

            {loading ? <Loader /> :
                movies.length < 1 ?
                    <div>
                        <p className='text-center text-xl my-20'>No movies found</p>
                        <p onClick={() => window.location.reload()} className="cursor-pointer text-center w-32 mx-auto bg-red-700 p-3 rounded-md text-xl text-white font-medium">Go Back</p>
                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 lg:gap-10 gap-2 lg:px-[2%] my-5">
                        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                    </div>
            }

            {movies.length < 1 ? "" : <div className="flex justify-center gap-10">
                <button onClick={handlePrevClick} className="btn bg-gradient-to-b from-red-500 to-white">Prev</button>
                <p className="lg:text-2xl text-[16px] dark:text-white bg-red-600 bg-opacity-20 font-mono font-medium border-red-600 rounded-full p-3 border-2">Page: {currentPage}</p>
                <button onClick={handleNextClick} className="btn  bg-gradient-to-b from-red-500 to-white">Next</button>
            </div>}
        </>
    );
};

export default Category;
