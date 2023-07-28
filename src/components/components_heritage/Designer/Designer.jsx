import React from 'react';
import styles from './Designer.module.css'
import { heritage3 } from '../../../data';

export const Designer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <img src={heritage3} alt="" className={styles.image} />
                <div className={styles.mini_container}>
                    <h1 className={styles.title}>The Designer</h1>
                    <span className={styles.desc}>When approaching the design for O.A.D., Olmes Caretti had a clear vision in mind: "The Norwegian spirit, infused into premium designs that feel at home wherever you are in the world." </span>
                    <div className={styles.litle_container}>
                        <span className={styles.desc}>The legendary designer, and native of the town of Reggio Emilia in northern Italy, has a creative spirit that transcends borders and boundaries, clearly evident in his work throughout the five decades of his career. Working with internationally-acclaimed brands and his own label, Best Company, Carretti defined generations of European youth in the 1980s and 1990s.</span>
                        <span className={styles.desc}>Carretti’s history with Devold started in 1995 and resulted in some of the label's most iconic sweaters, including the classic Svalbard. His designs became timeless status symbols, thanks to an unwavering belief that styles should be beautiful and technical, combining premium materials and innovative production techniques to create pieces that look as good as they perform.</span>
                    </div>
                    <span className={styles.desc}>With O.A.D., Olmes Carretti revisits the allure of the Norwegian landscape, harnessing his passion for nature and its inspiring colours, with a collection that recalls the fjords and forests in every slip stitch and every ribbed border. </span>
                </div>
            </div>
        </div>
    );
}

