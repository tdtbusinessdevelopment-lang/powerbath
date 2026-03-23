import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import '../styles/contact.css';
import '../styles/header.css';

// Images
import contactd1Img from '../assets/images/contactd1.png';
import contactd2Img from '../assets/images/contactd2.png';
import mapImg from '../assets/images/map.png'; // Make sure this image is present

export default function ContactUs() {
    
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <Header />

            {/* DIV 1 - Hero Section */}
            <div className="contact-div1" style={{ backgroundImage: `url(${contactd1Img})` }}>
                <div className="contact-div1-overlay"></div>
                <div className="contact-div1-content">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">
                        Explore our wide range of high-quality steel products,<br />
                        designed to meet all your construction and industrial<br />
                        needs.
                    </p>
                </div>
            </div>

            {/* DIV 2 - Content Layout */}
            <div className="contact-div2">
                <div className="contact-left">
                    
                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h2 className="contact-heading">Contact Information</h2>
                        <p className="contact-info-text">
                            If you have questions about our products or need help choosing the right bath essentials, we're here to assist you. Reach out anytime and our team will get back to you as soon as possible.
                        </p>
                        
                        <div className="contact-icons-grid">
                            <div className="info-item">
                                <div className="icon-wrapper">
                                    <PhoneCall size={36} color="#0A73B0" strokeWidth={1.5} />
                                </div>
                                <span className="info-item-text">0917 708 5501</span>
                            </div>
                            <div className="info-item">
                                <div className="icon-wrapper">
                                    <Mail size={36} color="#0A73B0" strokeWidth={1.5} />
                                </div>
                                <span className="info-item-text">powerbath.ph@gmail.com</span>
                            </div>
                            <div className="info-item">
                                <div className="icon-wrapper">
                                    <MapPin size={36} color="#0A73B0" strokeWidth={1.5} />
                                </div>
                                <span className="info-item-text">11th Avenue Bonifacio<br/>Global City, Taguig</span>
                            </div>
                        </div>
                    </div>

                    {/* Get In Touch */}
                    <div className="get-in-touch-section">
                        <h2 className="get-in-touch-heading">Get In Touch !</h2>
                        <p className="get-in-touch-subtext">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email" className="form-input" required />
                            <input type="text" placeholder="Name" className="form-input" required />
                            <textarea placeholder="Message" className="form-textarea" rows="7" required></textarea>
                            <button type="submit" className="form-submit-btn">SUBMIT</button>
                        </form>
                    </div>

                </div>

                <div className="contact-right">
                    
                    {/* Arched Image */}
                    <div className="arched-img-container">
                        <img src={contactd2Img} alt="Woman relaxing in powerbath" className="contact-arched-img" />
                    </div>

                    {/* Location and Social Media Wrapper */}
                    <div className="location-social-wrapper">
                        
                        {/* Our Location */}
                        <div className="our-location-section">
                            <h2 className="location-heading">Our Location</h2>
                            <p className="location-text">
                                Visit us at our showroom to explore our bath products in person and get personalized assistance from our team. We're easy to find and always happy to help you out.
                            </p>
                            <div className="map-container" style={{height: '280px', backgroundColor: '#e0e0e0', borderRadius: '15px', overflow: 'hidden'}}>
                                <img 
                                    src={mapImg} 
                                    alt="Map Location" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div style="display:flex;height:100%;align-items:center;justify-content:center;color:#666;">Please add map.png to assets/images</div>';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="social-media-section">
                            <h2 className="social-heading">Social Media</h2>
                            <div className="social-icons">
                                {/* Facebook */}
                                <a href="#" aria-label="Facebook" className="social-link">
                                    <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                {/* Instagram */}
                                <a href="#" aria-label="Instagram" className="social-link">
                                    <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                {/* TikTok */}
                                <a href="#" aria-label="TikTok" className="social-link">
                                    <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v10a4 4 0 1 1-6-4z"></path></svg>
                                </a>
                                {/* YouTube */}
                                <a href="#" aria-label="YouTube" className="social-link">
                                    <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                                </a>
                                {/* Pinterest */}
                                <a href="#" aria-label="Pinterest" className="social-link">
                                    <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.65 7.9 6.46 9.32-.09-.79-.17-2.02.04-2.88.19-.8 1.22-5.18 1.22-5.18s-.31-.62-.31-1.54c0-1.44.84-2.52 1.88-2.52.88 0 1.3.66 1.3 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.51 1.85 1.52 1.85 1.82 0 3.22-1.92 3.22-4.69 0-2.45-1.76-4.16-4.28-4.16-2.9 0-4.6 2.18-4.6 4.42 0 .88.34 1.83.76 2.34.08.1.09.19.07.3-.08.31-.25 1.02-.28 1.15-.04.16-.14.2-.31.12-1.15-.54-1.87-2.22-1.87-3.58 0-2.92 2.12-5.6 6.12-5.6 3.21 0 5.71 2.29 5.71 5.35 0 3.2-2.01 5.77-4.8 5.77-.94 0-1.82-.49-2.12-1.06l-.58 2.2c-.21.8-.78 1.81-1.16 2.42A9.956 9.956 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
