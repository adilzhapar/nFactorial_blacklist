import React from 'react';
import './styles.css';
import profileImage from '../../icons/enot.jpeg';

const CreatePost = () => {
    return (
        <div className="create-post-wrapper">
            <div className="input-wrapper">
                <img className="profile-image" src={profileImage} width="60px" height="50px"/>
                <input type="text" placeholder="Не болды?"></input>
            </div>
            <button className="post-button">Твитнуть</button>

            
        </div>
    );
}

export default CreatePost;