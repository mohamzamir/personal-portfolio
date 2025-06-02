import React from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from './Highlight';

// Parses plaintext into JSX
// new line produces new line

export type ParserProps = {
    text: string;
};

const Parser = (props: ParserProps) => (
    <ReactMarkdown
        components={{
            strong: ({ node, ...props }) => <Highlight>{props.children}</Highlight>,
        }}
    >
        {props.text}
    </ReactMarkdown>
);

export default Parser;