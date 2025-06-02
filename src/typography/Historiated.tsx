import { fontSize } from '../constants/fonts';
import Title from './Title';
import React from 'react';

type HistoriatedProps = {
    children: React.ReactNode;
};

const Historiated = ({ children }: HistoriatedProps) => (
    <Title>
        <span style={{
            fontSize: fontSize.HISTORIATED,
        }}>
            {children}
        </span>
    </Title>
);
export default Historiated;