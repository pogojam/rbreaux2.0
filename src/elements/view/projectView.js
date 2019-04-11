import React, { Component } from 'react';
import posed from 'react-pose'
import styled,{css} from "styled-components";
import PortfolioCard from '../../blocks/projectView/card';
import PortNav from '../../blocks/projectView/portNav'
import data from '../../static/section.json'
import Header from '../SectionHeader'
import { CSSTransitionGroup } from 'react-transition-group'


// Animations
const Animations = {
    svg:{enter:{x:100},exit:{y:300,opacity:1}},
    container:{
        enter:{
            rotate:(1, 1, 1, "45deg")
        }
    }
 }
 
 
// Styled Compnents

const subHeaderShuffleOut = css`
        transform:translateX(-30px);
        opacity:0;
`
const subHeaderShuffleIn = css`
        opacity:1;
        transform:translateX(0px);
`

const SectionSubHeader = styled(Header)`

@media(max-width:900px){
    top:0;
    
}


    left: 9vw;
    top: 58vh;
    max-width:250px;

${({ShuffleStatus})=>{
        if(ShuffleStatus==='shuffleIn'){
            return subHeaderShuffleOut
        }else{
            return subHeaderShuffleIn
        }
    }}

    transition:transform .5s cubic-bezier(0.445, 0.05, 0.55, 0.95),opacity .5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

`

const StyledPort = styled.div`
    position: relative;
    justify-items: center;
    grid-template-rows: .3fr 1fr 1fr 1fr;
    display: grid;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 2em;
    padding-top: 10em;
`

const Container = posed(styled.div`
        opacity:1;

        align-items: center;
`)({

})

    const PortfolioSections = ['sites','opensource','productivity']
    const PortfolioTitles = ['Web Sites','Open Source','Productivity']

class ProjectView extends Component {
    constructor(props) {
      super(props)
      this.handleShuffle=this.handleShuffle.bind(this)
      this.handleNextPage=this.handleNextPage.bind(this)
      this.state = {
         ShuffleStatus:'shuffleOut',
         activePortSection:0,
         itemPos:{
             start:0,
             end:3
         }
      }
    }
    
   
    handleNextPage(page){
        
        let section = this.state.activePortSection

        console.log(!page,section<PortfolioSections.length-1,section>0);
        
        if(page && section<PortfolioSections.length-1){
            section = section+1
            console.log(section);
         return   this.setState({
                activePortSection:section
        })
        }
        if(!page && section<=PortfolioSections.length-1 && section>0){
                section = section -1
                console.log('section');
                
              return  this.setState({
            activePortSection:section
        })
        }
        if(!page && section===0){
            section = PortfolioSections.length-1
            return  this.setState({
            activePortSection:section
        })  
        }
        else{
            section = 0
           return this.setState({
            activePortSection:section
        })
        }

    }
    
    handleShuffle(){
        const {ShuffleStatus} = this.state
        const status = ShuffleStatus === 'shuffleIn'?'shuffleOut':'shuffleIn'

        this.setState({
            ShuffleStatus:status
        })

        if(status === 'shuffleIn'){
            this.props.refViewContainer.style.overflowY = 'auto'
        }else{
            this.props.refViewContainer.scroll({
                top: 0,
                behavior: 'smooth'
              });

            this.props.refViewContainer.style.overflowY = 'hidden'
        }
    }

    
    render() {
        const {ShuffleStatus,itemPos,activePortSection} = this.state
        const {isActive} = this.props
        const shownProjects = data[PortfolioSections[activePortSection]]

        return (
            <Container  pose={ShuffleStatus} >
                <Header main={'Projects/Works'} sub="Originals" ></Header>
            <SectionSubHeader ShuffleStatus={ShuffleStatus}  main={PortfolioTitles[activePortSection]} sub="A Portfolio" />
            { isActive && <StyledPort className='portBox' >
                {
                shownProjects.map((el,i)=>{
                    return <PortfolioCard ShuffleStatus={ShuffleStatus} key={i} index={i}   skillsData={data.skills} cardData={el} />
                    })
                }
                <PortNav ShuffleStatus={ShuffleStatus} handleNextPage={this.handleNextPage} handleShuffle={this.handleShuffle} />
                </StyledPort>}
            </Container>
        );
    }
}


export default ProjectView;