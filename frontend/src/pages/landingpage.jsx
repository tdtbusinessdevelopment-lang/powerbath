import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/header.css';
import landingpageBg from '../assets/images/landingpagebg.png';

// Featured Images
import coldplungeImg from '../assets/images/featured/coldpunge.png';
import blackcoldImg from '../assets/images/featured/blackcold.png';
import icebathImg from '../assets/images/featured/icebath.png';

// Div 3 Images
import div3modelImg from '../assets/images/div3model.png';
import snowImg from '../assets/images/snow.png';
import uvImg from '../assets/images/uv.png';
import handImg from '../assets/images/hand.png';
import remoteImg from '../assets/images/remote.png';

// Div 4 Images
import div4Img1 from '../assets/images/div4/1.png';
import div4Img2 from '../assets/images/div4/2.png';
import div4Img3 from '../assets/images/div4/3.png';

export default function LandingPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Remove animation classes after 1.5s so CSS hover effects can take over
                    setTimeout(() => {
                        entry.target.classList.remove(
                            'reveal-on-scroll', 'is-visible', 
                            'fade-in-up', 'fade-in-left', 'fade-in-right', 'zoom-in-scale',
                            'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'
                        );
                    }, 1500);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="landing-page">
            <Header />

            {/* DIV 1 */}
            <div className="div1" style={{ backgroundImage: `url(${landingpageBg})` }}>
                <div className="div1-overlay"></div>
                <div className="div1-content">
                    <h2 className="title-small reveal-on-scroll fade-in-up">THE ULTIMATE COLD BATH THERAPY</h2>
                    <h1 className="title-large-cloud reveal-on-scroll fade-in-up delay-100">REVITALIZE YOUR BODY</h1>
                    <h1 className="title-large-stencil reveal-on-scroll fade-in-up delay-200">RECLAIM ENERGY</h1>
                    <button className="shop-now-btn reveal-on-scroll zoom-in-scale delay-300">SHOP NOW</button>
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

            {/* DIV 2 - Featured Products */}
            <div className="div2">
                <div className="bubble top-left-large"></div>
                <div className="bubble top-left-small"></div>
                <div className="bubble bottom-right-large"></div>
                <div className="bubble bottom-right-small"></div>

                <h2 className="section-title reveal-on-scroll fade-in-up">Featured Products</h2>

                <div className="featured-cards-container">
                    <div className="featured-card reveal-on-scroll fade-in-up delay-100">
                        <div className="featured-card-top">
                            <img src={coldplungeImg} alt="Cold Plunge Sofia" className="featured-card-img" />
                        </div>
                        <div className="featured-card-bottom">
                            <button className="featured-card-btn">Cold Plunge Sofia</button>
                        </div>
                    </div>

                    <div className="featured-card reveal-on-scroll fade-in-up delay-200">
                        <div className="featured-card-top">
                            <img src={blackcoldImg} alt="Black Cold Plunge" className="featured-card-img" />
                        </div>
                        <div className="featured-card-bottom">
                            <button className="featured-card-btn">Black Cold Plunge</button>
                        </div>
                    </div>

                    <div className="featured-card reveal-on-scroll fade-in-up delay-300">
                        <div className="featured-card-top">
                            <img src={icebathImg} alt="Ice Bath Chiller v1" className="featured-card-img" />
                        </div>
                        <div className="featured-card-bottom">
                            <button className="featured-card-btn">Ice Bath Chiller v1</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIV 3 - Features */}
            <div className="div3">
                <div className="div3-left reveal-on-scroll fade-in-left">
                    <img src={div3modelImg} alt="Powerbath Model" className="div3-model-img" />
                </div>
                <div className="div3-right">
                    <h2 className="div3-title reveal-on-scroll fade-in-right delay-100">
                        The Smarter Choice <br />
                        (Advanced Features)
                    </h2>
                    <div className="features-container">
                        <div className="feature-card reveal-on-scroll fade-in-up delay-200">
                            <img src={snowImg} alt="Rapid Cooling" className="feature-icon" />
                            <p className="feature-text">Rapid cooling system <br />for instant readiness</p>
                        </div>
                        <div className="feature-card reveal-on-scroll fade-in-up delay-300">
                            <img src={uvImg} alt="UV Disinfection" className="feature-icon" />
                            <p className="feature-text">UV disinfection with <br />durable build.</p>
                        </div>
                        <div className="feature-card reveal-on-scroll fade-in-up delay-400">
                            <img src={handImg} alt="Portable Machine" className="feature-icon" />
                            <p className="feature-text">Portable machine <br />with a durable build.</p>
                        </div>
                        <div className="feature-card reveal-on-scroll fade-in-up delay-500">
                            <img src={remoteImg} alt="Wi-Fi Remote Controls" className="feature-icon" />
                            <p className="feature-text">Wi-Fi remote controls <br />for convenience.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIV 4  */}
            <div className="div4">
                <div className="div4-left reveal-on-scroll fade-in-right">
                    <h2 className="div4-title">What is Powerbath?</h2>
                    <p className="div4-text">
                        <span className="bold-blue">POWERBATH</span> is a sleek, modern cold plunge system that brings pro-grade recovery and wellness into your personal space. Say goodbye to ice hassles and costly spa sessions—Powerbath delivers clean, safe, and effective cold immersion whenever you need it.
                    </p>

                    <h2 className="div4-subtitle">Why Powerbath is the Leading Choice</h2>
                    <p className="div4-text">
                        <span className="bold-blue">POWERBATH</span> offers consistent cooling, easy setup, and quick recovery benefits—giving you a pro-level cold plunge experience right at home.
                    </p>

                    <h3 className="div4-small-title">DID YOU KNOW?</h3>
                    <p className="div4-subtext">
                        Click the photos to see our daily FB posts — stay refreshed with Powerbath.
                    </p>

                    <div className="div4-images">
                        <img src={div4Img1} alt="FB Post 1" className="div4-img" />
                        <img src={div4Img2} alt="FB Post 2" className="div4-img" />
                        <img src={div4Img3} alt="FB Post 3" className="div4-img" />
                    </div>
                </div>
                <div className="div4-right reveal-on-scroll fade-in-left delay-200">
                    <button className="promo-btn">
                        Play the video to see our<br />promotional video
                    </button>
                    <div className="phone-mockup">
                        <div className="phone-notch"></div>
                        <div className="phone-buttons left-top"></div>
                        <div className="phone-buttons left-bottom"></div>
                        <div className="phone-buttons right"></div>
                        <div className="phone-screen bg-placeholder">
                            <div className="play-button-overlay">
                                <div className="play-triangle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}
