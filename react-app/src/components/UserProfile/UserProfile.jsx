import React from "react";
import './UserProfile.scss';
import * as avatar from './avatar.jpg';

const UserProfile = () => {

    return (
        <div className="user-profile-wrapper">
            <div className="user-data-wrapper">
                <div className="avatar-icon">
                    <img src={avatar} alt=""/>
                </div>
                <div className="user-data">
                    <div className="description">
                        <p>First Name:</p>
                        <p>Last Name:</p>
                        <p>Email:</p>
                    </div>
                    <div className="value">
                        <p>Helen</p>
                        <p>Unuchek</p>
                        <p>unuchek98@mail.ru</p>
                    </div>
                </div>
            </div>
            <div className="user-posts-wrapper">
                Posts
            </div>
        </div>
    )

};

export default UserProfile;
