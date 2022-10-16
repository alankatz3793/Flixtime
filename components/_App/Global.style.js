import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Inter', sans-serif !important;
  font-size: 1px;
}
*, *:before, *:after {
  box-sizing: inherit;
}

 *{
 font-family: inherit;
 }
body {
  font-family: 'Inter', sans-serif !important;
  font-size: 16rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  background: #0d0d0d;
}

#__next {
height: 100%;
width: 100%;
}

//html, body { // responsive nav bar is 50px height
//scroll-padding-top: 50px;
//}

h1, h2, h3 , h4 ,h5 ,h6 {
margin: 0;
}

a, a:hover, a:focus, a:active  {
text-decoration: none !important;
}

//semantic ui

.ui.pagination.menu {
  font-size: 15rem;
  margin-top: 45rem;
  background: #0d0d0d;
}
.ui.pagination.menu {

a.item:hover{
background: rgba(193, 182, 182, 0.52);
}

a.active.item {
    background-color: #453c38;

}

  a.item, a.active.item {
    color: white !important;
    border-radius: 30% !important;
    outline: none !important;
  &:before {
    background-color: rgba(34, 36, 38, .3);
  }
 } 
}
//
//.ui.menu {
//font-size: 18rem;
//}


.ui.buttons .ui.button {
font-size: 18rem;
background: #4a4a4a;
color: white;
transition: all 0.2s ease-in-out;
padding: 0.785714em 2.5em .78571429em;

&:hover {
background: linear-gradient(45deg,rgba(255,112,0,0.3) ,rgb(132, 22, 22, 0.3));
transition: all 0.2s ease-in-out;
}
}

.ui.buttons .ui.active.button {
background: linear-gradient(45deg,rgb(255,112,0) ,rgba(132,22,22,0.8));
}

.ui.buttons .button:first-child {
    border-top-left-radius: 22rem;
    border-bottom-left-radius: 22rem;
    border-right: 1px #323232 solid;
}

.ui.buttons .button:last-child {
    border-top-right-radius: 22rem;
    border-bottom-right-radius: 22rem;
}


.slick-prev, .slick-next {
top: 128rem;
font-size: 25rem;
}

`;
export default GlobalStyle;
