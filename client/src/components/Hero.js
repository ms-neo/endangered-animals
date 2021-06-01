import React,{useEffect,useState} from 'react'
import Background from "./Background"
import styled from 'styled-components'
import Content from './Content'
import axios from 'axios'
import {device} from './device'

const Container = styled.div`
height:99vh;
position:relative;
${'' /* background:red; */}
@media ${device.tablet}{
  min-height:130vh;
  overflow-x:hidden;
}
@media ${device.mobileL}{
  min-height:170vh;
  overflow-x:hidden;
}
`

const Hero = ()=> {

  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState();

     const getData = async ()=>{
         const getIt = await axios.get('/api/animals'
//           {headers:{
//          "Access-Control-Allow-Origin": "*",
//          mode: "cors",               
// }}
)
         setdata(getIt.data);
         setIsLoading(false)
       }
       
       useEffect(()=>{
         getData()
       },[])
 

    return (
        <Container>
      <Background/>
      <Content data={data} isLoading={isLoading} />
      <h1>Hellooooo</h1>
       </Container>
    )
}


export default Hero
