import React, {useEffect} from 'react';

import classes from './hamburger.module.css';

const hamburger = (props) => {

    if(window.innerWidth < 767){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(()=>{
            var select = document.querySelector('.'+classes.hamburger);
            if(props.open){
                select.classList.add(classes.toggle)
            }else{
                select.classList.remove(classes.toggle)
            }
        }, [props.open]);
    }


    return(
        <div onClick={props.cliked} className={classes.hamburger}>
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
        </div>
    )
};

export default hamburger;