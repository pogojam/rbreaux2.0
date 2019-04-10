import React, { Component } from 'react'
import styled,{ThemeProvider,keyframes,css} from 'styled-components'
import posed,{PoseGroup} from 'react-pose';
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

transition:transform 3s linear;
will-change:transform ;
`


const Container = posed(styled.div`

transform:translateX(${({index})=>index*100+"%"});
width:calc(100vw/3);
transition:transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) .3s ,width .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) .7s;

${({isActive,activeSection,index})=>{
  if(isActive){
     return animateSectionActive
  }else{
    return animateSectionNetural
  }
}}




transform-origin: ${({index})=>index*100+50+"%"} 50%;

will-change: transform, width, opacity;


height:100%;
position:absolute;
top:0;
left:0;

overflow:hidden;



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
  ${Background}{
    transform:scale(1.1);
  }
    
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

  opacity:${({isActive})=>{
    if(isActive){
      return ".3"
    }else{
      return ".65"
    }
  }};
  transition:opacity 1s ;
}

`)({
    

})


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
    render() {
        const {icon,side,activeSection,name} = this.props
        const isActive = activeSection === side


    return (
      <Container isActive={isActive} activeSection={activeSection}  {...this.props}  >
          <SecondaryContainer>
        <Background isActive={isActive} {...this.props}/>
        {/* <Icon isActive={isActive} src="https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png" /> */}
      <Title {...this.props} left name={name} isActive={isActive} >
        <SVG type={icon} isActive={isActive} />
      </Title>
     <View isActive={isActive}  {...this.props} />
          </SecondaryContainer>
</Container>
    )
  }
}
