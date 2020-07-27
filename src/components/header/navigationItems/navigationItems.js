import React from 'react';

import NavigationList from '../navigationItems/navigationList/navigationList';
import classes from './navigationItems.module.css';
import listActive from '../navigationItems/navigationList/navigationList.module.css';
//import common from '../../../container/CommonSpace/common.module.css';

const navigationItems = (props) => {

    let removeActive = () => {
        let sel = document.querySelectorAll('.'+classes.navigationItem+' .'+listActive.active);
        sel.forEach((items) => { items.classList.remove(listActive.active) });
    }

    let onClickActive = (e) =>{
        var target = e.target;
        if(target.tagName === 'SPAN'){
            removeActive()
            target.parentElement.parentElement.classList.add(listActive.active)
        }
    }

    return(
        <ul onClick={onClickActive} className={classes.navigationItem}>
            <NavigationList navAni={props.navAni} clicked={props.clicked} link='#home'> HOME </NavigationList>
            <NavigationList navAni={props.navAni} clicked={props.clicked} link='#about' >ABOUT</NavigationList>
            <NavigationList navAni={props.navAni} clicked={props.clicked} link='#contact' >GET IN TOUCH</NavigationList>
        </ul>
    )
};

export default navigationItems;