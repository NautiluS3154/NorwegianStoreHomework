import React from 'react';
import styles from './care_card.module.css'

const CareCard = (props) => {
    const {title, price , desc1, desc2, desc3, image} = props
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <div className={styles.nano_container}>
                        <h4 className={styles.title}>{title}</h4>
                        <h4 className={styles.title}>{price} EUR</h4>
                    </div>
                    <div className={styles.piko_container}>
                        <span className={styles.desc}>- {desc1}</span>
                        <span className={styles.desc}>- {desc2}</span>
                        <span className={styles.desc}>- {desc3}</span>
                    </div>
                </div>
                <img src={image} alt="" className={styles.image} />
            </div>
        </div>
    );
}

export default CareCard;
