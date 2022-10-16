import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { getStarColor } from '../../utils/formatUtils';
import Chip from './Chip.style';

const Star = styled(Chip)`
    border-radius: 15rem;
    margin-left: 12rem;
    color: ${(props) => props.color};
    .star.icon {
    color: ${(props) => props.color};
    font-size: 12rem;
    }
`;

function Rating({ rating }) {
  return (
    <Star color={getStarColor(rating)}>
      <Icon name="star" />
      {' '}
      {rating}
    </Star>
  );
}

export default Rating;
