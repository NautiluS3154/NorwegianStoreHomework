import React from 'react';
import styles from './Wblockf.module.css'
export const Wblockf = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <h3 className={styles.big_text}>
                        Womenswear
                    </h3>
                    <p className={styles.small_p}>
                        We create knitwear for times to come. Our collection includes soft everyday knits, crew- and turtle neck knits, classic rib and accessories. All designed with a perfect women’s fit, with additional unisex styles.
                    </p>
                </div>
                <div className={styles.small_container}>
                    <span className={styles.small_text}>GO DIRECTLY TO</span>
                    <a href="" className={styles.big_link}>New Arrivals</a>
                    <a href="" className={styles.big_link}>Knitwear</a>
                    <a href="" className={styles.big_link}>Accessories</a>
                </div>
            </div>
        </div>
    );
}


