import React, { Component } from 'react'
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid yellow;
    color: white;
    background: black;
    width: 18%;
    padding: 1%;
    font-size: 25px;
    
    &:active { outline: none }
    &:focus { outline: none }
    &:hover {
        cursor: pointer;
        color: black;
        background: white;
        border: 2px solid yellow;
    }
`;

export default ({ value, onClick }) => (
    <Button onClick={onClick}> {value} </Button>
)