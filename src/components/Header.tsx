"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Nav Links - Left */}
        <nav className={styles.navLeft}>
          <Link href="#products" className={styles.navLink}>
            Products
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact Us
          </Link>
        </nav>

        {/* Logo - Center */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoContent}>
            <span className={styles.logoIcon}>
              {/* Wave/droplet icon */}
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.logoSvg}
              >
                <path
                  d="M20 4C20 4 8 16 8 24C8 30.627 13.373 36 20 36C26.627 36 32 30.627 32 24C32 16 20 4 20 4Z"
                  fill="url(#dropletGrad)"
                />
                <path
                  d="M12 26C13.5 24 16 23 18 24.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 26C19.5 24 22 23 24 24.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="dropletGrad"
                    x1="20"
                    y1="4"
                    x2="20"
                    y2="36"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4fc3f7" />
                    <stop offset="1" stopColor="#0d6efd" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className={styles.logoText}>
              Power<span className={styles.logoAccent}>bath</span>
            </span>
          </div>
        </Link>

        {/* Right - Search, Cart, Login */}
        <div className={styles.navRight}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Cart">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          <button className={styles.loginBtn}>Login</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen1 : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen2 : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen3 : styles.bar}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <Link href="#products" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
          Products
        </Link>
        <Link href="#contact" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>
        <button className={styles.mobilLoginBtn}>Login</button>
      </div>
    </header>
  );
}
