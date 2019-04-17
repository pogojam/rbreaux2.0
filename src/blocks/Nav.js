import React, { Component,Fragment } from 'react'
import styled,{keyframes} from 'styled-components'
import SVG from './projectView/SVG'
import data from '../static/data.json'

const ViewSVG = styled(SVG)`
cursor:pointer;
  padding-bottom: 15px;
`



const Container = styled.div`
    position:absolute;
    background-color:#00000047;
    right:0;
    width:5vw;
    height:100vh;
    box-shadow: 5px 4px 10px 2px rgba(0,0,0,0.75);
    border-bottom-left-radius: 29px;
    border-bottom-right-radius: 29px;
    top:-90vh;
    transform:${({isActive})=>isActive?'translateX(100%) translateY(35vh)':'translateX(50%)'};
    will-change:transform;
    transition:transform .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) ;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;



`

const SectionsNameArray = ['personal','client','projects']



export default class Nav extends Component {
    render() {
        const {name,icon,isActive,handleSectionChange,side} = this.props
    return (
      <Container   isActive={isActive} className='nav'>
        {isActive&&<Fragment>{
          data.sections.map((section)=>{
              if(section.name !== name){
            return <ViewSVG  className='animated fadeIn' action={()=> handleSectionChange(section.side)} type={section.icon} />
              }
          })
          }
          </Fragment>}
        <ViewSVG action={()=> handleSectionChange(side)} color={isActive?'white':null} type={icon}  />
      </Container>
    )
  }
}
