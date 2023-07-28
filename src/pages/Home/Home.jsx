import React from 'react';
import { Firstbl } from '../../components/components_home/first_block/firstbl';
import { Secondbl } from '../../components/components_home/second_block/secondbl';
import { Thirdbl } from '../../components/components_home/third_block/thirdbl';
import { Fourthbl } from '../../components/components_home/fourth_block/fourthbl';
import { Fifthbl } from '../../components/components_home/fifth_block/fifthbl';




export const Home = () => {
    return (
        <div className='Home'>
           <Firstbl /> 
            <Secondbl />
            <Thirdbl />
            <Fourthbl />
            <Fifthbl />
        </div>
    );
}


