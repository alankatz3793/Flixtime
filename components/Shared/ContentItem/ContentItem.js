import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import StyledContentItem from './ContentItem.style';

const CarouselItemText = styled.div`
margin-top: 8rem;
`;

const UpperText = styled.p`
    color: #fff;
    font-size: 15rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
    max-width: 168rem;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const LowerText = styled.p`
color: grey;
    font-size: 13rem;
    font-weight: 400;
    margin: 0;
    padding-top: 3rem;
    max-width: 168rem;
`;

function ContentItem({
  clientName, clientUrl, mediaType, releaseDate, id,
}) {
  return (
    <StyledContentItem>
      <Link href={`/${mediaType}?id=${id}`}>
        <img alt={clientName} src={clientUrl} />
      </Link>
      <CarouselItemText>
        <UpperText>
          {clientName}
        </UpperText>
        <LowerText>
          {releaseDate}
        </LowerText>
      </CarouselItemText>
    </StyledContentItem>

  );
}

export default ContentItem;
