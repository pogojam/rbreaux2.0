import React, { Component } from 'react';
import posed from 'react-pose'
import styled from "styled-components";
import PortfolioCard from '../../blocks/projectView/card';
import PortNav from '../../blocks/projectView/portNav'
import data from '../../static/section.json'
import SectionHeader from '../SectionHeader'


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

const StyledPort = styled.div`
     justify-items: center;
     grid-template-rows: .3fr 1fr 1fr 1fr;
    display: grid;
    height: 100%;
    width: 100%;
    /* grid-gap: 2em; */
`

const Container = posed(styled.div`
transition:opacity .6s linear;
        opacity:1;

        align-items: center;
`)({

})

class ProjectView extends Component {
    constructor(props) {
      super(props)
      this.handleShuffle=this.handleShuffle.bind(this)
      this.handleNextPage=this.handleNextPage.bind(this)
      this.state = {
         ShuffleStatus:'shuffleOut',
         itemPos:{
             start:0,
             end:3
         }
      }
    }
    
   
    handleNextPage(direction){

        const max = data.sites.length - 1

        let start = this.state.itemPos.start
        let end = this.state.itemPos.end

        if(direction === 'next' && end <= max){
                start = start + 3
                end = end +3
        }else if (start === 0 ){
            start = max - 2
                end = max + 1
        }else{
            start= start - 3
            end = end - 3
        }

            this.setState({
                itemPos:{
                    start:start,
                    end:end
                }
            })
            
            
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
        const {ShuffleStatus,itemPos} = this.state
        const shownSites = data.sites.slice(itemPos.start,itemPos.end)

        return (
            <Container  pose={ShuffleStatus} >
            {  <StyledPort  >
                <SectionHeader main="Projects/OpenSource" sub="A Portfolio" />
                {
                shownSites.map((el,i)=>{
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