import React from 'react';
import styles from './thirdbl.module.css'
import { Link } from 'react-router-dom';
export const Thirdbl = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.bigblock1}>
                    <Link to='/women'><a className={styles.text_block} href="">Shop Women</a></Link>
                </div>
                <div className={styles.bigblock2}>
                    <Link to='/men'><a className={styles.text_block} href="">Shop Men</a></Link>
                </div>
            </div>
        </div>
    );
}


