import React from 'react';

import Input from '../../../components/contact/Input/Input';
import axios from '../../../axios';
import Spinners from '../../../assets/Spinners/Spinners';

import classes from './contactform.module.css';
import common from '../../../container/CommonSpace/common.module.css'

class ContactForm extends React.Component{

    state = {
        userform : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    autoComplete : "off"
                },
                styleClass : false,
                value : '',
                validation : {
                    required : true,
                    minLength : 5
                },
                IsValid : false,
                touched : false
            },
            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    autoComplete : "off"
                },
                value : '',
                styleClass : false,
                validation : {
                    required : true,
                    emailValidate : /^([\w\-.]+)@((([\w-]+\.)+)([a-zA-Z]{2,4}))$/
                },
                IsValid : false,
                touched : false
            },
            message : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    autoComplete : "off"
                },
                value : '',
                styleClass : false,
                validation : {
                    required : true
                },
                IsValid : false,
                touched : false
            }
        },
        success : false,
        formContent : false,
        errorState : false
    }

    onHandleSubmit = (e) =>{
        e.preventDefault()
        let contactdata = {};
        for(let a in this.state.userform){
            contactdata[a] = this.state.userform[a].value
        }

        this.setState({
            success : true
        })
        axios.post('/data.json', contactdata)
            .then((res) => {
                //console.log(res)
                this.setState({
                    success : false,
                    formContent : true
                })
            })
            .catch((error)=>{
                //console.log(error)
                this.setState({
                    success : false,
                    errorState : true
                })
            })
        
    }

    checkValidity(currentValue, valid) {
        let IsBoolean = true;

        if(valid.required){
            IsBoolean = currentValue.trim() !== "" && IsBoolean;
        }

        if(valid.minLength){
            IsBoolean = currentValue.length >= valid.minLength && IsBoolean;
        }

        if(valid.emailValidate){
            IsBoolean = currentValue.match(valid.emailValidate) && IsBoolean
        }

        return IsBoolean
    }

    onHandleChange = (e, items) => {
        let newObj = {...this.state.userform}
        let newObjProps = { ...newObj[items] }
        newObjProps.value = e.target.value;
        newObjProps.styleClass = false
        if(newObjProps.value.length > 0){
            newObjProps.styleClass = true 
        }
        newObjProps.IsValid =  this.checkValidity(newObjProps.value, newObjProps.validation);
        newObjProps.touched = true;
        newObj[items] = newObjProps;

        let formValid = true;
        for(let i in newObj){
            formValid =  newObj[i].IsValid && formValid
        }

        this.setState({
            userform : newObj,
            formValid : formValid
        })

    }

    render(){
        
        let ItemsArray = [], form = null;
        for(let a in this.state.userform){
            ItemsArray.push(a)
        }

        form = (
            <form onSubmit={this.onHandleSubmit}>
                {ItemsArray.map(( items) => (
                    <Input 
                        styleClass= {this.state.userform[items].styleClass}
                        key={items}
                        label = { items}
                        content = {this.state.userform[items].content}
                        changed = { (e) => this.onHandleChange(e, items) }
                        value = {this.state.userform[items].value}
                        Invalid = {!this.state.userform[items].IsValid}
                        touched = {this.state.userform[items].touched}
                        elementType={this.state.userform[items].elementType}
                        elementConfig= {this.state.userform[items].elementConfig} />
                ))}
                <input disabled={!this.state.formValid} type='submit' value='submit' />
            </form>
        )

        if(this.state.success){
            form = <form> < Spinners /> </form>
        }

        if(this.state.formContent){
            form = <form > <p> Thanks for contacting me !!!  </p>  </form>
        }

        if(this.state.errorState){
            form = <form> <p> Sorry Something gone wrong </p> </form>
        }

        return(
            <div className={[classes['getintouch'], common['contentTill']].join(' ')}>
                <h2 className={common.h2}> {"{"} GET IN TOUCH {"}"} </h2>
                {form}
            </div>
        )
    }
}

export default ContactForm;