import React from "react";
import s from "../ProfileInfo.module.css";
import image from "../../../../accets/fake-ava.png";
const Ava = ({ photoSmall, isOwner, saveAva }) => {
    const refInput = React.createRef();

    let onChangeAva = (e) => {
        saveAva(e.target.files[0]);
    };

    return (
        <div className={s.avaBox}>
            {isOwner && (
                <div
                    className={s.butLoadAva}
                    onClick={() => {
                        refInput.current.click();
                    }}
                >
                    ...
                </div>
            )}
            <img src={photoSmall || image} alt="ava" className={s.userAva} />
            <input ref={refInput} type="file" className={s.inputLoadAva} onChange={onChangeAva}></input>
        </div>
    );
};

export default Ava;
