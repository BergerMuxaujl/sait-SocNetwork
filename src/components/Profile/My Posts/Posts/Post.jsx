import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.titlePost}>{props.title}</div>
            <div className={s.postOuter}>
                <div className={s.postInner}>
                    <div className={s.avaBox}>
                        <img
                            src="https://2.bp.blogspot.com/-voyEENqjVUE/TscAP_w5sII/AAAAAAAAAKE/cTSYWVHwI1I/w1200-h630-p-k-no-nu/Mr%2BBean%2BCartoon%2BFace.png"
                            alt="avatar"
                            className={s.ava}
                        />
                    </div>
                    <div className={s.textPost}>{props.text}</div>
                </div>
                <div className={s.like}>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
