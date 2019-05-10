import React from 'react';
import './leftComponent.css';

const LeftComponent = () => {
    return(
        <div className="left">
            <div className="left-top">
                <div class="blue-bkgd"></div>
                <div class="user-info">
                    <div>
                        <img alt="Donald J. Drumpf" class="bootyface" src="https://pbs.twimg.com/profile_images/510452555030077440/Cogylk6__400x400.jpeg" data-height="400" data-width="400"></img>
                    </div>
                    <h1>Donald Tooka Dump</h1>
                    <h2>@iJustTookaDump</h2>
                    <p>501st Peasant of the United Plates of Hilarious <span role="img" aria-label="" aria-labelledby="">🇱🇷</span></p>
                    <div class="profile-item"><i class="fas fa-thumbtack"></i>Dumpington, DSee</div>
                    <div class="profile-item">
                        <i class="fas fa-poop"></i>
                        <a href="https://www.politifact.com/personalities/donald-trump/statements/byruling/false/">Instaburger.com/iJustTookaDump</a>
                    </div>
                    <div class="profile-item"><i class="fas fa-calendar-times"></i>Joined Dumpday 2000</div>
                    <button class="profile-item">Fweet to D. Tooka Dump</button>
                    <div class="profile-item">
                        <i class="fas fa-poo"></i>
                        <a href="https://www.politifact.com/personalities/donald-trump/statements/byruling/false/">1 Follower you know</a>
                    </div>
                    <div class="profile-item">
                        <i class="fas fa-images"></i>
                        <a href="https://www.politifact.com/personalities/donald-trump/statements/byruling/false/">483,301,321 Photos and videos</a>
                    </div>
                </div>
            </div>
            <div className="left-bottom">
                <div class="container">left-bottom!</div>
            </div>
        </div>
    )
}

export default LeftComponent