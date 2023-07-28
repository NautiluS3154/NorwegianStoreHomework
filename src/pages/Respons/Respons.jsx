import React from 'react';
import { Produ } from '../../components/components_respons/Produ/Produ';
import { Natural } from '../../components/components_respons/Natural/Natural';
import { Wool } from '../../components/components_respons/Wool/Wool';

export const Respons = () => {
    return (
        <div className=''>
            <div className="">
                <Produ />
                <Natural />
                <Wool />
            </div>
        </div>
    );
}

