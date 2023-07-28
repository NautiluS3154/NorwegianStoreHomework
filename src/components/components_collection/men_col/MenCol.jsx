import React from 'react';
import styles from './MenCol.module.css'
import { Link } from 'react-router-dom';
export const MenCol = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <Link to='/men'><a href="" className={styles.link_bg}>
                    <div className="">
                        <p className={styles.text}>Spring/Winter 23</p>
                        <h1 className={styles.title}>Men's Sweaters</h1>
                    </div>
                    <h1 className={styles.desc}>Our First Collection</h1>
                </a></Link>
            </div>
        </div>
    );
}

