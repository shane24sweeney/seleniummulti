import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
`; 

export const Education = () => (
<GridWrapper>

              <h1>
                <span>Education</span>
                <br/>
              </h1>
           
      
                <p></p>
                  <h3>North Carolina State, US</h3>
                  <p className="info">
                    Masters in Computer Science - 2015{" "}
                  </p>

                <p></p>
                  <h3>University College Cork, Ireland</h3>
                  <p className="info">
                    Higher Diploma Computer Science B.A. Mathematical Studies
                    and Sociology - 1999/1998{" "}
                  </p>
                 
              
              
   
  </GridWrapper>
)
export default Education;