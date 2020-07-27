import React from 'react';

import Header from '../Header/Header';
import Homepage from '../HomePage/homepage';
import Contact from '../contact/contact';
import About from '../about/about';
import FindMeOn from '../../components/contact/findmeon/findmeon'

import classes from './common.module.css';
import listActive from '../../components/header/navigationItems/navigationList/navigationList.module.css';

class CommonCase extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            scrollVal : 0,
        };
        this.id = 0
    }

    ElementIsInView =(el) =>{
        const rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
            && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
        
    }

    requestFrameFn = () => {
        var selectElement = document.querySelectorAll('.'+classes.section);
        this.setState({
            scrollVal : window.scrollY
        })
        selectElement.forEach((items, index) => {
            if(this.ElementIsInView(items)){
                items.classList.add(classes.newClassAdded);          
            }else{
                items.classList.remove(classes.newClassAdded);
            }
        })

        this.id = window.requestAnimationFrame(this.requestFrameFn)
    }

    componentDidMount(){
        this.id = window.requestAnimationFrame(this.requestFrameFn)
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.scrollVal !== nextState.scrollVal ){
            let selectElement = document.querySelectorAll('.'+classes.section);
            let selLi =  document.querySelectorAll('nav ul li');
            selectElement.forEach((items, index)=>{
                if((items.offsetTop - window.scrollY)- 50 < 10){
                    selLi.forEach((item) => item.classList.remove(listActive.active))
                    selLi[index].classList.add(listActive.active)
                }
            })
            return true
        }

        return false
    }

    componentWillUnmount(){
        window.cancelAnimationFrame(this.id)
    }

    render(){

        return(
            <div className='content_warp'>
                <Homepage scroll={this.state.scrollVal} />
                <Header/>
                <About />
                <Contact />
                <FindMeOn />
            </div>
        )
    }
    
};

export default CommonCase;
