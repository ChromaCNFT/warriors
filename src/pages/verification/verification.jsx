import React, {useEffect, useState} from "react";
import style from './verification.module.scss';
import {Formik} from "formik";
import {getRandomIntInclusive} from "./helpers";
import {items, note} from './consts';
import {Block} from "./block";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";


export const Verification = () => {
    const [verificated, setVerificated] = useState(false);
    const [firstNumber, setFirstNumber] = useState(getRandomIntInclusive(1, 9));
    const [secondNumber, setSecondNumber] = useState(getRandomIntInclusive(1, 9));
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(0);

    useEffect(() => {
        const operator = getRandomIntInclusive(0, 2);
        switch (operator) {
            case 0:
                setResult(firstNumber + secondNumber);
                setOperator('+');
                break;
            case 1:
                setResult(firstNumber - secondNumber);
                setOperator('-')
                break;
            case 2:
                setResult(firstNumber * secondNumber);
                setOperator('x')
                break;
            default:
                setResult(0);
        }


    }, []);

    const initialValues = {
        result: ''
    };

    const onSubmitHandler = (values, formikHelpers) => {
        if (values.result === String(result)) {
            setVerificated(true);
        }
        formikHelpers.setSubmitting(false);
    };

    const max = 10;
    const values = [];
    for (let i = 1; i <= max; i++) {
        values.push(i);
    }
    const price = 44;
    const [value, setValue] = useState(1);
    const classes = useStyles();


    return (
        <section className={style.verification}>
            <div className={style.inner}>
                <div className={clsx({
                    [style.verificationBlock]: true,
                    [style.verificationBlock_verificated]: verificated,
                })}>


                    {
                        !verificated
                            ? <>
                                <p className={style.title}>Verification</p>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={onSubmitHandler}
                                >
                                    {
                                        (props) => (
                                            <form onSubmit={props.handleSubmit}
                                                  className={style.form}
                                            >
                                                <div className={style.inputBlock}>

                                                    <div className={style.textWrapper}>
                                                        <p className={style.text}>{`${firstNumber} ${operator} ${secondNumber}`}</p>
                                                        <div className={style.equal}>=</div>
                                                    </div>

                                                    <div className={style.inputWrapper}>
                                                        <input className={style.input}
                                                               type="text"
                                                               id="result"
                                                               placeholder='Enter'
                                                               onChange={props.handleChange}
                                                               onBlur={props.handleBlur}
                                                               value={props.values.email}
                                                        />
                                                    </div>


                                                </div>

                                                <button className={style.confirm}
                                                        type="submit"
                                                >
                                                    Confirm
                                                </button>


                                            </form>
                                        )
                                    }
                                </Formik>
                            </>
                            : <>
                                <p className={style.title}>century warriors</p>

                                <div className={style.items}>
                                    {
                                        items.map(({number, text}) => (
                                            <p className={style.item} key={number}>
                                                <span>{number}</span> <span>{text}</span>
                                            </p>
                                        ))
                                    }
                                </div>

                                <p className={style.note}>
                                    <span>*NOTE:*</span> <span>{note}</span>
                                </p>

                                <Block value='addr1v9a6hlqcderhqraeu9j7wlkzl260rcl3rz7w2lz7squ9wrq39su44'
                                       title='wallet address:'
                                       className={style.firstBlock}
                                />

                                <div className={style.secondBlockWrapper}>
                                    <Block value={price*Number(value)}
                                           title='price:'
                                           className={style.secondBlock}
                                           isPrice={true}
                                    />


                                    <div className={style.selectWrapper}>
                                        <p className={style.title}>choose quantity:</p>

                                        <FormControl fullWidth className={style.select}>
                                            <Select
                                                classes={{
                                                    select: classes.select,
                                                }}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={value}
                                                onChange={(e) => {
                                                    setValue(e.target.value)
                                                }}
                                                MenuProps={{
                                                    classes: {
                                                        paper: classes.paper,
                                                        list: classes.list
                                                    }
                                                }}
                                            >
                                                {
                                                    values.map((el) => (
                                                        <MenuItem
                                                            className={classes.menuItem}
                                                            value={el}
                                                            key={el}
                                                            //classes
                                                        >
                                                            {el}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>


                                </div>
                            </>

                    }


                </div>
            </div>

        </section>
    )
};

const useStyles = makeStyles({
    select: {
        background: 'none!important',
        color: '#FFF!important',
        //border: '1px solid red!important',
    },
    paper: {
        background: 'none!important',
    },
    list: {
        background: '#2D2C2C!important',
        border: '2px solid rgba(255, 255, 255, 0.04)!important',
        color: '#FFF!important',
        '& li': {
            borderBottom: '2px solid #353434!important',
        }
    },

});
