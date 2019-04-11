import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'


const Header = styled.h2`



position:relative;
color: ${({theme})=>theme.card.text};
width:250px;
margin-bottom:0px;

&:after{
    content: '';
    height: 1px;
    background: black;
    width: 144px;
    position: absolute;
    bottom: 0;
    right: 0;


}

/* &:after{
    content:'';
    height:1px;
    width:3em;
    
} */

`

const HeaderContainer = posed(styled.div`



    text-align:right;
    justify-self: end;
    padding-right: 1.5em;
    margin-top: .5em;
    position: absolute;
    right: 0;
    top:0;


`)({

})


const SubHeader = styled.h3`
        margin-top:0px;
        font-size:1em;
`

export default class SectionHeader extends Component {
    render() {
        const {main,sub,className} = this.props
    return (
      <HeaderContainer className={className}>
                <Header>{main}</Header>   
                <SubHeader>{sub}</SubHeader>
        </HeaderContainer>
    )
  }
}
