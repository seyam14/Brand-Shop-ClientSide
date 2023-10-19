

const Banner = () => {
    return (
        <div>
        <div
          className="hero h-[75vh]"
          style={{ backgroundImage: "url(https://i.ibb.co/gzQmg9Y/Technology-and-Electronics.png)" }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-[600px">
              <h2 className="mb-5 text-2xl font-bold ">
              ElectroTech Insights: Unveiling Innovation
              </h2>
              <p>
              Technology and electronics encompass the design, development, and application of electrical and digital systems to
                <br />
                <span className="font-semibold">
                enhance and streamline various aspects of modern life.
                </span>
              </p>
              <div className="inline-flex mt-4">
                <div className="text-center">
                  <input
                    type="text"
                    placeholder="Search here...."
                    className=" rounded-l py-2 px-4 outline-none"
                  />
                  <button className="bg-red-500 text-white rounded-r py-2 px-4 hover:bg-blue-600">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Banner;