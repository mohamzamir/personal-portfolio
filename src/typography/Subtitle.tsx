import color from '../constants/colors';
import { font, fontSize } from '../constants/fonts';
import React from 'react'


type AppProps = {
    children: React.ReactNode
}


const Subtitle = (props: AppProps) =>
    <span style={{
        fontFamily: font.TITLE,
        fontWeight: 'bold',
        fontSize: fontSize.SUBTITLE,
        color: color.MAIN,
        textTransform: 'uppercase',
    }}>
        {props.children}
    </span>

export default Subtitle