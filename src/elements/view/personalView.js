import React, { Component,Fragment } from 'react';
import styled from 'styled-components';
import Header from '../SectionHeader';
import SVG from '../../blocks/projectView/SVG'


const Container = styled.div`
        display:flex;
        text-align:center;
        height:100vh; 
        flex-direction: column;
        align-items: center;
  justify-content: center;
  animation-delay: 1.8s;
  background-color: #fff7f794;
  
  @media(max-width:900px){
    padding-top:10em;
  left: 0;
    background-color: #c5ffefa3;
    position: absolute;
  }

`
const SubContainer = styled.div`
        max-width:50%;
        position:realitive;
`

const ParagraphContainer = styled.div`
    margin-top: 4em;
    margin-bottom: 4em;

    border-top: 1px solid;
    border-bottom: 1px solid;

        &:before{
            top: -20px;
        }
        &:after{
            top: 20px;
        }

`
const SocialContainer = styled.div`
        width: 30vw;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    left: 50%;
    transform: translateX(-50%);

`


export default class PersonalView extends Component {
  render() {
    return (
      <Fragment>
      <Container className='animated fadeIn ' >
      <Header right main={'Projects/Works'} sub="Originals" ></Header>
          <SubContainer>
                <h2>The Whole Story</h2>
            <ParagraphContainer>
                <p>Curious  and humble , full stack developer and entrepreneur. Big on design and lightning fast code. Found my love for JS developing on Node , leveraging the power of Non-Blocking I/O and npm’s rich package eco system. Out of necessity I first started  learning web development  in college when I started my first business selling clothing online through an e-commerce website.Since I have had to learn more advanced techniques building tools for lead generation and business productivity. </p>
            </ParagraphContainer>
          <SocialContainer>
              <a href="https://github.com/pogojam">
            <SVG type='git' />
              </a>
              <a href="https://www.linkedin.com/in/ryan-breaux-4603396a/">
            <SVG type='linked' href='' />
              </a>
          </SocialContainer>
          </SubContainer>
      </Container>
      </Fragment>
    )
  }
}
