import React, { Component,Fragment } from 'react'
import styled,{keyframes} from 'styled-components'
import Nav from '../Nav'

// const downAnimation = keyframes`
//     from{
//         transform:translateX(10px) rotate(135deg);
//         opacity:0;
//     }to{
//         transform:translateX(-10px) rotate(135deg);
//         opacity:.6;
//     }
// `


const MainContainer = styled.div`
display:flex;
width:calc(100vw/3);

@media(max-width:900px){
  width: ${({isActive})=>isActive?'100%':'calc(100vw/3)'};
  height: ${({isActive})=>isActive?'100%':'100vh'};
};

flex-basis:${({isActive})=>isActive?'20%':'100%'};

`

const BackArrow = styled.div`

@media(max-width:900px){
right:0;
}


border: solid 1px ${({shade})=>shade};
  border-radius: 2px;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 3px;
  width: 1em;
  height: 1em;
  position: absolute;
  top: calc(50vh+50%);
  right: 50px;
  transform: rotate(135deg);
  opacity:${({isActive})=>isActive?'1':'0'};
  transition:transform .4s,${({isActive})=>isActive?'opacity .4s 1.8s':'opacity .2s'};
  will-change:transform opacity;
`

const Container = styled.div`

transform:${({isActive})=>isActive?'translateX(-100%)':'translateX(-50%)'};

z-index:1;
display: flex;
top:0;
text-align: center;
color:${({shade})=>{shade}};  
/* flex-basis:100%; */
width:calc(100vw/3);
height: 100%;
flex-direction: column;
justify-content: center;
transition:transform 1.4s ;
will-change:transform ;




  ${BackArrow}{
      transform:rotate(135deg) scale(1.1);
  }
}

`






const Header = styled.h1`
cursor:pointer;
transform:translateX(50%);
font-family: 'Roboto Condensed', sans-serif;
color: #2f33339c;
text-shadow: 0px 0px 3px rgba(242,22,22,1);
font-size:3.2em;
opacity:${({isActive})=>isActive?'0':'.4'};

transition: transform .3s , opacity .3s;
will-change:opacity transform;
&:after{
    content: '';  
    position: absolute;
    left: 50%;
    top:130%;
    transform: translateX(-50%);
    background-color: white;
    min-width: 0%;
    height: 1px;
  &:before{
    
  }

  }

`





export default class Title extends Component {
    render() {
        const {isActive,name,side,handleSectionChange} = this.props
    return (
        <Container  {...this.props}  >
          <Nav {...this.props} />
          {this.props.children}
          <Header onClick={()=> handleSectionChange(side)} className="Title-Header" {...this.props}>
      {name}
      </Header>
      <BackArrow isActive={isActive} />
        </Container>
    )
  }
}
