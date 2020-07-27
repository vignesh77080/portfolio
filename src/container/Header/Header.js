import React from 'react';

import Hamburger from '../../components/header/hamburger/hamburger';
import SideDraw from '../../components/header/sideDraw/sideDraw';

import classes from './header.module.css';

class Header extends React.Component{

    state = {
        Open : true,
        navAni : false
    }

    onHandleClick = ()=>{
        if(window.innerWidth < 767){
            this.setState({
                Open : !this.state.Open,
                navAni : true
            })
        }
    }

    render(){
        return(
            <header className={classes.headerSection}>
                <SideDraw
                    navAni={this.state.navAni}
                    clicked={this.onHandleClick}
                    opened={!this.state.Open}/>
                <Hamburger 
                    cliked={this.onHandleClick} 
                    open={!this.state.Open} />
            </header>
        )
    }
}

export default Header;