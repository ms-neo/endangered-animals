import React from 'react'
import styled from 'styled-components';
import {device} from './device'

const LangContainer =styled.div`
color:#dcdcdc;
margin-top:4vh;
margin-bottom:5vh;
display:flex;
justify-content:start;
align-items:center;
width:100px;
height:40px;
font-weight:300;

&:hover{
    cursor:pointer;
}
.line{
width:2px;
height:25px;
background-color:#fff;
margin-right:10px
}
h3{
   font-weight:300; 
}
}
`

const LangSwitch = ({lang}) => {

    return (
        <LangContainer>
        <div className="line"></div>
        <h3>{lang ? "Arabic" : "English"}</h3>
        </LangContainer>
    )
}

export default LangSwitch
