import React from 'react';
import styles from './Mblocks.module.css'
import { CartSB } from '../men_cart/CartW';
import { imgman1, imgman2 } from '../../../data';


const information = [
    {
        id: 1,
        img: imgman1,
        title: "Nord",
        price: "500",
        desc: "Made Of 100% NORWEGIAN WOOL",
        size: "S M L XL",
    },
    {
        id: 2,
        img: imgman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 3,
        img: imgman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 4,
        img: imgman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 5,
        img: imgman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 6,
        img: imgman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 7,
        img: imgman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 8,
        img: imgman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 9,
        img: imgman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 10,
        img: imgman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 11,
        img: imgman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 12,
        img: imgman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    
]



export const Mblocks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
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
        </div>
    );
}


