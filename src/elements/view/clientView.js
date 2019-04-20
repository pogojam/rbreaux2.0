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
        animation-delay:2s;
`


const SectionContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    display: flex;
    align-self: center;
    min-width: 100%;
    align-items: center;
    justify-content:center;
    flex-direction:row;
    height:100vh;
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
const ImgContainer = styled.div`
          grid-template-columns: 1fr 1fr 1fr;
    width: 48%;
    min-height:9vh;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: #808d98e0;
    border-radius:6px;
    padding:2em;
`

const SubContainer = styled.div`
display:flex;
flex-direction:column;
flex-basis:100%;
align-items: center;
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


const Img = styled.img`
  width:40px;
`


const FrontEndSkills = ['css','react','git','node','webpack','apollo','styled']
const FrameWorks = ['meteor','gatsby','nextjs']
const BackEndSkills = ['firebase','mongoDB','express','graphql']





export default class ClientView extends Component {
  render() {
    return (
      <Container className='animated fadeIn' >
        <SectionHeader right main="Web/Productivity Solutions" sub="Contractor" />
          <SectionContainer>
            <SubContainer>
              <SVG  type='monitor'/>
          <h1>FrontEnd</h1>
          {/* <p>I use React and StyledComponents with almost all of my projects. </p> */}
      <ImgContainer>
        {data.skills.map((skill)=>{
          if(FrontEndSkills.includes(skill.name)){
            return <Img key={skill.name} src={skill.img} alt=""/>
          }
        })}          
      </ImgContainer>
            </SubContainer>
        <SubContainer>

          <SVG type="cloud" />
          <h1>BackEnd</h1>
      <ImgContainer>
        {data.skills.map((skill)=>{
          if(BackEndSkills.includes(skill.name)){
            return <Img key={skill.name} src={skill.img} alt=""/>
          }
        })}          
      </ImgContainer>

        </SubContainer>

        <SubContainer>

<SVG type="robot" />
<h1>Site Generator</h1>
<ImgContainer>
{data.skills.map((skill)=>{
if(FrameWorks.includes(skill.name)){
  return <Img src={skill.img} alt=""/>
}
})}
</ImgContainer>

</SubContainer>

          </SectionContainer>
      </Container>
    )
  }
}

//sdss
