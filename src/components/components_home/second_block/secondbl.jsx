import React from 'react';
import styles from './secondbl.module.css'
import { CartSB } from './Cart/CartSB';
import { imgman1, imgman2, imgwoman1, imgwoman2 } from '../../../data';
const information = [
    {
        id: 1,
        img: imgwoman1,
        title: "Nord",
        price: "500",
        desc: "Made Of 100% NORWEGIAN WOOL",
        size: "S M L XL",
    },
    {
        id: 2,
        img: imgwoman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 3,
        img: imgman1,
        title: "Ole No. 2",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "S M L XL",
    },
    {
        id: 4,
        img: imgman2,
        title: "Blaatrøie No. 4",
        price: "500",
        desc: "Made Of 100% NORWEGIAN WOOL CASHMERE LINING IN NECK",
        size: "S M L XL",
    },
]
export const Secondbl = (props) => {

    return (

        <div className={styles.container}>
           <div className={styles.wrapp}>
                <p className={styles.text_title}>O.A.D. Best Selling knitwear</p>
                    <div className={styles.cart_main}>
                        {information.map(info => (
                            <CartSB
                                key={info.id}
                                image={info.img}
                                title={info.title}
                                price={info.price}
                                desc={info.desc}
                                size={info.size}
                            />
                         ))}
                    </div>
                <span className={styles.stick}></span>
            </div>
        </div>
    );
}
