import React from 'react';
import Hero from '../Hero/Hero';
import About from './About';
import Blog from './Blog';
import Testomonia from './Testomonia';

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Testomonia/>
            <Blog/>
        </div>
    );
};

export default Home;