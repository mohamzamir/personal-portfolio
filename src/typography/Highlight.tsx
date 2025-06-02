import { ReactNode } from 'react';
import color from '../constants/colors';

type HighlightProps = {
    children?: ReactNode;
};

const Highlight = ({ children }: HighlightProps) => (
    <span style={{
        color: color.HIGHLIGHT,
        fontWeight: 'bold',
    }}>
        {children}
    </span>
);

export default Highlight;