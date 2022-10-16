import styled from 'styled-components';

const StyledContentItem = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

img {

max-width: 168rem;
height: 252rem;
width: 100%;
border-radius: 8rem;
object-fit: cover;
user-select: none;
cursor: pointer;
filter: brightness(80%);
padding: 0.8rem;
border: 0.8rem solid transparent;
transition: all 0.1s ease-out;

@media only screen and (max-width: 768px) {
max-width: 140rem;
height: 210rem;
}

&:hover {
filter: brightness(100%);
border: 0.8rem solid darkorange;

}


//@media only screen and (max-width: 1230px) {
//max-width: 20vw;
//}
//
//@media only screen and (max-width: 600px) {
//max-width: 40vw;
//}


}
`;

export default StyledContentItem;
