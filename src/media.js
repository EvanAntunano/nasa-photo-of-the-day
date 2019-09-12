import React from "react";
import styled from 'styled-components';
const ImgWrap = styled.img `
    max-width: 100%;
    max-height: auto;
    padding: 5%;
`;




const Media = ( {type, url} ) => {

return (
    (type === 'image' ?
    <ImgWrap src={url} className = "img"/> :
    <iframe id ="inlineFrameExample"
            title = "InlineFrame"
            width = "100%"
            height ="100%"
            src = {url}>
    </iframe> 



    )
)    

}

export default Media;