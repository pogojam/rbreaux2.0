import React, { Component } from 'react'
import styled from 'styled-components'
import data from './static/data.json'
import posed, { PoseGroup } from 'react-pose';

import Section from './blocks/section'
import View from './elements/view'

const Container = posed(styled.div`
display:flex;
min-width:100vw;
min-height:100vh;

@media (max-width:800px){
  flex-direction: column;
}

`)({
  // Animations

})



export default class App extends Component {
  constructor(props) {
    super(props);
this.handleSectionChange = this.handleSectionChange.bind(this);
    this.state = {
       activeSection:"all"
    }
  }
  
handleSectionChange(sec){
      
    if(sec === this.state.activeSection){
      sec = 'all'
    }

    this.setState({activeSection:sec})
}

  
  render() {
const {activeSection} = this.state
const isSectionActive = activeSection!=='all'



    return (
      <Container pose={isSectionActive && 'sectionIn'} >
      <PoseGroup  >
       {
         data.sections.map((val,i)=>{
         if(activeSection === 'all'){
          return <Section activeSection={activeSection} handleSectionChange={this.handleSectionChange} index={val.side}  key={i}  {...val} />
         }
         else{
          return activeSection === val.side && <Section side={val.side} activeSection={activeSection} handleSectionChange={this.handleSectionChange} index={i} key={i}  {...val} />
         }
       })

       }
      </PoseGroup>
      
     {isSectionActive && <View key={3}/>}


      </Container>
    )
  }
}
//sd