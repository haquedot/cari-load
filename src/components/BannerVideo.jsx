import React from 'react';
import '../assets/styles/BannerVideo-style.css';
import video from '../assets/videos/banner-video.mp4';

function BannerVideo() {
    return (
        <div className="banner-video">
            <video autoPlay muted loop playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="container overlay-content">
                <div className="overlay-content">
                    <h1>Move with Us, Grow with Us</h1>
                    <p>Connecting loads and trucks for a smarter logistics solution.</p>
                </div>

            </div>
        </div>
    );
}

export default BannerVideo;
