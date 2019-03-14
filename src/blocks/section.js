import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

//sdd

const Container = posed(styled.div`

/* Mobile */

@media (max-width:800px){
  background-size:100% !important;

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

};
}

/* Desktop */

cursor: pointer;
background-image:url(${({splashImg})=>splashImg});
background-size: auto 100%;
background-repeat: no-repeat;

/* background-attachment: fixed; */

will-change:auto;

transition: all .8s cubic-bezier(0.075, 0.82, 0.165, 1);
overflow:none;

background-position:${({activeSection,side})=>{
    
  activeSection === side && 'left !important'}};



background-position:${({side})=> {switch(side){
  case 'left':
  return ''
  break;
  case 'center':
  return 'center'
  break;
  case 'right':
  return 'right'
  break;
}}
};
flex-grow:1;

overflow:hidden;

&:hover{
  flex-grow:1.3;
  
  h1:after{
    min-width: 80%;
  }

}

&:before{
  content: "";
  display:block;
  width: 100%;
  height: 100%;
  background:${({overlay})=>overlay};
}

&:after{
  content:url("https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png");
  position:absolute;
  top:0;
  opacity:0;
}

`)({
  // Animations
  sectionIn:{
    
  },
  exit:{
    
  },
  enter:{

  }
})




const Title = posed(styled.h1`

position: relative;
top: -21vh;
text-align: center;
color:white;


&:after{
  transition:all .9s cubic-bezier(0.075, 0.82, 0.165, 1);
    content: '';
    position: absolute;
    left: 50%;
    top:130%;
    transform: translateX(-50%);
    background-color: white;
    min-width: 0%;
    height: 1px;

  }
`)({
  // Animations

})

const Icon = posed(styled.img`

position: relative;
top: -100vh;

`)({

})




export default class Section extends Component {
  
  render() {
      const {name,handleSectionChange,side} = this.props

      
    return (
      <Container onClick={()=> handleSectionChange(side)} {...this.props} >
        {/* <Icon src='https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png' /> */}
      <Title>{name}</Title>
      </Container>
    )
  }
}

