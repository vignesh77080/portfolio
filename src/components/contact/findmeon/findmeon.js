/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import classes from './findmeon.module.css';
import common from '../../../container/CommonSpace/common.module.css';
import NavigationList from '../../header/navigationItems/navigationList/navigationList';

let findmeon = () => {
    return (
        <div className={[classes['findemeon'], common['contentTill']].join(' ')}>
            <span className={classes.firstSpan}> FIND ME ON : </span>
            <ul>
                <NavigationList target={'_blank'} link='https://www.linkedin.com/in/vignesh-selvaraj-016171171'> LINKEDIN </NavigationList>
                <NavigationList target={'_blank'} link='https://github.com/vignesh77080'> GITHUB </NavigationList>
                <NavigationList target={'_blank'} link='https://twitter.com/vignesh55'> TWITTER </NavigationList>
            </ul>   
        </div>
    )
}

export default findmeon;