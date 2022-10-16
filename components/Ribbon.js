import styled from 'styled-components';
// https://codepen.io/nxworld/pen/oLdoWb
const RibbonStyled = styled.div`

  width: 150rem;
  height: 150rem;
  overflow: hidden;
  position: absolute;


&::before,
&::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  border: 5rem solid #2980b9;
}

span {
  position: absolute;
  display: block;
  width: 225rem;
  padding: 15rem 0;
  background-color: #3498db;
  box-shadow: 0 5rem 10rem rgba(0,0,0,.1);
  color: #fff;
  font: 700 18rem/1 'Lato', sans-serif;
  text-shadow: 0 1rem 1rem rgba(0,0,0,.2);
  text-transform: uppercase;
  text-align: center;
}


  top: -10rem;
  right: -10rem;

&::before,
&::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
&::before {
  top: 0;
  left: 0;
}
&::after {
  bottom: 0;
  right: 0;
}
span {
  left: -25rem;
  top: 30rem;
  transform: rotate(45deg);
}

`;


function Ribbon() {
  return (
    <RibbonStyled><span>ribbon</span></RibbonStyled>
  );
}

export default Ribbon;
