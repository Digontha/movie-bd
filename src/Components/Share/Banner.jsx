

const Banner = () => {
    return (


        <div className="hero min-h-[80vh] font-custom rounded-xl" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.5b01f7e54b5f8741dbdb33dbb31a66b5?rik=aNd6Wy8mJc%2fP8Q&pid=ImgRaw&r=0)' }}>
            <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
            <div className="">
                <div className="space-y-10">
                    <h1 className="mb-5 text-5xl text-yellow-100 font-extrabold">Journey into Cinematic Worlds <br /> Trailers That Speak Louder</h1>
                    <p className="mb-5 text-xl text-white font-bold">Free Feel To Enjoy Our Website.....</p>
                   <div className="">
                   <button className="btn btn-outline text-white">Get Started</button>
                    <button className="btn btn-outline  text-yellow-100  ml-6">Latest</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;