import React from 'react';

import styles from './Navbar.module.css'
import { logoMain, cart } from '../../data';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
       
        <nav className={styles.container}>
            <div className={styles.wrapp}>
               <Link to='/'> <a href="" className="logo">
                        <img src={logoMain} alt="logo" />
                    </a> </Link>
                    <div className={styles.box}>
                        <Link to='/women'><a href="" className={styles.services_link_mw}>Women</a></Link>
                        <Link to='/men'><a href="" className={styles.services_link_mw}>Men</a></Link>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.box}>
                            <Link to='/heritage'><a href="" className={styles.services_link}>Our Heritage</a></Link>
                            <Link to='/care'><a href="" className={styles.services_link}>Care</a></Link>
                            <Link to='/collection'><a href="" className={styles.services_link}>Collections</a></Link>
                            <Link to='/respons'><a href="" className={styles.services_link}>Responsibility</a></Link>
                        </div>
                        <div className={styles.language_box}>
                            <p className={styles.services_link_lch}>IE</p>
                            <span className={styles.services_link_lch}>/</span>
                            <p className={styles.services_link_lch}>ENG</p>
                        </div>
                        <a href="" className="">
                            <img src={cart} alt="" />
                        </a>
                    </div>
            </div>
        </nav>
        
    );
}


// {/* <div className={styles.box}>
// <Link to='/' className={styles.link}>Home</Link>
// <Link to='/about' className={styles.link}>About</Link>
// </div> */}