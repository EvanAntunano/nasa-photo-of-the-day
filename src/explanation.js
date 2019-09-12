import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div `
    width: 75%;
    height: auto;
    margin-left: 85%;
`;

const H2Wrap = styled.h2 `
    font-size: 2rem;
    color: white;
    padding-left: 5%;
    padding-right: 1%;
    padding-bottom: 1%;
    margin: auto;
    width: 200%;
`;

const Explanation = ( {explanation} ) => {
    return (
        <WrapperDiv>
        <H2Wrap>{explanation}</H2Wrap>
    </WrapperDiv>
    )
};

export default Explanation;