import React from 'react';
import styles from './Wblocks.module.css'
import { CartSB } from '../women_cart/CartW';
import { imgwoman1, imgwoman2 } from '../../../data';


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
        img: imgwoman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 4,
        img: imgwoman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 5,
        img: imgwoman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 6,
        img: imgwoman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 7,
        img: imgwoman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 8,
        img: imgwoman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 9,
        img: imgwoman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 10,
        img: imgwoman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 11,
        img: imgwoman1,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    {
        id: 12,
        img: imgwoman2,
        title: "Ole No. 1",
        price: "820",
        desc: "MADE OF 55% FINE MERINO 32% KID MOHAIR 13% SILK",
        size: "XS S M L",
    },
    
]



export const Wblocks = () => {
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


