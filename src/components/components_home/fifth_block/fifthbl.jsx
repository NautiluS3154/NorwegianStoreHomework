import React from 'react';
import styles from './fifthbl.module.css'
import { Link } from 'react-router-dom';
export const Fifthbl = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <p className={styles.title}>A Legacy of Wool Since 1853</p>
                <p className={styles.desc}>Using our knowledge, rooted in our Devold heritage, we continue the tradition of mastering wool.</p>
                <div className={styles.mini_block}>
                    <Link to='/heritage'><a href="" className={styles.block_link}>Read more:</a></Link>
                    <Link to='/heritage'><a href="" className={styles.block_link}>Our Heritage</a></Link>
                    <Link to='/heritage'> <a href="" className={styles.block_link}>Devold of Norway</a></Link>
                </div>

            </div>
        </div>
    );
}

                   
