import s from "./findUsers.module.css";
import * as axios from "axios";
import image from "../../accets/fake-ava.png";
import React from "react";

class FindUsers extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (num) => {
        this.props.setCurrentPage(num);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        let countPages = Math.ceil(this.props.totalUsersCount / this.props.countUsersPage);

        let pages = [];
        for (let i = 1; i <= countPages; i++) {
            pages.push(i);
        }

        return (
            <div className={s.wrapperUsers}>
                <div className={s.pagesButton}>
                    {pages.map((num) => {
                        return (
                            <span
                                onClick={(e) => {
                                    this.onPageChanged(num);
                                }}
                                className={num === this.props.currentPage ? `${s.pageButtonCurrent} ${s.pageButton}` : s.pageButton}
                            >
                                {num}
                            </span>
                        );
                    })}
                </div>
                {this.props.users.map((user) => (
                    <div key={user.id} className={s.wrapperUser}>
                        <div className={s.avaWrapper}>
                            <div className={s.ava}>
                                <img src={user.ava || image} alt="ava" className={s.avaImg} />
                            </div>
                            <div className={s.followBox}>
                                {user.followed ? (
                                    <button onClick={() => this.props.unfollow(user.id)} className={`${s.butFol} ${s.unfollow} `}>
                                        Unfollow
                                    </button>
                                ) : (
                                    <button onClick={() => this.props.follow(user.id)} className={`${s.butFol} ${s.follow} `}>
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userInfo_top}>
                                <div className={s.fullName}>
                                    <span className={s.firstName}>{user.name}</span>
                                    <span className={s.surname}>{"user.surName"}</span>
                                </div>
                                <div className={s.location}>
                                    <span className={s.city}>{"user.location.city"}</span>, <span className={s.country}>{"user.location.country"}</span>
                                </div>
                            </div>
                            <div className={s.status}>{user.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default FindUsers;
