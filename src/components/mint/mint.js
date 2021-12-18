import React, {useEffect, useState} from 'react';
//import AOS from 'aos';
import 'aos/dist/aos.css';
import herous from '../../assets/images/herous.png';
import mountain from '../../assets/images/mountain.png';
import series from '../../assets/images/series.png';
//import discordicon from "../../assets/images/discordicon.svg";
import {HashLink} from "react-router-hash-link";
import {convertToTwoDigit, dateEnd, getDays, getHours, getMins, getSecs} from './helpers';


const Mint = () => {
    const [timeIsOver, setTimeIsOver] = useState(false);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const time = new Date(dateEnd.getTime() - new Date().getTime()).getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 60000) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime(time => time - 1000);
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

    return (
        <div className='mint'>

            <div className="mountain" style={{backgroundImage: `url(${mountain})`}} data-aos="fade-right">
                <div className="des">
                    <h1>Build your Warrior!</h1>
                    <p>
                        Travel back in time and join us on the journey
                        of fierce and loyal warriors. With Century Warriors
                        NFT, you have an opportunity to create your own
                        warrior with incredible hand drawn art
                    </p>
                    <HashLink
                        to='/'
                        //to='/ver'
                        smooth={true}
                    >
                        MINT
                    </HashLink>
                </div>
                <div className="image">
                    <img src={herous} alt=""/>
                </div>
            </div>
            <div className="series" data-aos="fade-up" style={{backgroundImage: `url(${series})`}}>
                <div className="title">Series 1: Drop 1:</div>
                <div className="date" id='date'>
                    <span>{convertToTwoDigit(getDays(time))}</span>
                    <span style={{color: 'grey'}}> Days</span>
                    <span style={{color: 'white'}}> : </span>
                    <span>{convertToTwoDigit(getHours(time))}</span>
                    <span style={{color: 'grey'}}> HOURS</span>
                    <span style={{color: 'white'}}> : </span>
                    <span>{convertToTwoDigit(getMins(time))}</span>
                    <span style={{color: 'grey'}}> minutes</span>
                    <span style={{color: 'white'}}> : </span>
                    <span>{convertToTwoDigit(getSecs(time))}</span>
                    <span style={{color: 'grey'}}> seconds</span>
                </div>
            </div>
            <div className="price">
                <div className="item">Quantity: <span>3333</span></div>
                <div className="item">Price: <span>44 ADA</span></div>
            </div>
        </div>
    );
};

export default Mint;
