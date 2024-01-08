import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const MovieDetails = () => {
    const singleMovieData = useLoaderData()
    console.log(singleMovieData);
    const { backdrop_path, belongs_to_collection, title,status ,vote_count ,release_date } = singleMovieData
    return (
        <div>
            {/* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" /> */}
            <div className="hero lg:min-h-screen" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})` }}>
                <div className="hero-overlay bg-black bg-opacity-80"></div>
                <div>

                    <div className="flex lg:flex-row flex-col justify-between px-[20px] lg:gap-20 gap-3 mb-10">
                        <img src={`https://image.tmdb.org/t/p/w500${belongs_to_collection.poster_path}`} className="rounded-xl" alt="" />
                        <div className="lg:space-y-10 space-y-3">
                            <p className="font-mono font-semibold lg:text-3xl text-xl text-white"><span  className="text-3xl text-red-700 font-semibold">Title :</span>{title}</p>
                            <p className="font-mono font-semibold lg:text-xl text-sm text-white"><span  className="text-xl text-red-700 font-semibold">Status :</span>{status}</p>
                            <p className="flex items-center gap-5 text-white text-xl"><FaThumbsUp className="text-xl text-red-700"></FaThumbsUp>{vote_count}</p>
                            <p className="flex items-center gap-5 text-white text-xl"><span  className="text-xl text-red-700 font-semibold">Release_date :</span>{release_date}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieDetails;