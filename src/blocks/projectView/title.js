import React, { Component } from 'react'
import styled,{keyframes} from 'styled-components'

const downAnimation = keyframes`
    from{
        transform:translateX(10px) rotate(135deg);
        opacity:0;
    }to{
        transform:translateX(-10px) rotate(135deg);
        opacity:.6;
    }

`


const BackArrow = styled.div`
opacity:0;
border: solid 1px white;
  border-radius: 2px;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  width: 1em;
  height: 1em;
  position: absolute;
    left: 40px;
    top: calc(50vh+50%);
    transform:translateX(10px) rotate(135deg);
`

const Container = styled.div`

@media(max-width:900px){
  width: ${({isActive})=>isActive?'100%':'calc(100vw/3)'};
  height: ${({isActive})=>isActive?'100%':'100vh'};
}

cursor: pointer;
position: relative;
top:0;
text-align: center;
color:white;  
width: calc(100vw/3);
height: 100%;
display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover{
  
  ${BackArrow}{
    animation:${downAnimation} 1.5s infinite;    
  }
}

`


const Header = styled.h1`


&:after{
  transition: min-width .9s cubic-bezier(0.455, 0.03, 0.515, 0.955);
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


`




export default class Title extends Component {
    render() {
        const {isActive,name,handleSectionChange,side} = this.props
    return (
        <Container {...this.props} onClick={()=> handleSectionChange(side)} >
          {this.props.children}
          <Header {...this.props}>
      {isActive?'Home':name}
      {isActive&&<BackArrow/>}
      </Header>
        </Container>
    )
  }
}
