import React from 'react';

import classes from './homepage.module.css'
import common from '../../container/CommonSpace/common.module.css';

let homeContent = (props) => {

    
    let styleClass = {
        width: (props.scroll * 1.25)+'px'
    }

    if(props.scroll > 10){
        document.querySelectorAll('.spanCommon').forEach((items)=> items.removeAttribute('class'))
    }

    if(window.innerWidth < 767){
        styleClass = null
    }

    return(
        <div className={[classes['newClassAdded'], classes['content'], common['contentTill']].join(' ')}>
            <p> Hi I'm </p>
            <h1>
                <span style={styleClass} className={"spanCommon "+classes['leftcurly']}> { "{"} </span>
                <span> V  </span>
                <span> I </span>
                <span> G </span>
                <span> N </span>
                <span> E </span>
                <span> S </span>
                <span> H  </span>
                <span style={styleClass} className={"spanCommon "+classes['rightcurly']}> { "}"} </span>
            </h1>
            <p> Working as Font-End Devloper </p>
        </div>
    )

}

export default homeContent;