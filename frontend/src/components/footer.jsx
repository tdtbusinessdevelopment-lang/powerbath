import React from 'react';
import '../styles/footer.css';
import footerImg from '../assets/images/footerimg.png';
import footerLogo from '../assets/images/footer.png';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const QuoteIcon = () => (
    <svg width="46" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="footer-quote-icon">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Top section */}
            <div className="footer-top">
                <div className="footer-top-content">
                    <img src={footerImg} alt="Powerbath Device" className="footer-device-img" />
                    <div className="footer-top-text-box">
                        <h2 className="footer-tagline">
                            Cold plunging made simple—for faster <br />
                            recovery, stronger performance, and <br />
                            everyday wellness.
                            <QuoteIcon />
                        </h2>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    {/* Column 1 */}
                    <div className="footer-col-1">
                        <img src={footerLogo} alt="Powerbath Logo" className="footer-logo" />
                        <div className="footer-links-dropdown">
                            <select>
                                <option>Links</option>
                            </select>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-col-2">
                        <h3 className="footer-col-title">Company</h3>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="footer-col-3">
                        <h3 className="footer-col-title">Working Hours</h3>
                        <p>Lorem Ipsum Lorem <br /> Ipsum Lorem Lo</p>
                        <p className="footer-hours">Mon - Fri: 8:00AM - 6:00PM</p>
                    </div>

                    {/* Column 4 */}
                    <div className="footer-col-4">
                        <h3 className="footer-col-title">Get in Touch</h3>
                        <ul className="footer-contact-info">
                            <li><MapPin size={16} /> Add: 11th Avenue Bonifacio <br /> Global City, Taguig</li>
                            <li><Mail size={16} /> powerbath.ph@gmail.com</li>
                            <li><Phone size={16} /> Phone: 0917 708 3801</li>
                        </ul>
                        <div className="footer-socials">
                            <div className="footer-social-circle"><Facebook size={18} /></div>
                            <div className="footer-social-circle"><Instagram size={18} /></div>
                            <div className="footer-social-circle"><Youtube size={18} /></div>
                            <div className="footer-social-circle"><Twitter size={18} /></div>
                            <div className="footer-social-circle"><Linkedin size={18} /></div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    2026 Powerbath. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
