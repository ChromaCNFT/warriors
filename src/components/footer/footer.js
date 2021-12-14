import React from 'react';
import logo from "../../assets/images/logo.svg";
import twittericon from "../../assets/images/twittericon.svg";
import discordicon from "../../assets/images/discordicon.svg";
import series from "../../assets/images/series.png";
import cardano from "../../assets/images/cardano.png";
import footerhero1 from "../../assets/images/footerhero1.png";
import footerhero2 from "../../assets/images/footerhero2.png";
import {HashLink} from "react-router-hash-link";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerMain" style={{backgroundImage: `url(${series})`}}>
                <div className="footerContainer">
                    <HashLink to='/'
                              smooth={true}
                    >
                        <img src={logo} className="logo"/>
                    </HashLink>
                    <nav>
                        <HashLink to='/#about-us'
                                  smooth={true}
                        >
                            ABOUT US
                        </HashLink>
                        <HashLink to='/#collection'
                                  smooth={true}
                        >
                            COLLECTION
                        </HashLink>
                        <HashLink to='/#road-map'
                                  smooth={true}
                        >
                            ROADMAP
                        </HashLink>
                        <HashLink to='/#faq'
                                  smooth={true}
                        >
                            FAQ
                        </HashLink>
                    </nav>
                    <div className="socials">
                        <a href='https://twitter.com/CWarriors_NFT'
                           rel="noopener noreferrer"
                           target='_blank'
                           className="twitterButton">
                            <img src={twittericon}/>
                        </a>
                        <a href='https://discord.com/invite/NWdvk2Pfuv'
                           target='_blank'
                           rel="noopener noreferrer"
                           className="discordButton">
                            <img src={discordicon}/> Join Discord
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottomSection">
                <div className="bottomSectionContainer">
                    <p>Copyright 2021 Century Warriors</p>
                    <p>
                        <img src={cardano} alt="cardano"/>
                        <span>Policy ID:</span> e9bbcc627c65118a9ae2e2c31a8d276cd7bbb75fa11d6b0ed0ae50e5
                    </p>
                    <img src={footerhero1} className='footerHero footerHero1' alt="hero"/>
                    <img src={footerhero2} className='footerHero footerHero2' alt="hero"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
