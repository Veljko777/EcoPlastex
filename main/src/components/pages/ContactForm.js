import React from "react";
import {reset, Field, reduxForm} from "redux-form"


class ContactForm extends React.Component{
    renderError({error, touched}){
        if(touched && error){
            return (
                <p className="pt-0 mt-0" style={{color:"red"}}><small>*{error}</small></p>
            )
        }
    }

    renderInput=({input,label,meta})=>{
        const classname=` ${meta.error && meta.touched ? "": ""}`
        return(
            <div className={classname}>
                <label>{label}</label>
                <input className="form-control" {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit=(formValues,dispatch)=>{
        this.props.onSubmit(formValues);
        dispatch(reset("conectForm"))
        
        
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="mb-3">
                <div className="form-group">
                    
                    <Field className="field" name="name" type="text"  component={this.renderInput} label="Vaše ime i prezime:*"/>
                    
                </div>
                <div className="form-group">
                    <Field className="field" name="email" type="email"  component={this.renderInput} label="Email:*"/>
                </div>
                <div className="form-group">
                    <Field className="field" name="phone" type="text"  component={this.renderInput} label="Telefon:"/>
                </div>
                <div className="form-group">
                    <Field className="field" name="subject" type="text"  component={this.renderInput} label="Tema:*"/>
                </div>
                <div className="form-group">
                    <Field className="textarea"  name="description" type="text"  component={this.renderInput} label="Poruka:*"></Field>
                </div>
                <h6 className="m-2 p-1">* Obavezno polje</h6>
                <button type="submit" className="btn submit-button mb-2">Pošalji poruku</button>
                <div className="message" >Poruka je poslata</div>
            </form>
        )
    }
}
const validate=(formValues)=>{
    const errors={};
    if(!formValues.name){
        errors.name="Obavezno polje"
    }
    if(!formValues.email){
        errors.email="Obavezno polje"
    }
    if(!formValues.subject){
        errors.subject="Obavezno polje"
    }
    if(!formValues.description){
        errors.description="Obavezno polje"
    }
    return errors;
}

export default reduxForm({form:"conectForm",
validate}) (ContactForm)



