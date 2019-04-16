import React, { Component,Fragment } from "react";
import styled from "styled-components";
import posed from "react-pose";
import Line from './line'
import { CSSTransitionGroup } from 'react-transition-group'

const Container = posed(styled.div`

flex-direction: row;
  display: flex;
  background: #0d000d00;

  @media(max-width:900px) {
  width: 100%;
  }
  height:57vh;
  width:100%;

  will-change: transform;

  h2 {

    opacity:${({skillsStatus})=> skillsStatus === 'center'? 1 :0};
    color:${({theme})=>theme.card.text};
    font-size:1.2em;
    transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
    top:${({ShuffleStatus})=>{
       return ShuffleStatus === 'shuffleOut'?'22vh':'0'
    }}
  }
`)({
// Container Animations
  shuffleIn: {
    delay:300,
    delayChildren:600,
    y: "0%",
    opacity: 1
  },
  shuffleOut: {
    delay:300,
    y: ({index}) => "-" + index * 100 + "%",
    opacity: 1,
    transition: {
      ease: [0.01, 0.64, 0.79, 0.96],
      duration: 600
    }
  }
})

const SubContainer = posed(styled.div`
 border-top-left-radius:${({side})=>side==='left'?'82px':'0px'};
    border-top-right-radius:${({side})=>side==='left'?'0px':'82px'};
    border-bottom-left-radius:${({side})=>side==='left'?'82px':'0px'};
    border-bottom-right-radius:${({side})=>side==='left'?'0px':'82px'};
    border: 1px solid;
    /* border-color:${({side})=>side==='left'?'#90d8ce transparent #90d8ce #90d8ce ':'#90d8ce #90d8ce #90d8ce transparent'}; */
border:none;
  display: flex;
  flex-direction: row;
  width:100%;
  overflow:hidden;
  transform:${({side})=>side==='left'?'translateX(0px)':'translateX(1px)'};

  a {
    text-decoration: none;
    justify-self:center;
    color: ${({theme})=>theme.global.color};
    font-size: 1.5em;
    @media(max-width:800px){
      font-size: 3.5vw;
    }
    max-width: 3em;
    &:hover {
      transform: scale(1.1);
    }
    will-change: transform;
  }
`)({
  // SubContainer Animations
  hide: {
    opacity: 0,
    maxWidth:0,
    transition: { duration: 30 }
  },
  show: {
    opacity:1,
    transition:{
      opacity:{delay:200}
    },
    maxWidth:"100%"
  },neutral: {
    delay:1000,
    opacity: 0,
    maxWidth:0,
  }
})

const Container_Skills = posed(styled.div`

grid-template-columns: 1fr 1fr 1fr;
  
  width:80%;
  display: grid;
  justify-items: center;
  align-content: center;
  height: 100%;
  padding: 1em 0 1em;
  grid-row-gap: 1em;
`)({
  // Container_Skills Animations
  hide: {
    opacity: 0
  },
  show: {
    opacity: 1
  },
  neutral:{
    opacity: 0
  }
})

const Container_Info = posed(styled.div`
      display:grid;
      grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;

        a{
          transition:all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor:pointer;
          &:hover{
            transform:scale(1.2);
          }
        }
`)({
  show:{
    opacity:1
  },
  hide:{
    
  },
  neutral:{
    opacity:0
  }
})


const Box = posed(styled.div`
display: flex;
  flex-basis:${({shiftDistance})=>shiftDistance};
  
  /* opacity:${({active})=>active?1:0}; */
`)({
  // Box Animation
  show:{
    minWidth:"100%"
  },
  hide:{
    flexBasis:"0%",
    minWidth:"0%"
  },
  neutral:{
    minWidth:"50%",
    flexBasis:"50%",
    delay:300
  }
})

const Img = posed(styled.img`
  min-width: 0;
  max-width: 9vh;
`)({

})

const Button = posed(styled.button`
  &:focus{
    border:none;
    outline:none;
  }
  
  border-top-left-radius: ${({ side }) => (side === "left" ? "82px" : "0px")};
  border-bottom-left-radius: ${({ side }) => (side === "left" ? "82px" : "0x")};
  border-bottom-right-radius: ${({ side }) => (side === "left" ? "0px" : "82px")};
  border-top-right-radius: ${({ side }) => (side === "left" ? "0px" : "82px")};

  @media(max-width:900px){
    background-color:${({status,theme})=>status==='show'?theme.card.modileButton+" !important":"none"};
  }

  /* border:${({status})=>status==='show'?'1px red solid':'none'}; */
  border:none;
  border-width: ${({ side }) => (side === "left" ? "1px 1px 1px 0px" : "1px 0px 1px 1px")};

flex-basis:20%;
  cursor:pointer;
  order: ${({ side }) => (side === "left" ? "" : "-1")};
  width: 5em;
  color: ${({theme})=>theme.global.color};
  font-size: 1em;
  background: transparent;
  margin-left: ${({ side }) => (side === "left" ? "auto" : "")};
  min-height: 14em;
  white-space:nowrap;
  pointer-events:${({ShuffleStatus})=>ShuffleStatus === 'shuffleOut'?'none':'auto'};
  transition:transform .3s cubic-bezier(0.445, 0.05, 0.55, 0.95) ;

  &:hover{
    
    transform:scale(1.2);
  }

  /* 
    @media (max-width:900px){
       display:none;
        } */
`)({
  // Button Animation
  show: {
    opacity:1
  },
  hide: {
    opacity:0
  },
  neutral:{
    opacity:1
  },
  shuffleOut:{
    maxWidth:0
  },
  shuffleIn:{
    maxWidth:"100%"
  }
})



