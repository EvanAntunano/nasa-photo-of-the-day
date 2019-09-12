import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div `
    width: 75%;
    margin-left: 135%;
`;

const H1Wrap = styled.h1 `
font-size: 2rem;
color: white;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    display: flex;
    margin-left: -2%;
`;

const Date = ( {date} ) => {
    
    return (
        <WrapperDiv>
            <H1Wrap>Today is {date} </H1Wrap>
        </WrapperDiv>
    )
};
export default Date;