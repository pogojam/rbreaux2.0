import React, { Component } from 'react'
import styled,{css} from 'styled-components'
import posed from 'react-pose'

const headerRigthCSS = css`
justify-self: end;
text-align:right;
right: 0;
padding-right: 1.5em;
`
const headerLeftCSS = css`
justify-self: end;
text-align:left;
left:0;
padding-left: 1.5em;
`

const Header = styled.h2`
    font-size: 2.5em;
position:relative;
color: ${({theme})=>theme.card.text};
width:250px;
margin-bottom:0px;

@media(max-width:900px){
    font-size:initial; 
}

&:after{
    content: '';
    height: 1px;
    background: black;
    width: 144px;
    position: absolute;
    bottom: 0;
    left: 0;
}

`

const HeaderContainer = posed(styled.div`
    z-index:1;
    

    position: fixed;
    top:0;
    transition:all .3s;

    @media(max-width:900px){
        right:0;
        width: calc(100% - 100px);
        padding-left:5px;
    }

    @media(min-width:900px){
        ${({left})=>left&& headerLeftCSS}
    ${({right})=>right&& headerRigthCSS}
    }

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
      <HeaderContainer {...this.props} className={className}>
                <Header>{main}</Header>   
                <SubHeader>{sub}</SubHeader>
        </HeaderContainer>
    )
  }
}
