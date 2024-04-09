import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { poster_path, title, vote_average,id } = movie || {};

    const [isHovered, setHovered] = useState(false);

    return (
        <>
            <Link to={`/movieDetails/${id}`}>
                <div
                    className="relative hover:bg-opacity-40 cursor-pointer p-1 bg-[#8B0B0B] text-white border lg:h-[350px]  rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="transition duration-300 ease-in-out hover:scale-110 rounded-xl"
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt=""
                        />
                        {isHovered && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <FaPlayCircle className="text-7xl text-white" />
                            </div>
                        )}
                    </div>

                    <div className="p-5 flex flex-col lg:flex-row justify-between h-[100px]">
                        <div className="w-[100px]">
                            <h5 className="mb-2 lg:text-xl text-xs font-bold tracking-tight truncate">
                                {title}
                            </h5>
                        </div>
                        <div className="">
                            <p className="mb-3 font-normal flex items-center">
                                <FaStar /> {vote_average}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        vote_average: PropTypes.number,
    }),
};

export default MovieCard;
