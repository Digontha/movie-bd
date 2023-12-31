

const MovieCard = ({ movie }) => {
    const { poster_path, title, vote_average } = movie || {};
    return (
        <>


            <div className=" bg-[#9d723d] text-white border lg:h-[650px] border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                </a>
                <div className="p-5 flex flex-col lg:flex-row justify-between h-[100px]">

                    <div className="w-[200px]">
                        <h5 className="mb-2 lg:text-xl text-xs font-bold tracking-tight   truncate">
                            {title.slice(0, 40)}
                        </h5>
                    </div>

                    <div className="">
                        <p className="mb-3 font-normal ">{vote_average}</p>
                    </div>

                </div>

            </div>

        </>
    );
};

export default MovieCard;