import React, { Component } from 'react'
import styled,{css} from 'styled-components'
import View from '../../elements/view/view';
import Title from './title'
import SVG from './SVG'


const animateSectionActive = css`
    transform:translateX(0%); 
    width:100%;
`
const animateSectionNetural = css`
transition:transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) .7s ,width .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) .3s;
`


const Background = styled.div`
z-index: -1;
position:absolute;
height:100%;
width:100vw;

background-image:url(${({splashImg})=>splashImg});
background-size: auto 100%;
background-repeat: no-repeat;
transform:${({scale})=>scale?'scale(1.1)':'scale(1)'};
transition:transform 3s linear;
will-change:transform;
`


const Container = styled.div`

width:calc(100vw/3);
height:100%;
position:absolute;
top:0;
left:0;
overflow:hidden;
transform:translateX(${({index})=>index*100+"%"});
transform-origin: ${({index})=>index*100+50+"%"} 50%;
transition:transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) .3s ,width .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) .7s;
will-change: transform,width,opacity;

${({isActive})=>{
  if(isActive){
     return animateSectionActive
  }else{
    return animateSectionNetural
  }
}}

&.section-enter{
  transform: translateX(${({index})=>index*100+"%"});
  opacity:.01;
}
&.section-enter.section-enter-active{
  transform:translateX(${({index})=>index*100+"%"});
  opacity:1;
  transition:transform .8s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s , opacity .8s linear 1s;

}

&.section-leave{
    transform:scale(.5) translateX(${({index})=>index*100+"%"});
    opacity:0;
    transition:transform .8s cubic-bezier(0.455, 0.03, 0.515, 0.955) , opacity .8s linear;
}

&:hover  {
  &::before{
    opacity:${({isActive})=>isActive?"":".4"};
  }
  }


&:before{
  content: "";
  display:block;
  position:absolute;
  top:0;
  width: 100%;
  height: 100%;
  background:${({overlay})=>overlay};
  opacity:${({isActive})=>isActive?'0':'.65'};
  transition:opacity 1s ;
}

`


const SecondaryContainer = styled.div`

@media(max-width:900px){
      flex-direction: column;
    }

    @media(min-width:900px){

      height:100%;
    }

    width:100vw;
    display:flex;
    top: 0;
    left: 0;
    position:absolute;

`



export default class Sectionview extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       scale:false
    }
  }
  

    handleHover(state){
          const background = this.background
          const viewBackground = this.view.viewContainer

        if(state==='enter'){
          // background.style.transform = 'scale(1.1)'
          // viewBackground.style.transform = 'scale(1.1)'
          
          this.setState({
            scale:true
          })

        }
        else{
          // background.style.transform = 'scale(1)'
          // viewBackground.style.transform = 'scale(1)'

          this.setState({
            scale:false
          })

        }
          
          
      }


    render() {
        const {scale} = this.state
        const {icon,side,activeSection,name} = this.props
        const isActive = activeSection === side


    return (
      <Container  onMouseEnter={()=>this.handleHover('enter')} onMouseLeave={()=>this.handleHover('exit')} isActive={isActive} activeSection={activeSection}  {...this.props}  >
          <SecondaryContainer>
        <Background {...this.state} ref={(e)=> this.background = e } isActive={isActive} {...this.props}/>
        {/* <Icon isActive={isActive} src="https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png" /> */}
      <Title {...this.props} left name={name} isActive={isActive} >
        <SVG type={icon} isActive={isActive} />
      </Title>
     <View {...this.state} ref={(e)=>this.view = e } isActive={isActive}  {...this.props} />
          </SecondaryContainer>
</Container>
    )
  }
}
