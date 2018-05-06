import React, { Component } from 'react'

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const Ul = styled.ul`
    list-style: none;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 0;
`;

const Li = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1% 0 1% 0;
`;

const FileName = styled.div`
    border: 1px solid yellow;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    padding-left: 3%;
`;

const Extension = styled.div`
    border: 1px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    text-transform: uppercase;
`;

const Progress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    text-transform: uppercase;
    width: 40%;
`;

const Button = styled.button`
    border: 1px solid yellow;
    color: red;
    background: black;
    width: 100%;
    font-size: 20px;
    
    &:active { outline: none }
    &:focus { outline: none }
    &:hover {
        cursor: pointer;
        color: black;
        background: RED;
    }
`;

export default ({ files, onRefresh }) => (
    <Wrapper>
        <Button onClick={onRefresh}> RELOAD </Button>
        <Ul>
            {
                files.map(file => (
                    <Li key={file.name}> 
                        <FileName> {file.name.split('.')[0]} </FileName>
                        <Extension> {file.name.split('.')[1]} </Extension>
                        <Progress> {file.progress || '...'} </Progress>
                    </Li>
                ))
            }
        </Ul>
    </Wrapper>
)