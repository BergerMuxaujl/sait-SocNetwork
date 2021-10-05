import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={`${s.dialog} ${s.active}`}>Angela</div>
                <div className={s.dialog}>Nikita</div>
                <div className={s.dialog}>Alisa</div>
                <div className={s.dialog}>Nikolay</div>
                <div className={s.dialog}>Natasha</div>
            </div>
            <div className={s.messages}>
                <div className={s.massage}>Privet!</div>
                <div className={s.massage}>Che delaesh?</div>
            </div>
        </div>
    )
}

export default Dialogs;