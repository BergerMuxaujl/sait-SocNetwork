import s from "./findUsers.module.css";

const FindUsers = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                firstName: "Lola",
                surName: "Sopogova",
                location: { city: "Uhta", country: "Russia" },
                status: "I am studing",
                ava: "https://www.clipartkey.com/mpngs/m/176-1769166_transparent-assistant-clipart-personal-assistant-character-png.png",
                following: true,
            },
            {
                id: 2,
                firstName: "Nickolay",
                surName: "Baskov",
                location: { city: "Moscow", country: "Russia" },
                status: "I am best voice of world",
                ava: "https://www.anekdot.ru/i/caricatures/normal/12/12/23/nikolaj-baskov.jpg",
                following: false,
            },
            {
                id: 3,
                firstName: "Alla",
                surName: "Pugacheva",
                location: { city: "Minsk", country: "Belorus" },
                status: "I am star who sings",
                ava: "https://img3.postila.ru/storage/3648000/3624523/08d96464ce0ee8e5fc5b64e240424042.jpg",
                following: false,
            },
            {
                id: 4,
                firstName: "Victor",
                surName: "Suhorukov",
                location: { city: "Uhta", country: "Ukrain" },
                status: "I am your brother",
                ava: "https://illustrators.ru/uploads/illustration/image/1291357/main_СУХОРУКОВ_финиш_СЖАТО.jpg",
                following: true,
            },
        ]);
    }
    return (
        <div className={s.wrapperUsers}>
            {props.users.map((user) => (
                <div key={user.id} className={s.wrapperUser}>
                    <div className={s.avaWrapper}>
                        <div className={s.ava}>
                            <img src={user.ava} alt="ava" className={s.avaImg} />
                        </div>
                        <div className={s.followBox}>
                            {user.following ? (
                                <button onClick={() => props.unfollow(user.id)} className={`${s.butFol} ${s.unfollow} `}>
                                    Unfollow
                                </button>
                            ) : (
                                <button onClick={() => props.follow(user.id)} className={`${s.butFol} ${s.follow} `}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.userInfo_top}>
                            <div className={s.fullName}>
                                <span className={s.firstName}>{user.firstName}</span>
                                <span className={s.surname}>{user.surName}</span>
                            </div>
                            <div className={s.location}>
                                <span className={s.city}>{user.location.city}</span>, <span className={s.country}>{user.country}</span>
                            </div>
                        </div>
                        <div className={s.status}>{user.status}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FindUsers;
