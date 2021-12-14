import React, {useEffect, useRef, useState} from "react";
import style from './block.module.scss';
import clsx from "clsx";
import {iconCheck, iconCopy} from "./consts";

export const Block = ({className = '', title, value, isPrice = false}) => {
    const ref = useRef(null);
    const valueFinal = isPrice ? value + ' ADA' : value;
    const [startShowCheckIcon, setStartShowCheckIcon] = useState(false);

    useEffect(() => {
        let id;
        if (startShowCheckIcon) {
            setTimeout(() => {
                setStartShowCheckIcon(false);
            }, 3000)
        }
        return () => {
            if (id) {
                clearTimeout(id);
            }
        }
    }, [startShowCheckIcon]);


    return (
        <div className={clsx(style.block, className)}>
            <p className={style.title}>{title}</p>
            <div className={style.textBlock}>
                <div className={style.valueWrapper}>
                    <span>{value}</span> {isPrice && <span>ADA</span>}
                </div>
                <input className={style.input} ref={ref} value={valueFinal} readOnly={true}/>
                <button className={style.btn}
                        onClick={() => {
                            console.log(ref.current)
                            ref.current.select();
                            document.execCommand("copy");
                            setStartShowCheckIcon(true);
                        }}
                >

                    <span className={clsx({
                        [style.iconCopy]: true,
                        [style.iconCopy_hide]: startShowCheckIcon
                    })}>
                        {iconCopy}
                    </span>

                    <span className={clsx({
                        [style.iconCheck]: true,
                        [style.iconCheck_show]: startShowCheckIcon,
                    })}>
                        {iconCheck}
                    </span>

                </button>
            </div>
        </div>
    )
}