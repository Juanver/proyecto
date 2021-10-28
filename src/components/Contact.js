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
const ContainerContact = styled.div`
    padding: 15px;
    background-color: #eeeeee;
    h3{
        width: fit-content;
    }

`;
const ContainerInput = styled.div`
    margin-bottom: 10px;
`;

const Contact = ({data, setData}) => {

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return ( 
        <ContainerContact>
            <h3>Datos de contacto</h3>
            <ContainerInput>
                <Input 
                    type='email'
                    name='email'
                    placeholder='Correo Electrónico'
                    onChange={updateData}
                />
            </ContainerInput>
            <ContainerInput>
                <Input 
                    type='text'
                    name='phone'
                    placeholder='Teléfono celular'
                    onChange={updateData}
                />
            </ContainerInput>
        </ContainerContact>
    );
}
 
export default Contact;