import React, { Component,Fragment } from 'react'
import styled,{keyframes} from 'styled-components'

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

transform:${({isActive})=>isActive?'translateX(-70%)':'translateX(0%)'};

cursor: pointer;
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

&::before{

  /* @media(max-width:900px){
      opacity:.75;
  } */

  content: "";
  display:block;
  position:absolute;
  top:0;
  width: 100%;
  height: 100%;
  background:${({overlay})=>overlay};
  opacity:${({isActive})=>isActive?'0':'.75'};
  transition:${({isActive})=>isActive?'opacity .1s':'opacity .5s 1.4s'};
  will-change:opacity;
  z-index: -1;
}

    &:hover{
      
  ${BackArrow}{
      transform:rotate(135deg) scale(1.1);
  }
}

`


const Header = styled.h1`


&:after{
  transition: min-width .9s cubic-bezier(0.455, 0.03, 0.515, 0.955);
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
        const {isActive,name,handleSectionChange,side} = this.props
    return (
        <Container  {...this.props} onClick={()=> handleSectionChange(side)} >
          {this.props.children}
          <Header {...this.props}>
      {isActive?'':name}
      </Header>
      <BackArrow isActive={isActive} />
        </Container>
    )
  }
}