const Header = posed(styled.h2`

@media(max-width:900px){
    left:50vw;
}
font-size: 1.4em;
    font-weight: 900;
    left: 53vw;
    position:absolute;
    opacity:1 !important;
    border:1px ${({ShuffleStatus})=>ShuffleStatus==='shuffleIn'?'solid':'none'} rgb(0, 0, 0);
    border-width: 0px 0px 1px 0px;
    will-change:opacity;
    transition:opacity .3s,transform .3s ;

    &.header-enter{
        opacity:0;
        transition:opacity .3s .4s;
    }
    &.header-enter.header-enter-active{
        opacity:1;
    }
    &.header-leave{
        opacity:0;
    }
    &.header-leave.header-leave-active{
        
    }

`)({
  // Header Animation
  shuffleIn:{
  },
  shuffleOut:{
    y: ({index}) => "-" + index * 80 + "%"
  }
})

const Paragraph = posed(styled.p`
padding-right:'0px';
`)({
  shuffleIn:{
    opacity:1
  },
  shuffleOut:{
    opacity:0
  }
})



// Component Inital State !!!!!!!
    // 2 Boxs for each row has three states left right and center 


const initalState = {
  skillsStatus: "center"
};

// Main Component Export !!!!!!!!!

export default class PortCard extends Component {
  constructor(props) {
    super(props);

    this.state = initalState;
  }

  componentDidMount() {}

  reset(){
    this.setState({
      skillsStatus:'center'
    })
  }


  toggle(side) {
    
      if(side === this.state.skillsStatus){
        side = 'center'
      }

    this.setState({
      skillsStatus: side
    });
  }

  render() {
    const { cardData,ShuffleStatus,index } = this.props;
    const { skillsStatus } = this.state;

        if(ShuffleStatus === 'shuffleOut' && skillsStatus!=="center"){
          this.reset()
        }
        
    return (
      <Container
      ShuffleStatus={ShuffleStatus}
      skillsStatus={skillsStatus}
        index={index}
      >
      <CSSTransitionGroup 
                component={Fragment}
                transitionName='header'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
        <Header ShuffleStatus={ShuffleStatus} key={name} {...this.props} index={index}  >{cardData.name}</Header>
      </CSSTransitionGroup>
        <DisplayBox
        ShuffleStatus={ShuffleStatus}
          skillsStatus={skillsStatus}
          side={"left"}
          {...this.props}
          toggle={this.toggle.bind(this)}
          name="Details"
        />
        <DisplayBox
        ShuffleStatus={ShuffleStatus}
          skillsStatus={skillsStatus}
          side={"right"}
          {...this.props}
          toggle={this.toggle.bind(this)}
          name="Stack"
          right
        />
      </Container>
    );
  }
}

const DisplayBox = ({
  cardData,
  skillsData,
  skillsStatus,
  ShuffleStatus,
  toggle,
  side,
  name
}) => {

  // Is Side Active

  const status = ()=> {
    
    if(skillsStatus === "center"){
      return "neutral"
    }
    if(skillsStatus === side){
      return "show"
    }
    else{
      return "hide"
    }
  }

  return (
    <Box  pose={status()} >
      <SubContainer side={side} pose={status()}>
        {side === "left" ? (
          <Info cardData={cardData} />
        ) : (
          <Skills cardData={cardData.skills} skillsData={skillsData} />
        )}
        </SubContainer>
        <Line status={status()}  ShuffleStatus={ShuffleStatus} side={side} />
      <Button
      ShuffleStatus={ShuffleStatus}
        onClick={() => toggle(side)}
        status={status()}
        side={side}
        >
        <Paragraph  >{name}</Paragraph>
      </Button>
    </Box>
  );
};

const Info = ({ cardData }) => {
  
  return (
    <Container_Info  >
      <a href={cardData.gitLink}>Github</a>
      <p  style={{gridRow:"1 / 3",gridColumn:"2/3"}} >{cardData.discription}</p>
      <a href={cardData.pageLink}>Visit</a>
    </Container_Info>
  );
};

const Skills = ({ skillsData, cardData }) => {
  return (
    <Container_Skills>
      {skillsData.map((el, i) => {
        let url = null;
        let val;

        cardData.map(cardskill => {
          if (cardskill === el.name) {
            url = el.img;
            val = <Img key={i} src={url} alt="" />;
          }
        });

        return val;
      })}
    </Container_Skills>
  );
};
