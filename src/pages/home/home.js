import React from 'react';
import Mint from "../../components/mint";
import AboutUs from "../../components/about-us/about-us";
import Collection from "../../components/collection";
import Roadmap from "../../components/roadmap";
import Faq from "../../components/faq";
import {Team} from "../../components/team/team";


const Home = () => {
    return (
        <div>
            <Mint/>
            <AboutUs/>
            <Collection/>
            <Roadmap/>
            <Team/>
            <Faq/>
        </div>
    );
};

export default Home;