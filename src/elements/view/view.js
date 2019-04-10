import React, { Component } from 'react'
import styled,{css} from 'styled-components'
import posed from 'react-pose'
import {PersonalView,ClientView,ProjectlView} from './'

const activeView = css`
opacity:1;
transition:opacity 1s 1s;
`
const unactiveView = css`
opacity:0;
transition:opacity 1s;
`

const Container = posed(styled.div`

${({isActive})=>{
  if(isActive){
    return activeView
  }
  else{
    return unactiveView
  }
  
}}




position:relative;
margin-right:0;
background-color:white;
color:${({theme})=>theme.card.color};

@media(min-width:900px){
  flex-basis:70%;
}

@media(max-width:900px){
      height:100%;
}

overflow-x:hidden;
`)({
    exit:{
      
    },
    enter:{

    
    }
})
export default class View extends Component {
    
  render() {

    const {side} = this.props

    
    return (
      <Container ref={(e)=>this.viewContainer = e } {...this.props}  >
        {side === 'left' && <PersonalView {...this.props} />}
        {side === 'center' && <ClientView {...this.props} />}
        {side === 'right' && <ProjectlView {...this.props} refViewContainer={this.viewContainer} />}
      </Container>
    )
  }
}



