import React from 'react';

const Hero = () => {
    return (
        // <!-- start hero -->
        <div className="bg-gray-100">
          <section className="cover bg-blue-teal-gradient relative bg-teal-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
          items-center min-h-screen">
            <div className="h-full absolute top-0 left-0 z-0">
              <img src="https://www.treloaronline.com/hs-fs/hubfs/workers-compensation-for-dental-practices.jpeg?width=620&name=workers-compensation-for-dental-practices.jpeg" alt="" className="w-full h-full object-cover opacity-20"/>
            </div>
    
            <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
              <div>
                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">A better life starts with a
                  beautiful
                  smile.</h1>
                <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to the Dentist Office of Dr. Thomas
                  Dooley,
                  where
                  trust
                  and comfort are priorities.</p>
                <a href="#" className="px-8 py-4 bg-teal-900 text-white rounded inline-block mt-8 font-semibold">Book
                  Appointment</a>
              </div>
            </div>
          </section>
        </div>
        // {/* <!-- end hero --> */}
    );
};

export default Hero;