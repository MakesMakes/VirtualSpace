import React from 'react'
import style from './Auth.module.css'
import { Field, reduxForm } from "redux-form";
import { required, minLengthPassworCreator } from './../../Validators/Validators';
import { Input } from './../../FormsControl/FormsConrol';
import { connect } from 'react-redux';
import {loginThunkCreator } from '../../Redux/loginPage_Reducer';

const minLengthPassword = minLengthPassworCreator(6)

const AuthForm = (props) => {

    return (
        <div className={style.auth}>
            <h1>Authorization</h1>
            <form onSubmit={props.handleSubmit} className={style.form}>
                <div className={style.blockInput}>
                    <Field placeholder={"Email"} name={"email"} component={Input} className={style.input} validate={[required]} />
                </div>
                <div className={style.blockInput}>
                    <Field placeholder={"Password"} type={"password"} name={"password"} component={Input} className={style.input} validate={[required, minLengthPassword]} />
                </div>
                <button className={style.buttonLogin} type={"submit"} onClick={props.login}>Login</button>
            </form>
        </div>
    )
}

const AuthReduxForm = reduxForm({ form: 'auth' })(AuthForm)

const Auth = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password);
    }

    return (
        <div>
            <AuthReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, {login: loginThunkCreator })(Auth)