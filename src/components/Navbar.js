"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setIsNavOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Dev-Hire</Link>
      </div>

      <div className={styles.controls}>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {theme === 'light' ? 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M600-640 480-760l120-120 120 120-120 120Zm200 120-80-80 80-80 80 80-80 80ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 99 11 193.5T520-521q71 71 165.5 100T879-410q-26 144-138 237T483-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305Z"/></svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>
          }
        </button>

        <div className={styles.hamburger} onClick={() => setIsNavOpen(!isNavOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
      </div>

      <ul className={`${styles.navLinks} ${isNavOpen ? styles.open : ''}`}>
        <li><Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link></li>
        <li><Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link></li>
        <li className={styles.services}>
          <a href="#" onClick={toggleServices} className={`${styles.servicesButton} ${pathname.startsWith("/services") ? styles.active : ""}`}>
            Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <ul className={`${styles.submenu} ${isServicesOpen ? styles.open : ''}`}>
            <li><Link href="/services/web-development" className={pathname === "/services/web-development" ? styles.active : ""}>Web Development</Link></li>
            <li><Link href="/services/seo" className={pathname === "/services/seo" ? styles.active : ""}>SEO</Link></li>
            <li><Link href="/services/consulting" className={pathname === "/services/consulting" ? styles.active : ""}>Consulting</Link></li>
          </ul>
        </li>
        <li><Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;