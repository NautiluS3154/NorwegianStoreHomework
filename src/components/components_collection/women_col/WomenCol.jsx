import React from 'react';
import styles from './WomenCol.module.css'
import { Link } from 'react-router-dom';
export const WomenCol = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <Link to='/women'><a href="" className={styles.link_bg}>
                    <div className="">
                        <p className={styles.text}>Spring/Winter 23</p>
                        <h1 className={styles.title}>Women's Sweaters</h1>
                    </div>
                    <h1 className={styles.desc}>Our Second Collection</h1>
                </a></Link>
            </div>
        </div>
    );
}

