import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/about.css';
import '../styles/header.css';

// Div 1 Image
import aboutd1Img from '../assets/images/aboutd1.png';

// Div 3 Images
import uprightImg from '../assets/images/upright.png';
import lowleftImg from '../assets/images/lowleft.png';

export default function AboutUs() {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll-reveal animation observer (same pattern as other pages)
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
        <div className="about-page">
            <Header />

            {/* DIV 1 - Hero Section (no text, just image + overlay) */}
            <div className="about-div1" style={{ backgroundImage: `url(${aboutd1Img})` }}>
                <div className="about-div1-overlay"></div>
            </div>

            {/* DIV 2 - What is Powerbath? (overlaps div1) */}
            <div className="about-div2">
                <div className="about-div2-card reveal-on-scroll fade-in-up">
                    <h2 className="about-div2-title">WHAT IS POWERBATH?</h2>
                    <p className="about-div2-text">
                        <span className="about-bold-blue">POWERBATH</span> is a sleek, modern cold plunge system
                        that brings pro-grade recovery and wellness into your
                        personal space. Say goodbye to ice hassles and costly
                        spa sessions—Powerbath delivers clean, safe, and
                        effective cold immersion whenever you need it.
                    </p>

                    {/* Video player placeholder (overlaps bottom of the card) */}
                    <div className="about-video-wrapper">
                        <div className="about-video-placeholder">
                            <div className="about-play-button">
                                <div className="about-play-triangle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIV 3 - Why Cold Plunging & Build for Performance */}
            <div className="about-div3">
                {/* Row 1: Text LEFT, Image RIGHT */}
                <div className="about-div3-row">
                    <div className="about-div3-text-block reveal-on-scroll fade-in-left">
                        <h2 className="about-div3-title">Why Cold<br/>Plunging?</h2>
                        <p className="about-div3-desc">
                            In just minutes, cold plunging activates your system—improving circulations, easing fatigue, and delivering a full-body recharge. It's the cleanest way to energize your day, naturally.
                        </p>
                    </div>
                    <div className="about-div3-img-block reveal-on-scroll fade-in-right delay-200">
                        <img src={uprightImg} alt="Chiller Controls" className="about-div3-img" />
                    </div>
                </div>

                {/* Row 2: Image LEFT, Text RIGHT (use row-reverse so text block comes first in DOM but renders on right) */}
                <div className="about-div3-row about-div3-row-reverse">
                    <div className="about-div3-text-block about-div3-text-right reveal-on-scroll fade-in-right delay-200">
                        <h2 className="about-div3-title">Build for<br/>Performance</h2>
                        <p className="about-div3-desc">
                            Built for lasting performance and ease of use, Powerbath combines premium materials with advanced technology. Its streamlines, portable design lets you set up quickly at home or on the move, delivering uncompromised cold therapy benefits wherever you are.
                        </p>
                    </div>
                    <div className="about-div3-img-block reveal-on-scroll fade-in-left">
                        <img src={lowleftImg} alt="Chiller Controls" className="about-div3-img" />
                    </div>
                </div>
            </div>

            {/* DIV 4 - Feature Checklist */}
            <div className="about-div4">
                <div className="about-div4-inner">
                    <h2 className="about-div4-title reveal-on-scroll fade-in-up">Powerbath has it all</h2>

                    <div className="about-div4-list">
                        <div className="about-div4-item reveal-on-scroll fade-in-up delay-100">
                            <span className="about-div4-icon" aria-hidden="true">&#10003;</span>
                            <span className="about-div4-text">Rapid cooling system for instant readiness</span>
                        </div>

                        <div className="about-div4-item reveal-on-scroll fade-in-up delay-200">
                            <span className="about-div4-icon" aria-hidden="true">&#10003;</span>
                            <span className="about-div4-text">UV disinfection for consistently clean water</span>
                        </div>

                        <div className="about-div4-item reveal-on-scroll fade-in-up delay-300">
                            <span className="about-div4-icon" aria-hidden="true">&#10003;</span>
                            <span className="about-div4-text">Portable machine with durable build</span>
                        </div>

                        <div className="about-div4-item reveal-on-scroll fade-in-up delay-400">
                            <span className="about-div4-icon" aria-hidden="true">&#10003;</span>
                            <span className="about-div4-text">Wi-fi remote controls for total convenience</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
