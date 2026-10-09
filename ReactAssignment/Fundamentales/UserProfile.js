
import React from 'react';

function UserProfile({ username, followers, profilePic }) {
  return (
    <div>
      <img
        src={profilePic}
        alt="Profile"
        width="100"
        height="100"
      />
      <h2>{username}</h2>
      <p>{followers} Followers</p>
    </div>
  );
}

// Default props
UserProfile.defaultProps = {
  followers: 0,
  profilePic: 'https://placehold.co/100x100?text=Profile'
};

export default UserProfile;
