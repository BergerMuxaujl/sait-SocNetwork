import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormControls/FormControls";
import { login } from "../../redux/auth-Reducer";
import { required, validMaxLength } from "../../utils/validates/validates";
import s from "./Login.module.css";

let validMaxLength40 = validMaxLength(40);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.loginBox}>
                <Field component={Input} validate={[required, validMaxLength40]} name={"email"} type="text" placeholder={"mail"} className={s.loginInput} />
            </div>
            <div className={s.pasBox}>
                <Field
                    component={Input}
                    validate={[required, validMaxLength40]}
                    name={"password"}
                    type="text"
                    placeholder={"Password"}
                    className={s.pasInput}
                />
            </div>
            <div className={s.rememberBox}>
                <Field component={"input"} name={"rememberMe"} type="checkbox" className={s.remInput} />
            </div>
            {props.error && <div className={s.errorForm}>'eror'</div>}
            <div className={s.buttonBox}>
                <button>Enter</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "LogIn" })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    return (
        <div>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};
export default connect(mapStateToProps, { login })(Login);
