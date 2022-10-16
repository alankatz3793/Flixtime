import React from 'react';
import styled from 'styled-components';

const CrewsContainer = styled.div`
margin-bottom: 20rem;
text-align: center;
max-width: 420rem;

@media only screen and (max-width: 1150px) {
max-width: 800rem;
margin: 20rem auto;
}

@media only screen and (max-width: 768px) {
max-width: 420rem;
}


h4 {
font-size: 20rem;
}
`;

const CrewList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
grid-column-gap: 12px;
`;

function CreditList({ listTitle, children }) {
  return (
    <CrewsContainer>
      <h4>
        {listTitle}
      </h4>
      <CrewList>
        {children}
      </CrewList>
    </CrewsContainer>
  );
}

export default CreditList;
