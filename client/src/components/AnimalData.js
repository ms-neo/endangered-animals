import React,{Fragment,useState} from 'react'
import styled from 'styled-components'
import LangSwitch from './LangSwitch'
import Heading from './Heading'
import {device} from './device'


const Wrapper =styled.div`
background-color:transparent;
width:100%;
height:90vh;
display:flex;
align-items:center;
position:absolute;
top:50%;
transform: translateY(-50%);
overflow:hidden;
.content{
        padding:2vh 4vh;
        color:#fff;
        p{

font-size:15px;
        }
h1{
    font-size:1.6rem;
}
    }
.scoend{
    width:100%;
height:100%;

img {
object-fit:cover;
width:100%;
height:100%;

}
}
.one{
background:rgba(0,0,0,.4);
width:46%;
height:100%;

}
@media ${device.tablet}{
    flex-direction:column;
    height:120vh;
 
    .content{
        padding-top:4vh;
    }
    .scoend{
        order:1;
        z-index:10;
    }
    .one{
        order:2;
  display:flex;
    width:100%; 
    }

   }

   @media ${device.mobileL}{
    height:160vh;
    .content{
        margin-top:5vh;
        margin-bottom:8vh;
        p{

font-size:14px;
        }
h1{
    font-size:1.5rem;
}
    }
    .one{
  margin-top:-1vh;
}
   }
`

const ImageMap = styled.div `
.img{
    width:100%;
    object-fit:cover;
}
@media ${device.tablet}{
   width:60%;
}

`


const AnimalData = ({data, isLoading,current}) => {

    const [lang ,setLang]=useState(true);
  console.log(data.map(i=>i._id))
  console.log(data)
  console.log(current)
  

    const handleClick =()=>{
        console.log(lang)
        setLang(!lang)
        console.log(lang)
      }


    return (
        <Fragment>
          {isLoading? (<h3>loading...</h3> ): 
           data.map((item,index) => (
          current === index && (<div key={item._id} >
            <Wrapper >
            <div className="one">
                     <div className='content'>
                            <div onClick={handleClick} >
                            <LangSwitch lang={lang}/>
                            </div>
                                {lang ? ( <Fragment>
                                     <h1>{item.name.en}</h1>
                                     <p>{item.content.en}</p>
                                     <p><b>Population : </b>{item.population}</p>
                                            </Fragment> )
                                        : (
                                            <Fragment>
                                      <div style={{textAlign:"right"}}> 
                                          <h1>{item.name.ar}</h1>
                                          <p>{item.content.ar}</p>
                                          <p> العدد المتبقي : {item.population}</p>
                                      </div> 
                                  </Fragment> )}
                             <ImageMap>
                              <img className="img" src={item.mapImage}/>
                              </ImageMap>
                     </div>
                 </div>
                         
                            <div className="scoend">
                            <Heading />
                            <img key={item._id} src={item.image} alt='title'/>
                            </div>
                           
                        </Wrapper>
                        </div>
                        ))
            )}
           </Fragment>
    )
}

export default AnimalData
