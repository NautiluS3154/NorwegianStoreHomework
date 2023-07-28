import React from 'react';
import { Devold } from '../../components/components_heritage/Devold/Devold';
import { DevoldInfo } from '../../components/components_heritage/Devold_info/Devold_info';
import { Designer } from '../../components/components_heritage/Designer/Designer';

export const Heritage = () => {
    return (
        <div>
            <Devold />
            <DevoldInfo />
            <Designer />
        </div>
    );
}


