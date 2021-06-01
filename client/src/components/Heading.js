import React from 'react'
import styled from 'styled-components'
import {device} from './device'

const H1 =styled.h1`
text-align:center;
font-size:30px;
color:#000;
z-index:1000;
@media ${device.tablet}{
  font-size:25px;
  margin-left:-20px
}
`
const HeadingBg = styled.div`
background:rgba(255,255,255,1);
width:100%;
height:60px; 
display:flex;
justify-content:center;
align-items:center;
z-index:100;
`

function Heading() {
    return (
        <div>
        <HeadingBg>
        <H1>Endengerd Animals</H1>
        </HeadingBg>
        </div>
    )
}

export default Heading
