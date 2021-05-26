import React from 'react'
import style from './Registration.module.css'
import { Field, reduxForm } from "redux-form";
import { required, minLengthPassworCreator } from '../../Validators/Validators';
import { Input } from '../../FormsControl/FormsConrol';
import { connect } from 'react-redux';
import { registerThunkCreator } from '../../Redux/registerPage_Reducer';
import { NavLink, Redirect } from 'react-router-dom';

const minLengthPassword = minLengthPassworCreator(6)

const RegisterForm = (props) => {
    return (
        <div className={style.auth}>
            <h1>Registration</h1>

            <form onSubmit={props.handleSubmit} className={style.form}>
                <div className={style.blockInput}>
                    <Field placeholder={"Email"} name={"email"} component={Input} className={style.input} validate={[required]} />
                </div>
                <div className={style.blockInput}>
                    <Field placeholder={"Password"} type={"password"} name={"password"} component={Input} className={style.input} validate={[required, minLengthPassword]} />
                </div>
                <button className={style.buttonReg} onClick={props.register} type={"submit"}>Registration</button>
                <div className={style.items}><NavLink to="/login">Or Login</NavLink></div>
            </form>

        </div>
    )
}

const RegisterReduxForm = reduxForm({ form: 'register' })(RegisterForm)

const Register = (props) => {
    const onSubmit = (formData) => {
        props.register(formData.email, formData.password);
    }

    return (
        <div>
            {!props.isRegister ?
                <RegisterReduxForm {...props} onSubmit={onSubmit} />
                : <Redirect to='/login' />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isRegister: state.register.isRegister
    }
}


export default connect(mapStateToProps, { register: registerThunkCreator })(Register)