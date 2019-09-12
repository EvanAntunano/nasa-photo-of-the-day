import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div `
    width: 85%;
    text-align: center;
    margin-left: 115%;
    margin-top: -10%;
`;

const H1Wrap = styled.h1 `
    font-size: 2rem;
    color: white;
    padding-right: 2%;
    
`;
const Title = ( {title} ) => {
    return (
        <WrapperDiv>
        <H1Wrap>Nasa Photo of the Day:</H1Wrap>
        <H1Wrap>{title}</H1Wrap>
    </WrapperDiv>

    )
};

export default Title;