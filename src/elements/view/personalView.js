import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
        display:flex;
        text-align:center;
        height:100%;
        flex-direction: column;
        align-items: center;
  justify-content: center;

`
const SubContainer = styled.div`
        max-width:50%;
`

const ParagraphContainer = styled.div`
    margin-top: 4em;
    margin-bottom: 4em;

        &:before,&::after{
            display:inline-block;
            left: 50%;
            transform: translateX(-50%);
            position:relative;
            content:'';
            width:30em;
            height:1px;
            background-color:black;
        }

        &:before{
            top: -20px
        }
        &:after{
            top: 20px
        }

`

export default class PersonalView extends Component {
  render() {
    return (
      <Container>
          <SubContainer>
                <h2>The Whole Story</h2>
            <ParagraphContainer>
                <p>short list of the most helpful Sketch plugins we could find, just for all of you. This one’s about quality, not quantity, folks. Check out the links below and grab them all for free</p>
            </ParagraphContainer>
          </SubContainer>
      </Container>
    )
  }
}
