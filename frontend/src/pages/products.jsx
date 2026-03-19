import React, { useEffect } from 'react';
import { Search } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/header.css';
import '../styles/products.css';
import productBg from '../assets/images/productpage.png';

// Import Product Images
import p1 from '../assets/images/productpage/p1.png';
import p2 from '../assets/images/productpage/p2.png';
import p3 from '../assets/images/productpage/p3.png';
import p4 from '../assets/images/productpage/p4.png';
import p5 from '../assets/images/productpage/p5.png';
import p6 from '../assets/images/productpage/p6.png';
import p7 from '../assets/images/productpage/p7.png';
import p8 from '../assets/images/productpage/p8.png';

const productsList = [
    { id: 1, name: "Cold Plunge Sofia", img: p1 },
    { id: 2, name: "Black Cold Plunge\nSofia", img: p2 },
    { id: 3, name: "Ceramic\nBathtub", img: p3 },
    { id: 4, name: "Ice Bath\nChiller v1", img: p4 },
    { id: 5, name: "Ice Bath\nChiller v2", img: p5 },
    { id: 6, name: "Heating\nMattress", img: p6 },
    { id: 7, name: "S-101A Heating\nBlanket", img: p7 },
    { id: 8, name: "Bathroom\nMirror", img: p8 }
];

export default function ProductsPage() {
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
        <div className="product-page">
            <Header />

            {/* DIV 1 */}
            <div className="p-div1" style={{ backgroundImage: `url(${productBg})` }}>
                <div className="p-div1-overlay"></div>
                <div className="p-div1-content">
                    <h1 className="p-title-large reveal-on-scroll fade-in-up">Products</h1>
                    <p className="p-subtitle reveal-on-scroll fade-in-up delay-200">
                        Explore our wide range of high-quality bath essentials,
                        designed to elevate your comfort, relaxation, and everyday
                        self-care.
                    </p>
                </div>
            </div>

            {/* DIV 2 - Products List */}
            <div className="p-div2">
                {/* Search Bar */}
                <div className="p-search-container reveal-on-scroll fade-in-left">
                    <input type="text" placeholder="Search..." className="p-search-input" />
                    <button className="p-search-btn">
                        <Search size={18} color="#FFFFFF" strokeWidth={2.5} />
                    </button>
                </div>

                {/* Filters and Info */}
                <div className="p-controls reveal-on-scroll fade-in-up delay-100">
                    <div className="p-info">
                        <h4>Showing 1–10 item(s)</h4>
                        <p>Below is the list of our available PowerBath.</p>
                    </div>
                    <div className="p-filters">
                        <button className="p-filter-btn active">All</button>
                        <button className="p-filter-btn">Sofia</button>
                        <button className="p-filter-btn">Chiller</button>
                        <button className="p-filter-btn">Mattress</button>
                        <button className="p-filter-btn">Others</button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="p-grid">
                    {productsList.map((item, index) => {
                        const delayClass = `delay-${(index % 4) * 100 + 100}`;
                        return (
                        <div key={item.id} className={`p-card reveal-on-scroll fade-in-up ${delayClass}`}>
                            <div className="p-card-img-container">
                                <img src={item.img} alt={item.name.replace('\n', ' ')} className="p-card-img" />
                            </div>
                            <div className="p-card-title">
                                {item.name.split('\n').map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}<br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )})}
                </div>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
