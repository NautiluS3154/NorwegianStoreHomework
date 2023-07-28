import React from 'react';
import styles from './Mblockf.module.css'
export const Mblockf = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <h3 className={styles.big_text}>
                        Menswear
                    </h3>
                    <p className={styles.small_p}>
                        We create knitwear for times to come. Our collection includes soft everyday knits, classic crew and zip-neck knits and accessories. Designed for a perfect men's fit that can be styled unisex.                    </p>
                </div>
                <div className={styles.small_container}>
                    <span className={styles.small_text}>Link</span>
                    <a href="" className={styles.big_link}>New Arrivals</a>
                    <a href="" className={styles.big_link}>Knitwear</a>
                    <a href="" className={styles.big_link}>Accessories</a>
                </div>
            </div>
        </div>
    );
}


