import React from 'react';
import styles from './Wool.module.css'
import { wool1 } from '../../../data';
export const Wool = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <img src={wool1} alt="" className={styles.image} />
                <div className={styles.mini_container}>
                    <h1 className={styles.title}>Norwegian Wool</h1>
                    <p className={styles.desc}>Wool is an essential part of our heritage. We take great pride in using Norwegian wool, renowned for its durability and ruggedness, as the foundation for our collections. Each spring and autumn, the wool is harvested from sheep in their natural habitat across the Norwegian countryside.</p>
                    <div className={styles.first_container}>
                        <p className={styles.desc}>Our continued commitment to quality has led us to choose wool from the autumn harvest, as the wool fibres are longer, producing a softer, less itchy garment. We use no treatments on the yarn, and our dyes meet REACH regulations.</p>
                        <div className={styles.second_container}>
                            <span className={styles.desc_link}>KNITWEAR IN 100% NORWEGIAN WOOL:</span>
                            <a href="" className={styles.desc_link}>BLAATRØIE NO.3</a>
                            <a href="" className={styles.desc_link}>BLAATRØIE NO.4</a>
                            <a href="" className={styles.desc_link}>NORD NO. 1</a>
                            <a href="" className={styles.desc_link}>NORD NO. 2</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


