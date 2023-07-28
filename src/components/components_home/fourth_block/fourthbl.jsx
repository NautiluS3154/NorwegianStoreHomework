import React from 'react';
import styles from './fourthbl.module.css'

export const Fourthbl = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <p className={styles.desc_text}>Get 10% off on your next online order.</p>
                <p className={styles.desc_text}>Join our newsletter to receive updates on O.A.D. collections, events and new arrivals.</p>
                <a className={styles.signup_text} href="">SIGN UP</a>
                <div className={styles.mini_block}>
                    <input id="checkbox" type="checkbox" />
                    <p className={styles.check_text}>I accept the</p>
                    <p className={styles.check_text}>O.A.D. privacy policy.</p>
                </div>
            </div>
        </div>
    );
}


