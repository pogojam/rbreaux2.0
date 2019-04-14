import React, { Component } from 'react';
import posed from 'react-pose'
import styled,{css} from "styled-components";
import PortfolioCard from '../../blocks/projectView/card';
import PortNav from '../../blocks/projectView/portNav'
import data from '../../static/section.json'
import Header from '../SectionHeader'


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

const SectionSubHeader = styled.h3`

@media(max-width:900px){
    top:0;
    
}
    position:relative;
    left: -8vw;
    top: 41vh;
    max-width:250px;
    font-size: 1.8em;

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
    position: absolute;
    justify-items: center;
    grid-template-rows: .3fr 1fr 1fr 1fr;
    display: grid;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 6em;
    padding-top: 10em;
    will-change: transform;

@media(max-width:900px){
    padding: 3em;
    padding-top: 10em;
    background-color: #dcffaf6e;
    }

`
const Container = posed(styled.div`
        opacity:1;
        align-items: center;
`)({})

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
            this.port.style.overflowY = 'auto'
        }else{
            this.port.scroll({
                top: 0,
                behavior: 'smooth'
              });

            this.port.style.overflowY = 'hidden'
        }
    }

    
    render() {
        const {ShuffleStatus,itemPos,activePortSection} = this.state
        const {isActive} = this.props
        const shownProjects = data[PortfolioSections[activePortSection]]

        return (
            <Container className='animated fadeIn delay-2s'  pose={ShuffleStatus} >
                <Header left main={'Projects/Works'} sub="Originals" ></Header>
            
            { isActive && <StyledPort ref={(e)=>this.port = e} className='portBox' >
            <SectionSubHeader ShuffleStatus={ShuffleStatus}  >
            {PortfolioTitles[activePortSection]}
                </SectionSubHeader>
                {
                shownProjects.map((el,i)=>{
                    return <PortfolioCard ShuffleStatus={ShuffleStatus} key={i} index={i}   skillsData={data.skills} cardData={el} />
                    })
                }
                </StyledPort>}
                <PortNav ShuffleStatus={ShuffleStatus} handleNextPage={this.handleNextPage} handleShuffle={this.handleShuffle} />
            </Container>
        );
    }
}


export default ProjectView;