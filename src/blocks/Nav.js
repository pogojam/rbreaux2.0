import React, { Component,Fragment } from 'react'
import styled,{keyframes} from 'styled-components'
import SVG from './projectView/SVG'

const ViewSVG = styled(SVG)`
position: absolute;
    bottom: 17px;
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
    transform:${({isActive})=>isActive?'translateX(100%) translateY(45vh)':'translateX(50%)'};
    will-change:transform;
    transition:transform .4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`


export default class Nav extends Component {
    render() {
        const {icon,isActive,handleSectionChange,side} = this.props
    return (
      <Container onClick={()=> handleSectionChange(side)}  isActive={isActive} className='nav'>
        <ViewSVG type={icon}  />
      </Container>
    )
  }
}
