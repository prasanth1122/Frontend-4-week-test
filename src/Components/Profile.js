import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user ID from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            fetch(`https://dummyjson.com/users/${storedUser.id}`)
                .then(res => res.json())
                .then(data => {
                    // Save user details in local storage
                    localStorage.setItem('user', JSON.stringify(data));
                    setUser(data);
                })
                .catch(error => console.error('Error fetching user:', error));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user data from local storage
      };

    return (
        <div id='main'>
            <div class="profile-design">
                <div class="profile-line"></div>
            </div>
            <div class="container">
                <h3 class="profile-title">Signup Successful!</h3>
                <div class="profile_area">
                    <h3 class="profile-subtitle">Profile</h3>

                    <div class="user-icon">
                    </div>
                    {user && (
                        <div class="details">
                        <img src={user.image} alt="user-icon" width="80" />
                        <p>ID: {user.id}</p>
                        <p>Username: {user.username}</p>
                        <p>Firstname: {user.firstName}</p>
                        <p>Lastname: {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Gender: {user.gender}</p>
                        {/* Display other user information */}
                    </div>
                    )}
                    <button class="logout-button btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
