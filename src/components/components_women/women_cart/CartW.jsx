import React from 'react';
import styles from './CartW.module.css'

export const CartSB = (props) => {
    const {image, title,price,desc,size} = props
    return (
        <div className={styles.cart}>
            <a href="">
            <img src={image} alt="" className={styles.img} />
            </a>
            <div className={styles.small_con}>
                <div className={styles.mini_con}>
                    <p className={styles.text_title}>{title}</p>
                    <span className={styles.text_price}>{price}</span>
                </div>
                <p className={styles.text_desc}>{desc}</p>
                <span className={styles.text_size}>{size}</span>
            </div>
        </div>
    );
}


