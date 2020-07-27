import React from 'react';

import SideAnimate from '../../assets/SideAnimate/SideAnimate';
import AboutContent from '../../components/about/about';

import classes from './about.module.css';
import common from '../CommonSpace/common.module.css';

class About extends React.Component{

    render(){

        let joinClasses = [ classes['about'], common['section'] ]

        return(
            <div id='about' className={ joinClasses.join(' ') }>
                <h2 className={[common.h2, classes.h2].join(' ')}> {"{"} ABOUT {"}"} </h2>
                <SideAnimate style />
                <AboutContent />
            </div>
        )
    }
}

export default About;