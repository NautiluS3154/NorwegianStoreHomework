import React from 'react';
import styles from './Produ.module.css'
import { respons1 } from '../../../data';
export const Produ = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <h1 className={styles.title}>Production</h1>
                    <p className={styles.desc}>As a conscious knitwear brand, we are responsible for minimising the carbon footprint of our production cycle. Building a sustainable supply chain at every step, from the factory to your wardrobe, is one of the ways we do so and is made possible by the close relationship we have with our production companies in Italy, Divina Mode and Point Tricot.</p>
                    <div className={styles.small_container}>
                        <p className={styles.desc}>Divina Mode is a family-run company located in Modena, an area noted as the seat of excellence for knitwear production. Divina Modes commitment to sustainability and their unparalleled expertise is one of the reasons we chose to produce our garments in Italy.</p>
                        <p className={styles.desc}>Point Tricot, another family-owned company, has been active in the textile industry since 1981. Their dedication has helped them achieve the highest environmental and social sustainability level, working with only the most discerning international brands.</p>
                    </div>
                    <p className={styles.desc}>Our shared philosophy and close relationships with both partners, built on transparency and trust, help ensure the highest quality for O.A.D. garments. Our team visits the factories quarterly to ensure an ethical and secure production process.</p>
                </div>
                <img src={respons1} alt="" className={styles.mimage} />
            </div>
        </div>
    );
}


