import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Container from "../UI/Container/Container";


const MovieDetails = () => {
    const singleMovieData = useLoaderData()
    console.log(singleMovieData);
    const { backdrop_path, poster_path, title, status, vote_count, release_date, videos, overview } = singleMovieData || {};
    const videoKey = videos && videos.results && videos.results[0] && videos.results[0].key;
    // console.log("videokey",videoKey);
    return (
        <>
     

            <div>
                
                <div className="hero lg:min-h-screen" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})` }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <Container>
                    <div className="pt-20">

<div className="flex lg:flex-row flex-col justify-between px-[20px] lg:gap-52 gap-3 ">
    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="rounded-xl w-[600px]" alt="" />
    <div>
        <iframe
            className="w-full h-[300px]"

            src={`https://www.youtube.com/embed/${videoKey}`}

            allowfullscreen
        ></iframe>

<div className="space-y-5 mx-auto mb-10 p-5 bg-gradient-to-b from-red-500 to-[#140808] rounded-b-lg shadow-lg">
            <p className="font-semibold  text-white">
                <span className="text-white font-bold mr-2">Title:</span> {title}
            </p>
            <p className="font-medium text-lg  text-gray-300">
                {overview}
            </p>
            <p className="font-semibold text-lg lg:text-2xl text-white">
                <span className="text-white font-bold mr-2">Status:</span> {status}
            </p>
            <p className="flex items-center gap-3 lg:gap-5 text-white text-lg lg:text-2xl">
                <FaThumbsUp className="text-red-500" /> {vote_count}
            </p>
            <p className="flex items-center gap-3 lg:gap-5 text-white text-lg lg:text-2xl">
                <span className="text-white font-bold mr-2">Release Date:</span> {release_date}
            </p>
        </div>
    </div>

</div>

</div>
                    </Container>
                   
                </div>
            </div>
     

        </>
    );
};

export default MovieDetails;