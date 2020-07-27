import React from 'react';

import NavigationItems from '../navigationItems/navigationItems';
import classes from './sideDraw.module.css';

const sideDraw = (props) => {

    let joinClasses = [classes.backdropDiv]
    if(window.innerWidth < 767){
        joinClasses.push(classes.Closed)
        joinClasses.push(props.opened ? classes.Open : null)
    }
    return(
        <div className={joinClasses.join(' ')}>
            <nav>
                <NavigationItems navAni={props.navAni} clicked={props.clicked} />
            </nav>
        </div>
    )
};

export default sideDraw;