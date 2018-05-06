import React, { Component } from 'react'

import styled from 'styled-components';

import { Button } from '/imports/ui/components/Button';

const Form = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Input = styled.input`
    display: none;
`;

export default ({ value, onChange, onClick }) => (
    <Form>
        <Input 
            id="upload-input"
            type="file" 
            name="pic" 
            accept="image/*"
            multiple
            onChange={onChange} 
        />
        <Button value={value} onClick={onClick} />
    </Form>
)