import React, { useEffect } from 'react';

import classes from './about.module.css';
import common from '../../container/CommonSpace/common.module.css';

let aboutContent = () =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        let codeReact = document.querySelectorAll('#code_react pre');
        codeReact.forEach((items, index)=>{
            let parent = document.querySelector('#code_react');
            let span = document.createElement('span');
            span.setAttribute('class', classes.code_common);
            span.setAttribute('data-attr', index+1)
            span.append(items);
            parent.append(span)
        })

    }, [])

    return(
        <div id='code_react' className={[classes['code_wrap'], common['contentTill']].join(' ')}>

            <pre>
                <code>
                {" "}
                class <span className={classes.codehighlight}>Vignesh</span> extends{" "}
                <span className={classes.codehighlight}>React.Component</span>
                {"{"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"   "}</code>
            </pre>
            <pre>
                <code>
                {"    "}
                <span className={classes.codeblue}>state</span> = {"{"}{" "}
                </code>
            </pre>
            <pre>
                <code>
                {"        "}name : <span className={classes.codedec}> 'vignesh'</span>,{" "}
                </code>
            </pre>
            <pre>
                <code>
                {"        "}DOBtimestamp : <span className={classes.codedec}>01041997</span>,{" "}
                </code>
            </pre>
            <pre>
                <code>
                {"        "}email :{" "}
                <span className={classes.codedec}>'vignesh.yes97@gmail.com' </span>{" "}
                </code>
            </pre>
            <pre>
                <code>
                {"    "}
                {"}"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"   "}</code>
            </pre>
            <pre>
                <code>
                {"   "}
                <span className={classes.codeblue}> workExperience</span>() {"{"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"        "}return [ </code>
            </pre>
            <pre>
                <code>
                {"            "}
                {"{"} '2018-now' :{" "}
                <span className={classes.codedec}>'Front-End Devloper @ Accenture'</span> {"}"},{" "}
                </code>
            </pre>
            <pre>
                <code>{"        "}] </code>
            </pre>
            <pre>
                <code>
                {"    "}
                {"}"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"   "}</code>
            </pre>
            <pre>
                <code>
                {"    "}
                <span className={classes.codeblue}>education</span>() {"{"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"        "}return [ </code>
            </pre>
            <pre>
                <code>
                {"            "}
                {"{"} '2014-2018' : <span className={classes.codedec}>'SKCT, Coimbatore'</span>{" "}
                {"}"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"        "}] </code>
            </pre>
            <pre>
                <code>
                {"    "}
                {"}"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"   "}</code>
            </pre>
            <pre>
                <code>
                {"    "}
                <span className={classes.codeblue}>skills</span>() {"{"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"        "}return [ </code>
            </pre>
            <pre>
                <code>
                {"           "}
                <span className={classes.codedec}> 'HTML', 'CSS', 'JS', </span>
                </code>
            </pre>
            <pre>
                <code>
                {"         "}
                <span className={classes.codedec}>{"   "}'JQUERY', 'BOOTSTRAP', 'REACT', </span>
                </code>
            </pre>
            <pre>
                <code>
                {"           "}
                <span className={classes.codedec}> 'NPM', 'SPA', 'REDUX', 'FLUX',</span>{" "}
                </code>
            </pre>
            <pre>
                <code>
                {"          "}
                <span className={classes.codedec}>{"  "}'PHOTOSHOP', 'SASS/LESS' </span>
                </code>
            </pre>
            <pre>
                <code>{"        "}] </code>
            </pre>
            <pre>
                <code>
                {"    "}
                {"}"}{" "}
                </code>
            </pre>
            <pre>
                <code>{"   "}</code>
            </pre>
        </div>
    )
    
    
}

export default aboutContent;