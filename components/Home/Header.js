import styled from 'styled-components';
import { getYearAndMonth } from '../../utils/formatUtils';
import FeaturedButton from './FeaturedButton';
import SwipeSVG from './SwipeSVG';

const FeaturedImage = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => `https://image.tmdb.org/t/p/w1280${props.imageUrl}`}) no-repeat top center / cover;
width: 100%;
height: 100%;
position: absolute;
z-index: -1;
margin: 0 auto;

@media only screen and (max-width: 768px) {
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => `https://image.tmdb.org/t/p/w1280${props.imageUrl}`}) no-repeat top center / cover;
}

@media only screen and (max-width: 500px) {
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => `https://image.tmdb.org/t/p/w780${props.imageUrl}`}) no-repeat top center / cover;
}
`;

const Panel = styled.div`
position: absolute;
max-width: 80vw;
width: 100%;
height: 100%;
justify-content: center;
align-items: flex-start;
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.colors.primary};

@media only screen and (max-width: 768px) {
align-items: center;
margin-top:15rem;
    }
`;

const PanelContainer = styled.div`
    width: 100vw;
    height: 56.17977vw;
    max-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
     @media only screen and (max-width: 768px) {
    margin-top: 65rem;
    }   
.panel-date {
font-size: 22rem;
    @media only screen and (max-width: 768px) {
    display: none;
    }
}

.panel-title {

@media only screen and (min-width: 769px) {
font-size: 44rem;
margin-top: 10rem;
text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}

@media only screen and (max-width: 768px) {
max-width: 90%;
font-size: 21rem;
}

}

.panel-genres {
font-size: 17rem;
margin-top: 3rem;
color: #ffc67e;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    @media only screen and (max-width: 768px) {
    display: none;
    }
}
`;

const PanelDiv = styled.div`
font-weight: 600;
max-width: 50%;

@media only screen and (max-width: 768px) {
max-width: 90%;
}
`;

function Header({
  imageUrl, title, releaseDate, id, genreIds, genresMovieMap,
}) {
  const parsedDate = getYearAndMonth(releaseDate);
  return (
    <PanelContainer>
      <FeaturedImage imageUrl={imageUrl} />
      <Panel>
        <PanelDiv className="panel-date">{parsedDate}</PanelDiv>
        <PanelDiv className="panel-title">{ title }</PanelDiv>
        <PanelDiv className="panel-genres">
          {genreIds.slice(0, 3).map((genre) => genresMovieMap[genre]).join(' • ')}
        </PanelDiv>
        <FeaturedButton id={id}>
          Check it out!
        </FeaturedButton>
        <SwipeSVG className="cover" />
      </Panel>

    </PanelContainer>
  );
}

export default Header;
