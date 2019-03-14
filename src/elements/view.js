import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const Container = posed(styled.div`
flex-basis:70%;
min-height:100%;
`)({
    exit:{
        opacity:0
    }
})

export default class View extends Component {
  render() {
    return (
      <Container>
        sdfjskfdljkfdlsd
      </Container>
    )
  }
}

