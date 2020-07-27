import React from 'react';

import classes from './Input.module.css';

let InputCreate = (props) => {

    let errorMessage = true;
    if(props.Invalid && props.touched && errorMessage ){
        errorMessage = false
    }

    let inputElement = null;
    let classAdd = [props.styleClass ? classes['styleClass'] : null, !errorMessage ? classes['hasError']: null];

    // useEffect(()=>{
    //     let removeClass = document.querySelectorAll('.'+classes.hasError) || null ;
    //     setTimeout(()=>{
    //         removeClass.forEach((items)=>{
    //             console.log(items.classList)
    //             items.classList.remove(classes.hasError)
    //         })
    //     }, 1000)
    // })
    
    switch (props.elementType){

        case ('input'):
            inputElement = 
                <input 
                    className={classAdd.join(' ')}
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = 
                <textarea
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed} />
                break;

        default :
            inputElement = 
                <input 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed} />

    }

    return(
        <div className={classes['form-grp']}>
            {inputElement}
            <label className={classes['form_label']}>
                {props.label} 
            </label>
            <span>{errorMessage} </span>
        </div>
    )
}

export default InputCreate;