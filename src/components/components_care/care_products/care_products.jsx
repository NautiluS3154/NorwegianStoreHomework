import React from 'react';
import CareCard from '../care_card/care_card';
import styles from './care_products.module.css'
import { careimage1, careimage2, careimage3 } from '../../../data';

const information = [
    {
        id: 1,
        title: 'Cedar balls',
        price: '10',
        desc1: '15 CEDAR BALLS',
        desc2: '100% RED CEDAR WOOD',
        desc3: 'TO PREVENT MOTHS',
        img: careimage1,
    },
    {
        id: 2,
        title: 'Steamery Fabric Shaver',
        price: '70',
        desc1: 'AESTHETIC DESIGN AND HIGH FUNCTIONALITY',
        desc2: 'EASY TO CLEAN FROM FUZZ',
        desc3: 'SHAVING TIME: 2 HOURS',
        img: careimage2,
    },
    {
        id: 3,
        title: 'O.A.D. Dust bag',
        price: '15',
        desc1: 'ONE SIZE',
        desc2: 'FITS ONE O.A.D. GARMENT',
        desc3: '50X50CM',
        img: careimage3,
    },
    
]



const CareProducts = () => {
    return (
        <div className=''>
            <div className="">
                <div className={styles.care_card}>
                    {information.map(info => (
                        <CareCard 
                            key={info.id}
                            title={info.title}
                            price={info.price}
                            desc1={info.desc1}
                            desc2={info.desc2}
                            desc3={info.desc3}
                            image={info.img}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CareProducts;
