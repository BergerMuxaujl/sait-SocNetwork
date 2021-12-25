import React from "react";
import s from "./FormControls.module.css";

export const FormControl = (props) => {
    return <div className={s.wrapper}>{props.children}</div>;
};

export const Textarea = (props) => {
    let hasError = props.meta.touched && props.meta.error;
    let { input, meta, ...restProps } = props;
    return (
        <FormControl>
            <textarea {...input} {...restProps} className={hasError ? props.className + " " + s.error : props.className}></textarea>
            {hasError && <span className={s.errorMessage}>{meta.error}</span>}
        </FormControl>
    );
};

export const Input = (props) => {
    let hasError = props.meta.touched && props.meta.error;
    let { input, meta, ...restProps } = props;

    return (
        <FormControl>
            <input {...input} {...restProps} className={hasError ? props.className + " " + s.error : props.className} />
            {hasError && <span className={s.errorMessage}>{meta.error}</span>}
        </FormControl>
    );
};
