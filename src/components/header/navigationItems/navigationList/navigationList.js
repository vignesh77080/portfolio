import React from 'react';
//import { NavLink } from 'react-router-dom';

import classes from './navigationList.module.css';

const navigationList = (props) => {

    let joinClasses = [props.addClass ? classes.active : null , props.navAni ? classes['navAnimate'] : null, classes.navigationLists]

    return(
        <li onClick={props.clicked} className={joinClasses.join(' ')}>
            <a
                data-attribute={`< ${props.children} />`}
                target={props.target}
                href={props.link} >
                <span>
                    {`< ${props.children} />`}
                </span>
            </a>
        </li>
    )

};

export default navigationList;
