import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'


const Header = styled.h2`
color: ${({theme})=>theme.card.text};
padding-bottom: 1em;
border-bottom: 1px solid;



/* &:after{
    content:'';
    height:1px;
    width:3em;
    
} */

`

const HeaderContainer = posed(styled.div`

justify-self: start;
padding-left: 1.5em;
margin-top: .5em;

`)({

})



export default class SectionHeader extends Component {
    render() {
        const {main,sub} = this.props
    return (
      <HeaderContainer>
                <Header>{main}</Header>   
                <mata>{sub}</mata>
        </HeaderContainer>
    )
  }
}
