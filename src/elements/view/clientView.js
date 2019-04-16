import React, { Component } from 'react'
import SectionHeader from '../SectionHeader'
import styled,{keyframes} from 'styled-components'
import SVG from '../../blocks/projectView/SVG'
import data from '../../static/section.json'

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

        flex-direction: column;
        justify-content: center;
        padding: 3em;
        padding-left:5em;
        padding-right:5em;
        box-sizing: border-box;
`


const SectionContainer = styled.div`
display: flex;

    align-self: center;
    min-width: 100%;
    align-items: center;
    justify-content:center;
    flex-direction:column;
    height:100vh;
    /* height:27vh; */
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

const ImgContainer = styled.div`
          grid-template-columns: 1fr 1fr 1fr;
    width: 48%;
    display: grid;
    justify-items: center;
    background-color: #00000061;
    border-radius:30px;
    padding:3em;
`
const Img = styled.img`
  width:40px;
`


const FrontEndSkills = ['css','react','git','node','webpack','apollo']
const FrameWorks = ['meteor','gatsby','nextjs']
const BackEndSkills = ['firebase','mongoDB','express']





export default class ClientView extends Component {
  render() {
    return (
      <Container>
        <SectionHeader left main="Web/Productivity Solutions" sub="Contractor" />
          <SectionContainer>
              <SVG  type='monitor'/>
          <h1>FrontEnd</h1>
      <ImgContainer>
        {data.skills.map((skill)=>{
          if(FrontEndSkills.includes(skill.name)){
            return <Img src={skill.img} alt=""/>
          }
        })}          
      </ImgContainer>
          </SectionContainer>
          <SectionContainer>
          <SVG type="cloud" />
          <h1>BackEnd</h1>
      <ImgContainer>
        {data.skills.map((skill)=>{
          if(BackEndSkills.includes(skill.name)){
            return <Img src={skill.img} alt=""/>
          }
        })}          
      </ImgContainer>
          </SectionContainer>
      </Container>
    )
  }
}

//sds
