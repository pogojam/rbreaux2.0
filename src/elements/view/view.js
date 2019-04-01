import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import {PersonalView,ClientView,ProjectlView} from './'

const Container = posed(styled.div`
flex-basis:70%;
position:relative;
overflow-y:hidden;
margin-right:0;
background-color: #ffffff87;
@media(min-width:900px){
  opacity:${({isActive})=>isActive?'1':'0'};
  max-width:100%;
  min-height:100%;
  max-height:100vh;

}
@media(max-width:900px){
  max-height:${({isActive})=>isActive?'100%':'0px'};
}

transition: opacity .4s linear .4;

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
        {side === 'left' && <PersonalView/>}
        {side === 'center' && <ClientView/>}
        {side === 'right' && <ProjectlView refViewContainer={this.viewContainer} />}
      </Container>
    )
  }
}



