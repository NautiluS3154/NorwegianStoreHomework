import React from 'react';
import styles from './firstbl.module.css'
import { firstblImage } from '../../../data';
export const Firstbl = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <span className={styles.first_text}>FW22 collection</span>
                    <span className={styles.second_text}>An Endless Pursuit of Nature</span>
                    <p className={styles.third_text}>In 1853 Ole Andreas Devold embarked on his journey, and since then our wool has been formed in the roughest conditions. Today, we build on our tradition of mastering wool. Relying on our dedication to craftmanship, we develop the finest quality from the most robust material. Crafted to withstand storms and to comfort on late summer nights. With profound care for nature, we create knitwear that lasts, that can be passed on – a legacy for times to come.</p>
                </div>
            
                <img src={firstblImage} alt="" className={styles.image} />
            </div>
        </div>
    );
}


