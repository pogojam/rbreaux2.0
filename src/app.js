import React, { Component } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import data from './static/data.json'
import { CSSTransitionGroup } from 'react-transition-group'

import SectionView from './blocks/projectView/Sectionview'
import Theme from './static/theme'





const Container = styled.div`
display:flex;
min-width:100vw;
min-height:100vh;

background-color:${({theme})=>theme.container.mainBG};

@media (max-width:800px){
  flex-direction: column;
}

`




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

    return (
      <ThemeProvider theme={Theme}>
      <Container >
      <CSSTransitionGroup
        transitionName="section"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1100}>
       {
        data.sections.filter((val)=>{
          if(activeSection === 'all'){
          return true
         }if(activeSection === val.side ){
            return true
         }
        }).map((val,i)=><SectionView activeSection={activeSection} index={val.index} {...val} {...this.props}  handleSectionChange={this.handleSectionChange}  key={val.side}/>)
       }

      </CSSTransitionGroup>
      </Container>
      </ThemeProvider>
    )
  }
}

