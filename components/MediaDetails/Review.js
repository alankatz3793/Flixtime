import { Label, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const ReviewAuthor = styled.div`
font-size: 26rem;
font-family: Luckiest Guy,sans-serif;
letter-spacing: 1.5rem;
padding-left: 15rem;
`;

const ReviewContent = styled.div`
white-space: pre-wrap;
font-style: italic;
padding: 15rem 15rem 0;
`;

function Review({ review }) {
  return (
    <Segment
      inverted
      raised
      style={{
        fontSize: '15rem', padding: '20rem 0', maxWidth: '100%', margin: '20rem auto', boxShadow: '-3rem 3rem 5rem 0 rgba(193, 196, 199, 0.28), 1px -1px 5px 0px rgba(193, 196, 199, 0.28)',
      }}
    >
      <Label color="orange" ribbon style={{ fontSize: '14px', marginBottom: '20rem' }}>
        Review
      </Label>
      <ReviewAuthor>
        {`By: ${review.author}`}
      </ReviewAuthor>
      <ReviewContent>
        {`"${review.content}"`}
      </ReviewContent>
    </Segment>
  );
}

export default Review;
