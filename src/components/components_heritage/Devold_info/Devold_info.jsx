import React from 'react';
import styles from './Devold_info.module.css'
import { heritage2 } from '../../../data';

export const DevoldInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <span className={styles.desc}>The recognition of Devold’s master craftsmanship was cemented when the great polar explorers of the time, such as Lincoln Ellsworth, chose Devold to outfit their expeditions. In the harsh tundra, the garments were put to the ultimate test, and the Devold brand emerged as an expert in outdoor performance gear.</span>
                    <span className={styles.desc}>Through passion, hard work and the relentless pursuit of innovation, the business continued to grow; and today, Devold remains one of Norway’s most respected brands, recognised for their unparalleled mastery of wool.</span>
                    <span className={styles.desc}>O.A.D. remains true to Ole Andreas Devold’s principles, building on the knowledge acquired through centuries of innovation and craftsmanship to create knits with a more refined and contemporary aesthetic. With a modern and sustainable mindset, O.A.D. finds itself at the intersection of quality and sustainability, ready to forge a brave new path into the future.</span>
                </div>
                <div className={styles.litle_container}>
                    <img src={heritage2} alt="" className={styles.image} />
                    <span className={styles.about}>Photo: National Library of Norway</span>
                </div>
            </div>  
        </div>
    );
}


