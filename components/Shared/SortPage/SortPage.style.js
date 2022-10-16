import styled from 'styled-components';

export const FireText = styled.div`
margin: 100rem auto 30rem;
width: 80%;

h2 {
color: #fff;
font-size: 90rem;
text-align: center;
font-weight: 400;
font-family: Luckiest Guy, sans-serif;
text-transform: uppercase;
letter-spacing: 2rem;

@media only screen and (max-width: 768px) {
font-size: 60rem;
}

span{
display: block;
background-image: url(/fire.jpg);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
backface-visibility: hidden;
animation: fire 7s linear infinite;
}

@keyframes fire {
0% {
background-position: 100% -50%;
}
}

}
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 15rem;
  grid-row-gap: 30rem;
  align-items: baseline;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
   flex-direction: column;
   max-width: 990rem;
   width: 100%;
   margin: auto;
   padding: 10rem 10rem 70rem 10rem;
   justify-content: center;
   text-align: center;
`;
