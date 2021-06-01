import React, { Fragment,useState} from 'react'
import styled from 'styled-components'
import ReactTocuhEvents from 'react-touch-events'
import {ImPlay3 } from 'react-icons/im'
import {IconContext} from 'react-icons'
import AnimalData from './AnimalData'
import {device} from './device'
  
const BtnBackground = styled.div`
background:rgba(0,0,0,.4);
height:50px;
position:absolute;
left:50%;
bottom:8vh;
border-radius:20px;
color:#fff;
z-index:1000;
@media ${device.tablet}{
  left:45%
}
@media ${device.mobileL}{
  left:38%
}
`
const Btncontainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 5px;
font-size:30px;


`


const Content = ({data,isLoading}) => {

    const [current ,setCurrent] =useState(0);
    // const [tap ,setTap] =useState();
    const length =data.length;
   
    const nextSlide = ()=>{
      console.log('test')
      setCurrent(current === length -1 ? 0 :current+1);
    }
    console.log(current)
  
    const prevSlide =()=>{
      setCurrent(current === 0 ? length -1 :current -1)
    }
      return (
          <Fragment>
            <BtnBackground>
             <Btncontainer>
              <IconContext.Provider  value={{style: {transform:'scaleX(-1)', marginRight:'25px',cursor:"pointer"}}}>
              <ImPlay3 onClick={prevSlide}/>
              </IconContext.Provider>
               <IconContext.Provider value={{ style: {cursor:"pointer" }}}>
               <ImPlay3 onClick={nextSlide} />
               </IconContext.Provider>
             </Btncontainer>
             </BtnBackground>
          <AnimalData  current={current}  data={data} isLoading={isLoading}/>
          </Fragment>
      )
  }
  
  export default Content