import React from "react"
import styled from 'styled-components';

const WrapperDiv = styled.div `
    width: 75%;
    height: auto;
    margin-left: 1%;
`;

const H1Wrap = styled.h1 `
    text-align: center;
    font-size: 2rem;
    padding-left: 45%;
    padding-top: 1%;
    padding-bottom: 1%;
    color: white;

`;

const Copyright = ( {cr} ) => {
    return (
        (cr === undefined ?
            <WrapperDiv>
                <H1Wrap>Copyright: NASA</H1Wrap>
            </WrapperDiv> :

            <WrapperDiv>
                <H1Wrap>Copyright: {cr} </H1Wrap>
            </WrapperDiv>
        )
    )
}

export default Copyright;