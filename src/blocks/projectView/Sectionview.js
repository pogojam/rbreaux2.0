import React, { Component,Fragment } from 'react'
import styled,{css} from 'styled-components'
import View from '../../elements/view/view';
import Title from './title'





const Background = styled.div`
z-index: -1;
position:absolute;
height:100%;
width:100vw;

background-image:url(${({splashImg})=>splashImg});
background-size:cover;
background-repeat: no-repeat;

transform:translate3d(${({index,isActive})=>isActive?'0':'calc(100vw/3*-1*'+index}),0,0);
filter:${({isActive})=>isActive && ' blur(10px)'};
transition: transform ${({isActive})=>isActive?'0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s':'0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.8s'} , filter .6s;
will-change:transform filter;

&::before{

content: "";
display:block;
position:absolute;
top:0;
width: 100%;
height: 100%;
background:${({overlay})=>overlay};
opacity:${({isActive})=>isActive?'0':'.75'};
transition:${({isActive})=>isActive?'opacity .1s':'opacity .5s 1.4s'};
will-change:opacity;
z-index: -1;
}

`

const animateSectionActive = css`
    transform:translateX(0%); 
    z-index:2;
    width:100%;
    
`
const animateSectionNetural = css`
transition:transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) .8s ,width .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) .3s;
`


const Container = styled.div`
z-index:1;
width:calc(100vw/3);
height:100%;
position:absolute;
top:0;
left:0;
overflow:hidden;
transform:translateX(${({index})=>index*100+"%"});
transform-origin: ${({index})=>index*100+50+"%"} 50%;
transition:transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) .5s ,width .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s;


    &:hover{
      
      .nav{
  ${({isActive})=>isActive?'':'transform:translateX(50%) translateY(25vh);'}
      }
      .Title-Header{
        ${({isActive})=>isActive?'transform:translateX(50%) scale(1.1);':'transform:translateX(50%) scale(1.1);'}
      }

      

    }

${({isActive})=>{
  if(isActive){
     return animateSectionActive
  }else{
    return animateSectionNetural
  }
}}
will-change: transform,width,opacity;

&.section-enter{
  /* transform: translate3d(${({index})=>index*100+"%"},0,0); */
  z-index:0;
  transform:scale(.5)translate3d(${({index})=>index*100+"%"},0,0);
  opacity:.01;
  transition:transform .5s 1.5;
}
&.section-enter.section-enter-active{
  transform:scale(1) translate3d(${({index})=>index*100+"%"},0,0);
  opacity:1;
}

&.section-leave{
    transform:scale(.5) translate3d(${({index})=>index*100+"%"},0,0);
    opacity:.4;
    z-index:0;
    transition:transform .8s cubic-bezier(0.455, 0.03, 0.515, 0.955) , opacity .8s linear;
}

&:hover  {
  &::after{
    opacity:${({isActive})=>isActive?"":".65"};
  }
  }

  &::before{
  /* content:'';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

background-image:url(${({splashImg})=>splashImg});
background-size: 110vh 110vw;
background-attachment: fixed;
background-size: cover;
filter: blur(10px);
opacity:${({isActive})=>isActive?'1':'0'};
transition:opacity .4s 1s;
will-change:opacity; */
}


`


const SecondaryContainer = styled.div`

/* @media(max-width:900px){
      flex-direction: column;
    }

    @media(min-width:900px){

      height:100%;
    } */

    width:100%;
    height:100%;
    position:relative;
    will-change:width;
    display:flex;

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
          
          
      }


    render() {
        const {icon,side,activeSection,name} = this.props
        const isActive = activeSection === side


    return (
      <Container   isActive={isActive} activeSection={activeSection}  {...this.props}  >
          <SecondaryContainer>
        <Background  ref={(e)=> this.background = e } isActive={isActive} {...this.props}/>
      <Title {...this.props} left name={name} isActive={isActive} >
        
      </Title>
      <View  ref={(e)=>this.view = e } isActive={isActive}  {...this.props} />
          </SecondaryContainer>
</Container>
    )
  }
}
