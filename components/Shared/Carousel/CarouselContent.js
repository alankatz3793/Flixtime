import styled from 'styled-components';

import Carousel from './Carousel';
import FancyButton from '../../Home/FancyButton/FancyButton';

const CarouselContainer = styled.div`
 max-width: 1280rem;
 width: 100%;
 padding-bottom: 25rem;
 
 .slick-slider {
 cursor: grab;
 }
 
     @media only screen and (min-width: 769px) {
        padding: 0 35rem 25rem;
    }
`;

const LeftSideDiv = styled.div`
    color: #fff;
    font-size: 30rem;
    font-weight: 500;
    
    @media only screen and (max-width: 768px) {
        font-size: 25rem;
    }
    
        @media only screen and (max-width: 500px) {
        font-size: 20rem;
    }
`;

const ShowCaseContainer = styled.div`
background: transparent;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CarouselHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
    margin-bottom: 10rem;
    padding-right: 17rem;
    padding-left: 10rem;
    width: 100%;
`;

function CarouselContent({
  content, header, mediaType, linkPath,
}) {
  return (
    <ShowCaseContainer>
      <CarouselContainer>
        <CarouselHeader>
          <LeftSideDiv>
            {header}
          </LeftSideDiv>
          <FancyButton linkTo={linkPath} />
        </CarouselHeader>
        <Carousel content={content} mediaType={mediaType} />
        {/* <SwipeSVG className="onlyMobile" /> */}
      </CarouselContainer>
    </ShowCaseContainer>
  );
}

export default CarouselContent;
