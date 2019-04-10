import React, { Component,Fragment } from "react";
import styled,{keyframes} from "styled-components";
import posed from "react-pose";



const Arrow = posed(styled.button`

@media(max-width:900px){
    border-width: 0 7px 7px 0;
    width: 2em;
    height: 2em;
}

    border: solid ${({theme})=>theme.card.lines};
  border-radius: 2px;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  width: 2em;
  height: 2em;
  transform: ${({ShuffleStatus})=>ShuffleStatus==='shuffleIn'?'rotate(225deg)':'rotate(45deg)'};
  background:none;
  top: 3em;
  cursor: pointer;
  transition:transform .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:hover{
        transform:scale(1.1) ${({ShuffleStatus})=>ShuffleStatus==='shuffleIn'?'rotate(225deg)':'rotate(45deg)'};
    }

  :focus{
      outline:none;
  }

`)({
    initialPose:{

    },
    shuffleIn:{

    },
    shuffleOut:{

    }
})



const Dot = posed(styled.i`
    opacity: .5;
    border-radius: 50%;
    background: black;
    width: 10px;
    padding: 0;
    height: 10px;
    transition:opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1) ${({index})=>index*.1+"s"};

    
    
`)({
    init:{

    }
})



const DotButtonContainer = posed(styled.button`


cursor: pointer;
width:300px;
height: 40px;
background:none;
border-style:none;
display:flex;
width: 96px;
justify-content: space-evenly;

:focus{
      outline:none;
  }

&:hover i{
        opacity:1;
    }


  ${({left})=>''}  

`)({
    initialPose:{
        X:0
    },
    shuffleIn:{
        x:({right})=>{
            if(right){
                return '20vw'
            }else{
                return '-20vw'
            }
        }
    },
    shuffleOut:{
        x:0
    }
})



const Container = posed(styled.div`

@media(max-width:900px){
    width:100vw
}

        bottom: 0;
        background-color: rgb(255, 255, 255);
        display:flex;
      min-height:10vh;
        width:calc(100vw/3*2);
        align-items: center;
        justify-content:center;
        position: fixed;
        right: 0;

        &.portNav-leave{
                opacity:0;
                transition:.3s linear;
        }

        
`)({
    
    shuffleOut:{
    },
    shuffleIn:{
    }
})

//

const DotButton =({dots,handleNextPage,right})=>{

    const makeDots = ()=>{
        let dotArray = []

        for(let i=0;i<dots;i++){
            dotArray.push(<Dot index={i} />)
        }
        if(!right){
            dotArray.reverse()
        }
        return dotArray
    }

    makeDots()

return<DotButtonContainer right={right} onClick={()=>handleNextPage(right?'next':null)} >
      {
makeDots()
      }
</DotButtonContainer>}


// Main Compnent

export default class PortNav extends Component {


    render() {
        const {handleShuffle,ShuffleStatus} = this.props
        
    return (
        <Container {...this.props} >
            <DotButton {...this.props} dots={3}  />
            <Arrow ShuffleStatus={ShuffleStatus} {...this.props} onClick={handleShuffle} /> 
            <DotButton {...this.props}  dots={3} right />
      </Container>
    )
  }
}
