

const Banner = () => {
    return (


        <div className="hero min-h-[80vh] font-custom rounded-xl" style={{ backgroundImage: 'url(https://fandomwire.com/wp-content/uploads/2018/08/Movies-background.png)' }}>
            <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
            <div className="">
                <div className="space-y-10">
              
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