
import styled from 'styled-components';
import { Dimmer, Loader } from 'semantic-ui-react';

const StyledSpinner = styled.div`
.ui.dimmer {
background-color: rgba(0,0,0,0.5) !important;
position: fixed;
}

.ui.loader {
&:before, &:after {
width: 40rem;
height: 40rem;
margin: 0 0 0 -20rem;
}
}
`;

function Spinner() {
  return (
    <StyledSpinner>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </StyledSpinner>
  );
}

export default Spinner;
