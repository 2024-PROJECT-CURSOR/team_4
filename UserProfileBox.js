import React from 'react'
import profile_icon from '../images/profile-icon.png';

const UserProfileBox = () => {
    return (
        <div className='userProfile-box'>
            <img src={profile_icon} className='profile-image'></img>
            <div style={{ flex: '1', textAlign: 'right', marginRight: '20px' }}>안덕님</div>
        </div>
    )
}

export default UserProfileBox