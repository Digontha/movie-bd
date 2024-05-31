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
                    className="relative hover:bg-opacity-40 cursor-pointer p-1 btn bg-gradient-to-b from-red-500 to-[#140808] text-white border h-full  rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
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

                    <div className=" flex items-center justify-between my-2">
                        <div className="w-[100px]">
                            <h5 className="text-[20px] font-bold tracking-tight truncate">
                                {title}
                            </h5>
                        </div>
                        <div className="">
                            <p className="font-normal flex gap-1 items-center">
                                <FaStar /> {String(vote_average).slice(0, 1)}
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
