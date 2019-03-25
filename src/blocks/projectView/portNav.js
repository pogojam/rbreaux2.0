import React, { Component,Fragment } from "react";
import styled from "styled-components";
import posed from "react-pose";



const Button = posed(styled.button`
    position: absolute;
    position:${({ShuffleStatus})=>ShuffleStatus==='shuffleOut'?'absolute':'fixed'};
    border-style:none;

        &:focus{
            border:none;
            outline:none;
          }
    
`)({
    init: { scale: 1,background:'rgba(47, 183, 148, 0)' },
    hoverable:true,
    hover: { scale: 1.2,background: 'rgba(47, 183, 148, 0)' },
    shuffleIn:{
        color:'rgb(255, 255, 255);'
    },
    shuffleOut:{
        color:'rgb(0, 0, 0);'
    }
})

const Arrow = posed(styled.i`
  border: solid ${({theme})=>theme.card.lines};
  border-radius: 2px;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  width: 2em;
  height: 2em;
  ${({left})=>left?"transform: rotate(135deg);":"transform: rotate(-45deg);"}
`)({
    init:{
        scale:1,
rotate:({left})=>left?"135deg":"-45deg"
    },
    hoverable:true,
    hover: { scale: 1.2,background: 'rgba(47, 183, 148, 0)' },
    shuffleIn:{
        // opacity:0,
        // x:({left})=>left?'-50vw':'50vw'
    },
    shuffleOut:{
        delay:600,
        opacity:1
        // x:({left})=>left?'0':'0'
    }
})

const Container = posed(styled.div`
        display:flex;
      min-height:10vh;
        width:100%;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        top: 90vh;

        /* position:${({ShuffleStatus})=>ShuffleStatus==='shuffleOut'?'absolute':'fixed'};
        width:${({ShuffleStatus})=>ShuffleStatus==='shuffleOut'?'null':'70vw'}; */

        position:fixed;
        width:70vw;

        @media(max-width:900px){
            width:100vw
        }
`)({
    
    shuffleOut:{
        backgroundColor:"rgba(244, 244, 249, 0)"
    },
    shuffleIn:{
        backgroundColor:"rgb(0, 0, 0)"
    }
})

//s

const Arch = posed(styled.div`
width: 66%;
height: 64px;
border: 1px solid;
border-color: transparent transparent white transparent;
border-radius: 0 0 240px 26%/75px;
margin: auto;

`)({

})


// Main Compnent

export default class PortNav extends Component {
    render() {
        const {handleShuffle,handleNextPage,ShuffleStatus} = this.props
    return (
      <Container {...this.props} >
            {/* <Arch/> */}
            <Arrow  left onClick={()=>handleNextPage()} />
            <Button {...this.props} onClick={handleShuffle} ><h2>Explore</h2></Button> 
            <Arrow  onClick={()=>handleNextPage('next')} />
      </Container>
    )
  }
}
