import React from "react";
import style from './team.module.scss';
import {cards} from './consts';

export const Team = () => {
    return (
        <section className={style.team}>
            <div className={style.inner}>
                <h2 className={style.title}>team</h2>
                <div className={style.cards}>
                    {
                        cards.map(({src, name, text}, i) => (
                            <div className={style.card}
                                 key={i}
                            >
                                <div className={style.blur}/>
                                <img src={src} alt=""/>
                                <p className={style.name}>{name}</p>
                                <p className={style.text}>{text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};