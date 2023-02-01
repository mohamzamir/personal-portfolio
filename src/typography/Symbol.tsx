import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';
import React from 'react'

type AppProps = {
    children: React.ReactNode
}


const Symbol = (props: AppProps) => (
    <span style={{
        fontFamily: font.BODY,
        fontSize: fontSize.BODY * 1,
        color: color.MAIN,
    }}>
        {props.children}
    </span>
)

export default Symbol