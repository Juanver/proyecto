import React from 'react';

import styled from '@emotion/styled';

const Input = styled.input`
    display: block;
    width: -webkit-fill-available;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
const ContainerDate = styled.div`
    padding: 15px;
    background-color: #eeeeee;
    max-width: min-content;
    h3{
        width: fit-content;
    }

`;
const ContainerInput = styled.div`
    margin-bottom: 10px;
`;

const Date = ({data, setData}) => {    
    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return ( 
        <ContainerDate>
            <h3>¿Cuál es tu fecha de nacimiento?</h3>
            <ContainerInput>
                <Input 
                    type='text'
                    name='day'
                    placeholder='Día'
                    onChange={updateData}
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    type='text'
                    name='month'
                    placeholder='Mes'
                    onChange={updateData}
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    type='text'
                    name='year'
                    placeholder='Año'
                    onChange={updateData}
                />
            </ContainerInput>
        </ContainerDate>
     );
}
 
export default Date;