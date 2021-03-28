import React from 'react';
import { UsersOfSearchType } from '../../redux/usersReducer';

type UsersType = {
    users: UsersOfSearchType
    follow: (userId: number) => void,
    unfollow: (usersId: number) => void
    setUsers: (users: UsersOfSearchType) => void
}

export function Users(props: UsersType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photo: "https://download-cs.net/steam/avatars/3412.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 2,
                photo: "https://download-cs.net/steam/avatars/3412.jpg",
                followed: true,
                fullName: "Ann",
                status: "I am a english man",
                location: { city: "Gomel", country: "Belarus" },
            },
            {
                id: 3,
                photo: "https://download-cs.net/steam/avatars/3412.jpg",
                followed: true,
                fullName: "Kalvin",
                status: "I am js developer",
                location: { city: "Moskow", country: "Russia" },
            },
            {
                id: 4,
                photo: "https://download-cs.net/steam/avatars/3412.jpg",
                followed: true,
                fullName: "Henry",
                status: "west cost customs",
                location: { city: "Seatle", country: "United St." },
            },
            {
                id: 5,
                photo: "https://download-cs.net/steam/avatars/3412.jpg",
                followed: false,
                fullName: "Dominica",
                status: "I am a lady",
                location: { city: "Rio", country: "Brazil" },
            }
        ])
    }
    return <div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photo} alt="ava" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button>
                                : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
        }
    </div>
}