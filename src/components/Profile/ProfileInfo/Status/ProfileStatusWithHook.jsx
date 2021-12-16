import React from "react";
import { useState, useEffect } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    };

    let deactivateEditMode = (e) => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.status !== prevProps.status) {
    //         this.setState({
    //             status: this.props.status,
    //         });
    //     }
    // }

    return (
        <div className={s.statusBox}>
            {!editMode && (
                <span onDoubleClick={activateEditMode} className={s.statusSpan}>
                    {props.status}
                </span>
            )}
            {editMode && <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} className={s.statusInput} type="text" value={status} />}
        </div>
    );
};

export default ProfileStatusWithHook;
