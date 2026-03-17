"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const bubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate bubbles on mount
    const el = bubblesRef.current;
    if (!el) return;
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Background overlay */}
      <div className={styles.overlay}></div>

      {/* Animated Bubbles */}
      <div className={styles.bubbles} ref={bubblesRef} aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`${styles.bubble} ${styles[`bubble${i + 1}`]}`}></span>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.tagline}>THE ULTIMATE COLD BATH THERAPY</p>

        <h1 className={styles.headline}>
          <span className={styles.headlineLine1}>REVITALIZE YOUR BODY</span>
          <span className={styles.headlineLine2}>RECLAIM ENERGY</span>
        </h1>

        <Link href="#products" className={styles.ctaBtn}>
          SHOP NOW
        </Link>
      </div>

      {/* Bottom ticker / marquee bar */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className={styles.tickerItem}>
              POWERBATH &nbsp;&nbsp;•&nbsp;&nbsp; THE ULTIMATE COLD BATH THERAPY &nbsp;&nbsp;•&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
