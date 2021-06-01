import React, {Fragment} from 'react'
import styled from 'styled-components'
import img from './assets/sunda.jpg'
import {device} from './device'

const BackgorundImage = styled.img `
width:100%;
height:100%;
object-fit:cover;
filter:blur(5px);
@media ${device.tablet}{
  height:100%;
}
@media ${device.tablet}{
  height:100%;
}
`

const Backgorund = () => {
    return (
        <Fragment>
            <BackgorundImage src={img}/>
        </Fragment>
    )
}

export default Backgorund
