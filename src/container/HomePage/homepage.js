import React from 'react';

import SideAnimate from '../../assets/SideAnimate/SideAnimate';
import SVGHuman from '../../assets/humanAnimate/humanAnimate';
import HomeContent from '../../components/HomeContent/HomeContent'

import classes from './homage.module.css';
import common from '../CommonSpace/common.module.css';

class HomePage extends React.Component{

    render(){

        let joinClasses = [ classes['home'], common['section'] ]
        //console.log(this.props)
        return(
            <div id='home' className={joinClasses.join(' ')}>
                <SideAnimate />
                <HomeContent scroll={this.props.scroll < 300 ? this.props.scroll : null} />
                <SVGHuman scroll={this.props.scroll  < 700 ? this.props.scroll : null} />
            </div>
        )
    }
}

export default HomePage