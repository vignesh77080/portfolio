import React from 'react';

import SideAnimate from '../../assets/SideAnimate/SideAnimate';
import Form from '../contact/contactform/contactform';

import common from '../CommonSpace/common.module.css';
import classes from './contact.module.css';

class Contact extends React.Component{

    render(){

        let joinClasses = [ classes['contact'], common['section'] ]

        return(
            <div id='contact' className={joinClasses.join(' ')}>
                <SideAnimate style /> 
                <Form />
            </div>
        )
    }
}

export default Contact;