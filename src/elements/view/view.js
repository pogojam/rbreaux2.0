import React, { Component } from 'react'
import styled,{css} from 'styled-components'

import {PersonalView,ClientView,ProjectlView} from './'

const activeView = css`
opacity:1;
transition:opacity 1s 1s;
`
const unactiveView = css`
opacity:0;
transition:opacity 1s;
`

const Container =styled.div`

${({isActive})=>{
  if(isActive){
    return activeView
  }
  else{
    return unactiveView
  }
  
}}

&::before{
  content:'';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  background-image:url(${({splashImg})=>splashImg});
background-size: 100vh 100vw;
background-attachment: fixed;
background-size: cover;

transform:${({scale})=>scale?'scale(1.1)':'scale(1)'};
transition:transform 3s linear;
will-change:transform;
filter: blur(10px);
}

position:relative;
margin-right:0;
color:${({theme})=>theme.card.color};

@media(min-width:900px){
  flex-basis:70%;
}

@media(max-width:900px){
      height:100%;
}

overflow-x:hidden;
`

export default class View extends Component {
    
  render() {
    const {side} = this.props
    
    return (
      <Container   ref={(e)=>this.viewContainer = e } {...this.props}  >
        {side === 'left' && <PersonalView {...this.props} />}
        {side === 'center' && <ClientView {...this.props} />}
        {side === 'right' && <ProjectlView {...this.props} refViewContainer={this.viewContainer} />}
      </Container>
    )
  }
}



