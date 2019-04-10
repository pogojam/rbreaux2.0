import React, { Component } from "react";
import styled,{keyframes} from "styled-components";
import posed from "react-pose";


const enterAnimation = keyframes`
        from{
            opacity:0;
            transform: translateY(-50%) skew(0deg);        
        }
        to{
            opacity:1;
            transform: translateY(-50%) skew(20deg);
        }
`


const Line = posed(styled.a`
z-index:999;
    position:absolute;
    content:'';
    min-height:${({ShuffleStatus})=>ShuffleStatus==='shuffleIn'?'50%':'100%'};
    width:1px;
    top: 50%;


    transform: translateY(-50%) skew(0deg);
    left: 50%;
    background-color:${({theme})=>theme.card.lines};    

    @media(max-width:800px){
      opacity:${({status})=> status === 'hide' || status === 'show'?0:1}!important;
    };
    }

`)({
  // Line Animation
  show:{
    opacity:1,
    y:"-50%",
    x:({side})=>{

      let box = document.querySelector('.portBox')
      let boxComputedStyled = getComputedStyle(box)
      let boxWidth = box.getBoundingClientRect().width - (parseFloat(boxComputedStyled.paddingLeft)*2)
        console.log(boxComputedStyled.paddingLeft,boxWidth);
        
      return side==="left"?boxWidth/2+"px":"-"+boxWidth/2+"px"
    },
    skew:"0deg"
  },
  hide:{
    x:({side})=>side==="left"?"25vw":"-25vw",
    skew:"0deg",
    opacity:1,
    minHeight: "30%"
  },
  neutral:{
    x:"0",
    y:"-50%",
    skew:({ShuffleStatus})=>{
        if(ShuffleStatus==='shuffleOut'){
            return '0deg'
            }
        return '30deg'
            }
  },
  shuffleOut:{
    skew:"0deg",
    minHeight: "100%"
  },shuffleIn:{
    skew:"30deg",
    minHeight: "30%"
  }
})
//sd
export default Line