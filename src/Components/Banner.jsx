


const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-50">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="https://i.ibb.co.com/279V6pP9/photo-1543886151-3bc2b944c718-fit-max-fm-jpg-ixid-M3wz-NTY3-MHwwf-DF8-YWxsf-Hx8f-Hx8f-Hx8-MTc0-Mj-M5.jpg"
          alt="Banner"
          className="md:w-[600px] w-[full] rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Discover the Joy of Creative Play!
          </h1>
          <p className="py-6 text-gray-700 text-lg">
            Build, imagine, and explore with our amazing collection of toys that
            spark curiosity and creativity in every child.
          </p>
          <button className="btn bg-gradient-to-r from-pink-500 to-orange-400 border-none text-white hover:from-orange-400 hover:to-pink-500 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
