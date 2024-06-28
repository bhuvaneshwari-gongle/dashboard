import React from 'react';
import './profile.css'; // We'll add styles here

const Profile = () => {
    return (
        <div className="profile">
            <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" className="profile-img" />
        </div>
    );
};

export default Profile;
