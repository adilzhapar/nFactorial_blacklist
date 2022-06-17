import React from "react";
import IconPopularTweets from '../../icons/popular-tweet';


import './styles.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-row">
                <div>Главная</div>
                <div className="popular-tweet-icon">
                    <IconPopularTweets />
                </div>
            </div>
        </div>
    );
}

export default Header;