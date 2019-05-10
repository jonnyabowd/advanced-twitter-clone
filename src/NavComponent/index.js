import React from 'react';
import './navComponent.css';

const NavComponent = () => {
    return(
        <div className="nav">
            <ul class="nav-actions">
                <li><i class="fas fa-house-damage"></i>Home</li>
                <li><i class="fas fa-poo-storm"></i>Moments</li>
                <li><i class="fas fa-concierge-bell"></i>Notifications</li>
                <li><i class="fas fa-paper-plane"></i>Messages</li>
            </ul>
            <i class="fab fa-twitter" id="birdo"></i>
            <div class="search-user">
                <div>
                    <input placeholder="Search Bitter"></input>
                    <i class="fas fa-search"></i>
                </div>
                <div>
                    <button>Fweet</button>
                </div>
            </div>
        </div>
    )
}

export default NavComponent