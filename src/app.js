import React, { Component,Fragment } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import data from './static/data.json'
import posed,{PoseGroup} from 'react-pose';



import Section from './blocks/section'
import Test from './blocks/projectView/Sectionview'
import Theme from './static/theme'

const Container = posed(styled.div`
display:flex;
min-width:100vw;
min-height:100vh;

background-color:${({theme})=>theme.container.mainBG};

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
const isEntered = activeSection !=='all'

    console.log(activeSection);
    

    return (
      <ThemeProvider theme={Theme}>
      <Container >
      <PoseGroup   >
       {
        data.sections.filter((val)=>{
          if(activeSection === 'all'){
          return true
         }if(activeSection === val.side ){
            return true
         }
        }).map((val,i)=><Test activeSection={activeSection} index={val.index} {...val} {...this.props}  handleSectionChange={this.handleSectionChange}  key={val.side}/>)
       }

      </PoseGroup>

      </Container>
      </ThemeProvider>
    )
  }
}



{/* <Section  className='section' activeSection={activeSection} handleSectionChange={this.handleSectionChange} key={val.name}   index={i}  {...val} /> */}