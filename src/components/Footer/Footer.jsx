import React from 'react';
import styles from './Footer.module.css'
import { footerlogo1, footerlogo2, logofooter } from '../../data';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <Link to='/'>
                    <a href="" className="">
                        <img src={logofooter} alt="" className="" />
                    </a></Link>
                <div className={styles.mini_container1}>
                    <div className={styles.mini_container1}>
                        <Link to='/men'><a href="" className={styles.mw_text}>Men</a></Link>
                        <Link to='/women'><a href="" className={styles.mw_text}>Women</a></Link>
                    </div>
                    <Link to='/heritage'><a href="" className={styles.fblock_text}>Our Heritage</a></Link>
                    <Link to='/collection'><a href="" className={styles.fblock_text}>Care</a></Link>
                    <a href="" className={styles.fblock_text}>Collections</a>
                    <a href="" className={styles.fblock_text}>Responsibility</a>
                </div>
                <div className={styles.mini_container1}>
                    <a href="" className={styles.sblock_text}>Stores and Showroom</a>
                    <a href="" className={styles.sblock_text}>Shipping & Delivery</a>
                    <a href="" className={styles.sblock_text}>Returns & Exhanges</a>
                    <a href="" className={styles.sblock_text}>Terms & Conditions</a>
                    <a href="" className={styles.sblock_text}>Privacy Policy</a>
                    <a href="" className={styles.sblock_text}>Cookies</a>
                    <a href="" className={styles.sblock_text}>Customer service</a>
                    <a href="" className={styles.sblock_text}>Devold of Norway</a>
                </div>
                <div className={styles.mini_container1}>
                  <div className="">
                    <a href="">
                    <p className={styles.sblock_text}>Newsletter</p>
                    </a>
                    <p className={styles.sblock_text1}>Collections, events and new arrivals</p>
                    <p className={styles.sblock_text1}>Get 10% off on your next online order.</p>
                  </div>
                  <div className={styles.litle_container}>
                    <input type="checkbox" name="" id="" />
                    <p className={styles.trblock_text}>I accept the</p>
                    <p className={styles.trblock_text}>O.A.D. Privacy Policy.</p>
                  </div>
                  <div className="">
                    <a href="" className="">
                        <img src={footerlogo1} alt="" className={styles.logo_img} />
                    </a>
                    <a href="" className="">
                        <img src={footerlogo2} alt="" className={styles.logo_img} />
                    </a>
                    </div>  
                </div>
            </div>            
        </div>
    );
}
