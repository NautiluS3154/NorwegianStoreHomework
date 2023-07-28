import React from 'react';
import { MenCol } from '../../components/components_collection/men_col/MenCol';
import { WomenCol } from '../../components/components_collection/women_col/WomenCol';

export const Collection = () => {
    return (
        <div className=''>
            <div className="">
                <MenCol />
                <WomenCol />
            </div>
        </div>
    );
}

