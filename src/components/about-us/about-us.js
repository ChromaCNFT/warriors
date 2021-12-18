import React from 'react';
import gif from '../../assets/images/gif.gif';
const AboutUs = () => {
    return (
        <div className='aboutUs' data-aos="fade-up" id='about-us'>
            <div className="mobileTitle">ABOUT US</div>
            <div className="image">
                <img src={gif} alt=""/>
            </div>
            <div  className="des">
                <h2 className="title">About US</h2>
                <p>
                    Century Warriors is a two-part NFT series created on
                    the Cardano blockchain. With unique hand drawn attributes,
                    the community will be able to fuse, part 1 – head and
                    part 2 – body, to create their own unique Century Warrior.
                </p>
                <p>
                    The art is based on real warriors who have been
                    battling throughout the centuries. The goal is to relive
                    the past of these amazing fighters and bring them into the
                    digital age we are currently in.
                </p>
                <p>
                    Century Warriors will give individuals the ability to be a part
                    of history and see through the eyes of warriors that have
                    populated the world we live in.
                </p>
                <a href='https://centurywarriors.s3.us-east-2.amazonaws.com/Whitepaper+V1.1.pdf'
                   target='_blank' rel="noopener noreferrer"
                   className='button'>Read whitepaper</a>
            </div>
        </div>
    );
};

export default AboutUs;
