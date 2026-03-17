import React from 'react';
import Header from '../components/header';
import '../styles/header.css';
import landingpageBg from '../assets/images/landingpagebg.png';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <Header />

            {/* DIV 1 */}
            <div className="div1" style={{ backgroundImage: `url(${landingpageBg})` }}>
                <div className="div1-overlay"></div>
                <div className="div1-content">
                    <h2 className="title-small">THE ULTIMATE COLD BATH THERAPY</h2>
                    <h1 className="title-large-cloud">REVITALIZE YOUR BODY</h1>
                    <h1 className="title-large-stencil">RECLAIM ENERGY</h1>
                    <button className="shop-now-btn">SHOP NOW</button>
                </div>

                {/* Infinite Carousel */}
                <div className="carousel-container">
                    <div className="carousel-track">
                        <span>POWERBATH</span>
                        <span>THE ULTIMATE COLD BATH THERAPY</span>
                        <span>POWERBATH</span>
                        <span>THE ULTIMATE COLD BATH THERAPY</span>
                        <span>POWERBATH</span>
                        <span>THE ULTIMATE COLD BATH THERAPY</span>
                        <span>POWERBATH</span>
                        <span>THE ULTIMATE COLD BATH THERAPY</span>
                        <span>POWERBATH</span>
                        <span>THE ULTIMATE COLD BATH THERAPY</span>
                        <span>POWERBATH</span>
                        <span>THE ULTIMATE COLD BATH THERAPY</span>
                    </div>
                </div>
            </div>

            {/* DIV 2 */}
            <div className="div2">
                <h2>Shop Now</h2>
                <p>Discover our collection of cold bath therapy products.</p>
            </div>

        </div>
    );
}
