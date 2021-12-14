import React, {useState} from 'react';
import '../../assets/styles/components/header.scss';
import logo from '../../assets/images/logo.svg';
import twittericon from '../../assets/images/twittericon.svg';
import discordicon from '../../assets/images/discordicon.svg';
import menuicon from '../../assets/images/menuicon.svg';
import xbuton from '../../assets/images/xbuton.svg';
import {HashLink} from "react-router-hash-link";

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <div className='header' data-aos="fade-left">
            <div className={`mobileContainer ${menuOpen ? 'rightPosition' : ''}`}>
                <div className="topSide">
                    <HashLink to='/'
                              smooth={true}
                              onClick={()=>{setMenuOpen(false)}}
                    >
                        <img src={logo} className="logo"/>
                    </HashLink>
                    <button className="closeButton" onClick={()=>{setMenuOpen(false)}}>
                        <img src={xbuton} alt=""/>
                    </button>
                </div>
                <nav>
                    <HashLink to='/#about-us'
                              smooth={true}
                              onClick={()=>{setMenuOpen(false)}}
                    >
                        ABOUT US
                    </HashLink>
                    <HashLink to='/#collection'
                              smooth={true}
                              onClick={()=>{setMenuOpen(false)}}
                    >
                        COLLECTION
                    </HashLink>
                    <HashLink to='/#road-map'
                              smooth={true}
                              onClick={()=>{setMenuOpen(false)}}
                    >
                        ROADMAP
                    </HashLink>
                    <HashLink to='/#faq'
                              smooth={true}
                              onClick={()=>{setMenuOpen(false)}}
                    >
                        FAQ
                    </HashLink>
                </nav>
                <div className="socials">
                        <a href='https://twitter.com/CWarriors_NFT'
                           rel="noopener noreferrer"
                           target='_blank' className="twitterButton">
                            <img src={twittericon}/>
                        </a>
                        <a href='https://discord.com/invite/NWdvk2Pfuv'
                           target='_blank'
                           rel="noopener noreferrer" className="discordButton">
                            <img src={discordicon}/> Join Discord
                        </a>
                </div>
            </div>

            <HashLink to='/'
                      smooth={true}
            >
                <img src={logo} className="logo"/>
            </HashLink>

            <nav>
                <HashLink to='/#about-us'
                          smooth={true}
                          onClick={()=>{setMenuOpen(false)}}
                >
                    ABOUT US
                </HashLink>
                <HashLink to='/#collection'
                          smooth={true}
                          onClick={()=>{setMenuOpen(false)}}
                >
                    COLLECTION
                </HashLink>
                <HashLink to='/#road-map'
                          smooth={true}
                          onClick={()=>{setMenuOpen(false)}}
                >
                    ROADMAP
                </HashLink>
                <HashLink to='/#faq'
                          smooth={true}
                          onClick={()=>{setMenuOpen(false)}}
                >
                    FAQ
                </HashLink>
            </nav>
            <div className="socials">
                <a href='https://discord.com/invite/9XCBcbD9PK'
                        target='_blank'
                        rel="noopener noreferrer" className='mobileDiscord'>
                    <img src={discordicon}/>
                </a>
                <button className='mobileMenuButton' onClick={()=>{setMenuOpen(true)}}>
                    <img src={menuicon}/>
                </button>
                <a href='https://twitter.com/CWarriors_NFT'
                        rel="noopener noreferrer"
                        target='_blank' className="twitterButton">
                    <img src={twittericon}/>
                </a>
                <a href='https://discord.com/invite/NWdvk2Pfuv'
                        target='_blank'
                        rel="noopener noreferrer" className="discordButton">
                    <img src={discordicon}/> Join Discord
                </a>
            </div>
        </div>
    );
};

export default Header;
