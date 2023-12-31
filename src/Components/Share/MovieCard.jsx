

const MovieCard = ({ movie }) => {
    const { poster_path, title, vote_average } = movie || {};
    return (
        <>


            <div className=" bg-white border h-[650px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                </a>
                <div className="p-5 flex justify-between h-[300px]">

                    <div>
                        <h5 className="mb-2 text-xl font-bold tracking-tight  text-gray-900 dark:text-white">{title}</h5>
                    </div>

                    <div className="">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{vote_average}</p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default MovieCard;