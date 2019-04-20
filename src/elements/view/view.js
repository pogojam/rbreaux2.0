import React, { Component,Fragment } from 'react'
import styled,{css} from 'styled-components'
import {PersonalView,ClientView,ProjectlView} from './'
import { CSSTransitionGroup } from 'react-transition-group'


const Container = styled.div`

&.view-enter{
  flex-basis:0;
}

&.view-leave{
  opacity:0;
  transition:opacity .4s;
}

position: absolute;
width:100vw;

left: 0;
top: 0;
height: 100%;
color:${({theme})=>theme.card.color};
overflow-x:hidden;
box-sizing: border-box;
flex-basis:100%;
transition:opacity .4s .8s;
will-change:opacity;

`

export default class View extends Component {
    
  render() {
    const {side,isActive} = this.props
    
    return (
      <CSSTransitionGroup
      transitionName="view"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1100}
          component={Fragment}
      >{
      isActive?<Container key={side} ref={(e)=>this.viewContainer = e } {...this.props}  >
        {side === 'left' && <PersonalView {...this.props} />}
        {side === 'center' && <ClientView {...this.props} />}
        {side === 'right' && <ProjectlView {...this.props} refViewContainer={this.viewContainer} />}
      </Container>:null
      }
      </CSSTransitionGroup>
    )
  }
}



