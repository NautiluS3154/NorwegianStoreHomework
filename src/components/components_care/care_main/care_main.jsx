import React from 'react';
import styles from './CareMain.module.css'
export const CareMain = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <h3 className={styles.big_text}>
                    Care Products
                    </h3>
                    <p className={styles.small_p}>
                    Our care products will help to maintain high quality and make your garments last longer.                    </p>
                </div>
                <div className={styles.small_container}>
                    <span className={styles.small_text}>GO DIRECTLY TO</span>
                    <a href="" className={styles.big_link}>Care Guide</a>
                    <a href="" className={styles.big_link}>Repair Service</a>
                    <a href="" className={styles.big_link}>Repair Yarn</a>
                </div>
            </div>
        </div>
    );
}


