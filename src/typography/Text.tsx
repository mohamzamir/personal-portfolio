import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';
import React, { ReactNode } from 'react';

type TextProps = {
    children?: ReactNode;
};

const Text = ({ children }: TextProps) => (
    <span style={{
        fontFamily: font.BODY,
        fontSize: fontSize.BODY,
        color: color.MAIN,
    }}>
        {children}
    </span>
);

export default Text;
