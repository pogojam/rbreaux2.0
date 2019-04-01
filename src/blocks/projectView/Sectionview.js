import React, { Component } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import posed,{PoseGroup} from 'react-pose';
import View from '../../elements/view/view'

const Container = posed(styled.div`

background-image:url(${({splashImg})=>splashImg});
background-size: auto 100%;
background-repeat: no-repeat;

height:100%;

position:absolute;
top:0;
left:0;
transform-origin: center!important;

overflow:hidden;

&:before{
  content: "";
  display:block;
  position:absolute;
  top:0;

  width: 100%;
  height: 100%;
  background:${({overlay})=>overlay};
}

will-change: width scale ;

`)({
    
  enter:{
    x:({index,isActive})=>{
        if(isActive){
            return "0%"
        }
        else{
            return index*100+'%'
        }
    },
    scale:1,
    opacity:1,
    transition:{
      scale:{delay:300},
      x:{

      },
      width:({isActive})=>isActive?{delay:300}:{delay:0}
    },
    width:({isActive})=>{
        if(isActive){
            return "100%"
        }else{
            return "calc(100vw/3)"
        }
    }
  },
  exit:{
    opacity:0
  }
})
//sdf

const Icon = posed(styled.img`
    position: absolute;
    right: 0;
    opacity:${({isActive})=>isActive?1:0};
`)({

})
const Title = posed(styled.h1`

position: relative;
top: 50vh;
text-align: center;
color:white;  
width: calc(100vw/3);


&:after{
  transition: min-width .9s cubic-bezier(0.075, 0.82, 0.165, 1);
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


`)({
  // Animationss


})

const SecondaryContainer = styled.div`
    width:100vw;
    height:100%;
    display:flex;
    top: 0;
    left: 0;
    position:absolute;
    
`



export default class Sectionview extends Component {
    render() {
        const {handleSectionChange,side,activeSection,name} = this.props
        const posedStatus = activeSection === side  
        const isActive = activeSection === side

        console.log(posedStatus);

    return (
      <Container isActive={isActive} posedStatus={posedStatus}  {...this.props} onClick={()=> handleSectionChange(side)} >
          <SecondaryContainer>
        {/* <Icon isActive={isActive} src="https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png" /> */}
      <Title left >{isActive?'Home':name}</Title>
     <View isActive={isActive} className={'animated fadeIn'} {...this.props} />
          </SecondaryContainer>
</Container>
    )
  }
}
//sdfds