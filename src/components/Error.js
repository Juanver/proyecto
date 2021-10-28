import React from 'react';
import styled from '@emotion/styled';

const Parrafo = styled.p`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
`

const Error = ({mensaje}) => {
    return ( 
        <Parrafo>{mensaje}</Parrafo>
     );
}
 
export default Error;