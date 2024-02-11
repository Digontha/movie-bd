import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const MovieDetails = () => {
    const singleMovieData = useLoaderData()
    console.log(singleMovieData);
    const { backdrop_path, poster_path, title, status, vote_count, release_date, videos, overview } = singleMovieData || {};
    const videoKey = videos && videos.results && videos.results[0] && videos.results[0].key;
    // console.log("videokey",videoKey);
    return (
     <>   
<div>
{/* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" /> */}
<div className="hero lg:min-h-screen" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})` }}>
<div className="hero-overlay bg-black bg-opacity-80"></div>
<div>

<div className="flex lg:flex-row flex-col justify-between px-[20px] lg:gap-52 gap-3 ">
 <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="rounded-xl" alt="" />
 <div>
     <iframe
         className="lg:w-[1000px] w-[340px] mx-auto lg:mx-0 h-[200px] lg:h-[500px]"

         src={`https://www.youtube.com/embed/${videoKey}`}

         allowfullscreen
     ></iframe>
     
     <div className="space-y-3 lg:w-[1000px] w-[340px] mx-auto mb-10">
         <p className="font-semibold lg:text-3xl text-xl text-white"> <span className="lg:text-3xl text-red-700 font-semibold mr-2">Title :</span>{title}</p>
         <p className="font-plus font-semibold lg:text-xl text-sm text-white">{overview}</p>
         <p className="font-plus font-semibold lg:text-xl text-sm text-white"><span className="lg:text-3xl text-red-700 font-semibold mr-2">Status :</span>{status}</p>
         <p className="flex items-center gap-5 text-white text-xl"><FaThumbsUp className="text-xl text-red-700"></FaThumbsUp>{vote_count}</p>
         <p className="flex items-center gap-5 text-white text-xl"><span className="lg:text-3xl text-red-700 font-semibold mr-2">Release_date :</span>{release_date}</p>
     </div>
 </div>

</div>

</div>
</div>
</div>
     
     </>
    );
};

export default MovieDetails;