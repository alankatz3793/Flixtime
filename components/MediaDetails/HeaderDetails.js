import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import Chip from './Chip.style';

const MovieHeader = styled.header`
    padding-top: 50rem;
    padding-left: 70rem;
    max-width: 900rem;
    color: #fff;
    @media only screen and (max-width: 768px) {
flex-direction: column;
display: flex;
align-items: center;
padding: 35rem 10rem 20rem;
}
`;

const MovieTitle = styled.span`
    font-weight: 700;
    font-size: 35rem;
    line-height: 1.1;
    
@media only screen and (max-width: 768px) {
font-size: 25rem;
text-align: center;
}
`;

const GenresContainer = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 10rem;
`;

const HeaderContainer = styled.div`
height: 70vh;
display: flex;
align-items: center;
position: relative;

@media only screen and (max-width: 768px) {
flex-direction: column;
height: auto;
}
`;

const Cover = styled.div`

@media only screen and (min-width: 769px) {
background: linear-gradient(90deg, rgb(13, 13, 13), rgba(255, 255, 255, 0.05)), url(${(props) => `https://image.tmdb.org/t/p/w1280${props.imageUrl}`}) no-repeat top center / cover;
width: 70%;
height: 100%;
position: absolute;
top: 0;
right: 0;
z-index: -1;
}

@media only screen and (max-width: 768px) {
background: linear-gradient(0deg,#0d0d0d91,rgba(255, 255, 255, 0.05)), url(${(props) => `https://image.tmdb.org/t/p/w1280${props.imageUrl}`}) no-repeat top center / cover;
    width: 100%;
    margin-top: 65rem;
    height: 56.18vw;
}

@media only screen and (max-width: 500px) {
background: linear-gradient(0deg,#0d0d0d91,rgba(255, 255, 255, 0.05)), url(${(props) => `https://image.tmdb.org/t/p/w780${props.imageUrl}`}) no-repeat top center / cover;
}
`;


function HeaderDetails({
  name, rating, genres, coverImage, children,
}) {
  return (
    <HeaderContainer>
      <Cover imageUrl={coverImage} />
      <MovieHeader>
        <MovieTitle>
          {name}
          {rating !== 0 && <Rating rating={rating} />}
        </MovieTitle>

        <GenresContainer>
          {genres.slice(0, 3).map(((genre) => <Chip key={genre.id}>{genre.name}</Chip>))}
        </GenresContainer>
        {children}
      </MovieHeader>
    </HeaderContainer>
  );
}

export default HeaderDetails;
