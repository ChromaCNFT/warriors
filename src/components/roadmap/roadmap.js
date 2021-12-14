import React from 'react';
import rightarrow from '../../assets/images/rightarrow.png';
import roadcircle from '../../assets/images/roadcircle.png';
import road from '../../assets/images/road.png';
import roadline from '../../assets/images/roadline.svg';
import roadlinemobile from '../../assets/images/roadlinemobile.png';
const Roadmap = () => {
    return (
        <div className='roadMap' id='road-map' >
            <div className="roadLine" style={{backgroundImage:`url(${roadline})`}}> </div>
            <div className="roadLineMobile" style={{backgroundImage:`url(${roadlinemobile})`}}> </div>
            <div className="roadContainer">
                <div className="title">roadmap</div>
                <div className="containerRoadMap">
                    <div data-aos="flip-left" data-aos-delay="0" style={{marginTop:'130px'}} className="roadMapItem">
                        <div className="title"><img src={rightarrow} alt=""/> 2021</div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Develop and release website
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Release combination guide
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Reserve 20 CNFTs for giveaways
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Series 1. Drop 1 - 3333 head CNFTs
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Rarity chart for drop 1
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Reserve funds for marketing and community fund
                            </p>
                        </div>
                        <div className="road">
                            <img src={road} alt=""/>
                            <span>Q4</span>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="300" style={{marginTop:'60px'}} className="roadMapItem">
                        <div className="title"><img src={rightarrow} alt=""/> 2022</div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Series 1 Drop 2 - 3333 body CNFTs
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Rarity chart for drop 2
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Reserve funds for community driven project
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Community suggested charities
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>Century Warriors abilities card drop
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Allow holders to begin fusing the head 
                                and body to generate full Century Warrior
                            </p>
                        </div>
                        <div className="road">
                            <img src={road} alt=""/>
                            <span>Q1</span>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="900" style={{marginTop:'110px'}} className="roadMapItem">
                        <div className="title">
                            <img src={rightarrow} alt=""/> 2022</div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                3D Voxel and metaverse ready versions
                                of full Century Warriors
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                CNFT collaborations drop
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Century Warriors battle
                            </p>
                        </div>
                        <div className="road">
                            <img src={road} alt=""/>
                            <span>Q2</span>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="1200" style={{marginTop:'120px'}} className="roadMapItem">
                        <div className="title"><img src={rightarrow} alt=""/> 2022</div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Series 2 announcement
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Updated roadmap for series 2
                            </p>
                        </div>
                        <div className="item">
                            <img src={roadcircle} alt=""/>
                            <p>
                                Smart Contract incorporation for website and series 2
                            </p>
                        </div>
                        <div className="road">
                            <img src={road} alt=""/>
                            <span>Q3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
