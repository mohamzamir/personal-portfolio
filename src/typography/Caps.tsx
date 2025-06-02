import Text from './Text';
import styled from 'styled-components';
import Bold from './Bold';
import React from 'react';

const Capped = styled.span`
  text-transform: uppercase;
`;

type CapsProps = {
    children: React.ReactNode;
};

const Caps = ({ children }: CapsProps) => (
    <Capped>
        <Bold>
            <Text>
                {children}
            </Text>
        </Bold>
    </Capped>
);

export default Caps;