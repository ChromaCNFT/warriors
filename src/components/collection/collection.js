import React, {useState} from 'react';
import iicon from '../../assets/images/iicon.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import head1 from '../../assets/images/head1.png';
import body1 from '../../assets/images/body1.png';
import head2 from '../../assets/images/head2.png';
import body2 from '../../assets/images/body2.png';
import head3 from '../../assets/images/head3.png';
import body3 from '../../assets/images/body3.png';
import body4 from '../../assets/images/body4.png';
import body5 from '../../assets/images/body5.png';
import body6 from '../../assets/images/body6.png';
import body7 from '../../assets/images/body7.png';
import body8 from '../../assets/images/body8.png';
import body9 from '../../assets/images/body9.png';
import head4 from '../../assets/images/head4.png';
import head5 from '../../assets/images/head5.png';
import head6 from '../../assets/images/head6.png';
import head7 from '../../assets/images/head7.png';
import head8 from '../../assets/images/head8.png';
import head9 from '../../assets/images/head9.png';
import attack from '../../assets/images/attack.svg';
import track from '../../assets/images/track.svg';
import defence from '../../assets/images/defence.svg';
import dexterity from '../../assets/images/dexterity.svg';
import agility from '../../assets/images/agility.svg';
import luck from '../../assets/images/luck.svg';
import intelligence from '../../assets/images/intelligence.svg';
const Collection = () => {
    const [samurai,setSamurai] = useState(false)
    const [samuraiHover,setSamuraiHover] = useState(false)
    const [knightHover,setKnightHover] = useState(false)
    const [soldierHover,setSoldierHover] = useState(false)
    const [knife,setKnife] = useState(false)
    const [solder,setSolder] = useState(false)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handleSamuraiAbilities = ()=>{
        setSamurai(!samurai)
    }
    const handleKnightAbilities = ()=>{
        setKnife(!knife)
    }
    const handleSoldierAbilities = ()=>{
        setSolder(!solder)
    }
    return (
        <div className='collection' id='collection'>
            <h2 data-aos="fade-up">Collection Deep dive</h2>
            <div className="collections">
                <div data-aos="fade-up" data-aos-delay="0" className="collectionSlider">
                    <div className={`topSliderCover ${samuraiHover ? 'collectionHover' : ''}`}></div>
                    <div className={`topSliderCover2 ${samuraiHover ? 'collectionHover' : ''}`}></div>
                    <div
                        className="sliderMainHeader"
                        onMouseLeave={()=>{setSamuraiHover(false)}}
                        onMouseEnter={()=>{setSamuraiHover(true)}}
                    >
                        <div className={`slideHeader ${samuraiHover ? 'collectionHover' : ''}`}>
                            Samurai
                            <div className="icon">
                                <p>
                                    Samurais were warriors present in the pre-modern Japan era who were active as early as the 5th century all the way until their abolishment in the 18th century. Samurais were known to follow a code called “bushidō”. They dedicated their life practicing: loyalty, skill, self-discipline, self-sacrifice, bravery, and honor.
                                </p>
                                <img src={iicon} alt="i icon"/>
                            </div>
                        </div>
                        <div className={`topSliderContainer ${samurai ? 'non-arrows' : ''} `}>
                            <Slider {...settings}>
                                <div className="topSliderItem">
                                    <img src={head1} alt="head"/>
                                </div>
                                <div className="topSliderItem">
                                    <img src={head2} alt="head"/>
                                </div>
                                <div className="topSliderItem">
                                    <img src={head3} alt="head"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className={`bottomSlider ${samurai ? 'non-arrows' : ''}`}>
                        <Slider {...settings}>
                            <div className="topSliderItem">
                                <img src={body1} alt="head"/>
                            </div>
                            <div className="topSliderItem">
                                <img src={body2} alt="head"/>
                            </div>
                            <div className="topSliderItem">
                                <img src={body3} alt="head"/>
                            </div>
                        </Slider>
                    </div>
                    {samurai ? <div className="abilities">
                        <p className='abilities-header'>WARRIOR ABILITES</p>
                        <Slider {...settings}>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#E2975F'}}>06/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(60% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#E2975F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.75) 0%, rgba(255, 179, 123, 0.75) 38.54%, rgba(114, 81, 31, 0.75) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#D05F5F'}}>01/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(10% + 20px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#E2975F'}}>07/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(70% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>09/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(90% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#D05F5F'}}>02/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(20% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#E2975F'}}>06/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(60% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>10/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(100% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#D05F5F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#E2975F'}}>04/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(40% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#D05F5F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div> : ''}
                    <button className="collectionButton" onClick={handleSamuraiAbilities}>{samurai ? 'Back to Samurai' : 'WARRIOR ABILITES'}</button>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="collectionSlider">
                    <div className={`topSliderCover ${knightHover ? 'collectionHover' : ''}`}></div>
                    <div className={`topSliderCover2 ${knightHover ? 'collectionHover' : ''}`}></div>
                    <div
                        className="sliderMainHeader"
                        onMouseLeave={()=>{setKnightHover(false)}}
                        onMouseEnter={()=>{setKnightHover(true)}}
                    >
                        <div  className={`slideHeader ${knightHover ? 'collectionHover' : ''}`}>
                            Knight
                            <div className="icon">
                                <p>
                                    Knights are known for their chivalry and were seen as elite fighters who swore to an oath to be faithful to their lords. Knights first began to appear in the 8th century and their legacy still lives on till this day as in certain parts of the world one can still enter the knighthood
                                </p>
                                <img src={iicon} alt="i icon"/>
                            </div>
                        </div>
                        <div className={`topSliderContainer ${knife ? 'non-arrows' : ''}`}>
                            <Slider {...settings}>
                                <div className="topSliderItem">
                                    <img src={head4} alt="head"/>
                                </div>
                                <div className="topSliderItem">
                                    <img src={head5} alt="head"/>
                                </div>
                                <div className="topSliderItem">
                                    <img src={head6} alt="head"/>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    {knife ? <div className="abilities">
                        <p className='abilities-header'>WARRIOR ABILITES</p>
                        <Slider {...settings}>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#E2975F'}}>06/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(60% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#E2975F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.75) 0%, rgba(255, 179, 123, 0.75) 38.54%, rgba(114, 81, 31, 0.75) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#D05F5F'}}>01/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(10% + 20px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#E2975F'}}>07/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(70% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>09/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(90% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#D05F5F'}}>02/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(20% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#E2975F'}}>06/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(60% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>10/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(100% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#D05F5F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#E2975F'}}>04/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(40% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#D05F5F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div> : ''}
                    <div className={`bottomSlider ${knife ? 'non-arrows' : ''}`}>
                        <Slider {...settings}>
                            <div className="topSliderItem">
                                <img src={body4} alt="head"/>
                            </div>
                            <div className="topSliderItem">
                                <img src={body5} alt="head"/>
                            </div>
                            <div className="topSliderItem">
                                <img src={body6} alt="head"/>
                            </div>
                        </Slider>
                    </div>
                    <button className="collectionButton" onClick={handleKnightAbilities}>{knife ? 'Back to Knight' : 'WARRIOR ABILITES'}</button>
                </div>
                <div data-aos="fade-up" data-aos-delay="900" className="collectionSlider">
                    <div className={`topSliderCover ${soldierHover ? 'collectionHover' : ''}`}></div>
                    <div className={`topSliderCover2 ${soldierHover ? 'collectionHover' : ''}`}></div>
                    <div
                        className="sliderMainHeader"
                        onMouseLeave={()=>{setSoldierHover(false)}}
                        onMouseEnter={()=>{setSoldierHover(true)}}
                    >
                        <div className={`slideHeader ${soldierHover ? 'collectionHover' : ''}`}>
                            Soldier
                            <div className="icon">
                                <p>
                                    Modern day soldiers are military personnel who participate in ground, sea, and air battles. During the World Wars in the 20th century, they were crucial in helping to serve and protect their nation. Soldiers come from different technical backgrounds and various armies across the globe, who still battle to this day.
                                </p>
                                <img src={iicon} alt="i icon"/>
                            </div>
                        </div>
                        <div className={`topSliderContainer ${solder ? 'non-arrows' : ''}`}>
                            <Slider {...settings}>
                                <div className="topSliderItem">
                                    <img src={head7} alt="head"/>
                                </div>
                                <div className="topSliderItem">
                                    <img src={head8} alt="head"/>
                                </div>
                                <div className="topSliderItem">
                                    <img src={head9} alt="head"/>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    {solder ? <div className="abilities">
                        <p className='abilities-header'>WARRIOR ABILITES</p>
                        <Slider {...settings}>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#E2975F'}}>06/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(60% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#E2975F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.75) 0%, rgba(255, 179, 123, 0.75) 38.54%, rgba(114, 81, 31, 0.75) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#D05F5F'}}>01/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(10% + 20px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#E2975F'}}>07/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(70% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>09/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(90% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#D05F5F'}}>02/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(20% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#E2975F'}}>06/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(60% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="abilitiesContainer">
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">ATTACK</div>
                                        <div className="result" style={{color:'#E2975F'}}>05/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={attack} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(50% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">DEFENCE</div>
                                        <div className="result" style={{color:'#55C55A'}}>10/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={defence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(100% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">dexterity</div>
                                        <div className="result" style={{color:'#D05F5F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={dexterity} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">agility</div>
                                        <div className="result" style={{color:'#55C55A'}}>08/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={agility} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(80% - 10px)',
                                                 backgroundImage:' linear-gradient(180deg, rgba(79, 158, 77, 0.5) 0%, rgba(123, 255, 129, 0.5) 38.54%, rgba(31, 114, 39, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">Luck</div>
                                        <div className="result" style={{color:'#E2975F'}}>04/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={luck} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(40% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 116, 77, 0.5) 0%, rgba(255, 179, 123, 0.5) 38.54%, rgba(114, 81, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="abilitiesItem">
                                    <div className="details">
                                        <div className="title">INTELLIGENCE</div>
                                        <div className="result" style={{color:'#D05F5F'}}>03/10</div>
                                    </div>
                                    <div className="track">
                                        <img src={intelligence} className='icon' alt=""/>
                                        <img src={track} className='trackTrace' alt=""/>
                                        <div className="trackPercent"
                                             style={{width:'calc(30% - 10px)',
                                                 backgroundImage:'linear-gradient(180deg, rgba(158, 77, 77, 0.5) 0%, rgba(255, 123, 123, 0.5) 38.54%, rgba(114, 31, 31, 0.5) 100%)'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                    </div> : ''}
                    <div className={`bottomSlider ${solder ? 'non-arrows' : ''}`}>
                        <Slider {...settings}>
                            <div className="topSliderItem">
                                <img src={body7} alt="head"/>
                            </div>
                            <div className="topSliderItem">
                                <img src={body8} alt="head"/>
                            </div>
                            <div className="topSliderItem">
                                <img src={body9} alt="head"/>
                            </div>
                        </Slider>
                    </div>
                    <button className="collectionButton" onClick={handleSoldierAbilities}>{solder ? 'Back to Soldier' : 'WARRIOR ABILITES'}</button>
                </div>
            </div>
        </div>
    );
};

export default Collection;