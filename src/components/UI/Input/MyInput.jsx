import React from 'react';
import classes from './Myinput.module.css'

const MyInput = (props) => {
    return (
        <input className={classes.inp} {...props}/>
    );
};

export default MyInput;