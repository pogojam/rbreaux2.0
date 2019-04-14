import React, { Component } from 'react'
import SectionHeader from '../SectionHeader'
import styled,{keyframes} from 'styled-components'
import SVG from '../../blocks/projectView/SVG'

const enterAnimationLine = keyframes`
    from{
      transform: skewY(3deg);
    }to{
      transform: skewY(0deg);
    }
`


const Container = styled.div`
        display:flex;
        text-align:center;
        height:100vh;
        flex-direction: column;
        justify-content: center;
        padding: 3em;
        padding-left:5em;
        padding-right:5em;
        box-sizing: border-box;
`

const SvgContainer = styled.div`
    align-self: center;
    min-width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:27vh;
`

const ButtonsContainer = styled.div`
position:relative;
display:flex;
justify-content: space-around;
align-items: center;
height: 19vh;

&::after{
    content: '';
    height: 1px;
    position: absolute;
    background: black;
    top: 0;
    width: 87%;
    transform-origin: left;
    animation:${enterAnimationLine} .5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 3s   forwards;
    will-change:transform;
    transform: skewY(3deg);
}

`

const Button = styled.button`
      flex-basis: 100%;
      height:10vh;
      border:none;
      background:none;
      
    :focus{
      outline:none;
    }

`





export default class ClientView extends Component {
  render() {
    return (
      <Container>
        <SectionHeader left main="Web/Productivity Solutions" sub="Contractor" />
          <SvgContainer>
              <SVG  type='monitor'/>
              <SVG  type='iphone'/>
              <SVG  type='robot'/>
          </SvgContainer>
          <ButtonsContainer>
              <Button>
                Desktop
              </Button>
              <Button>
                Mobile
              </Button>
              <Button>
                Bot
              </Button>
          </ButtonsContainer>
      </Container>
    )
  }
}

//sds
