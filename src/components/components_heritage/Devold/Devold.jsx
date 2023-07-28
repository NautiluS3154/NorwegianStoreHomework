import React from 'react';
import styles from './Devold.module.css'
import { heritage1 } from '../../../data';
export const Devold = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <h1 className={styles.title}>
                    Heritage of Devold
                    </h1>
                        <span className={styles.desc}>For centuries, fishermen in the city of Ålesund, nestled amongst the islands and enveloped by the fjords, have set out to face the Norwegian Sea’s hazardous and unpredictable con</span>
                        <span className={styles.desc}>In 1853, galvanised by the spirit and resilience of this community, Devold of Norway was born. Ole Andreas Devold set out to create knitwear suitable for land and sea, pieces that would protect against the elements, keeping workers warm and dry. As one of the worlds leading merino outdoor brands, Devold of Norway continues its dedication to mastering wool.</span>
                        <span className={styles.desc}>Born out of the same heritage, O.A.D. builds on 170 years of craftsmanship and knitwear expertise, creating refined pieces for a classic, considered wardrobe.</span>
                        <span className={styles.links}>READ MORE ABOUT OUR OUTDOOR MERINO BRAND:</span>
                        <a href="" className={styles.links}>DEVOLD OF NORWAY</a>
                </div>
                <img src={heritage1} alt="" className={styles.image} />
            </div>
        </div>
    );
}


