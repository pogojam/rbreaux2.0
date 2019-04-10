import React, { Component,Fragment } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import View from '../elements/view/view'
import anime from 'animejs'

const Container = posed(styled.div`
/* Mobile */

@media (max-width:800px){
  background-size:100% !important;
/* 
  background-position:${({side})=> {switch(side){
    case 'left':
    return 'top'
    break;
    case 'center':
    return ''
    break;
    case 'bottom':
    return ''
    break;
  }}

}; */
}

/* Desktop */



cursor: pointer;
background-image:url(${({splashImg})=>splashImg});
background-size: auto 100%;
background-repeat: no-repeat;


width:calc(100vw/3);

flex-basis:30%;

/* background-attachment: fixed; */

will-change:auto;
overflow:none;
position:relative;


overflow:hidden;

&:hover{
  /* flex-grow:1.3;
  
  h1:after{
    min-width: 80%;
  } */

}

&:before{
  content: "";
  display:block;
  position:absolute;
  top:0;

  width: 100%;
  height: 100%;
  background:${({overlay})=>overlay};
}



`)({
  
})



const Title = posed(styled.h1`

position: relative;
    top: 50vh;
text-align: center;
color:white;  


&:after{
  transition: min-width .9s cubic-bezier(0.075, 0.82, 0.165, 1);
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


`)({
  // Animations


})


const Icon = posed(styled.img`
    position: absolute;
    right: 0;
    opacity:${({isActive})=>isActive?1:0};
`)({

})


const SecondaryContainer = styled.div`
    width:100vh;
    display:none;
`


export default class Section extends Component {


componentDidEnter(){

  
}


  
  render() {
      const {name,activeSection,handleSectionChange,side} = this.props
      const isActive = activeSection === side


      

    return (
      <Container  onClick={()=> handleSectionChange(side)}  isActive={isActive} {...this.props}  ref={(e)=> this.container = e }  >
        <SecondaryContainer>
        {/* <Icon src='https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png' /> */}
        <Icon isActive={isActive} src="https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png" />
      <Title left >{isActive?'Home':name}</Title>
     <View isActive={isActive} {...this.props} />
        </SecondaryContainer>
      </Container>
    )
  }
}

