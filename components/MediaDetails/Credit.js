import styled from 'styled-components';

const CreditContainer = styled.div`
    padding-top: 10rem;
    margin-bottom: 10rem;
    max-width: 110rem;
    justify-self: center;
`;

const CreditImageContainer = styled.div`
overflow: hidden;
    max-height: 110rem;
    max-width: 110rem;
    border-radius: 50%;
`;

const CreditImage = styled.img`
    width: 110rem;
    height: 110rem;
    object-fit: cover;
    ${(props) => props.imageDefined && 'object-position: 0px -14.5px;'}
`;

const CreditText = styled.div`
    margin-top: 9rem;
    font-weight: 500;
    font-size: 13rem;
    opacity: .85;
    color: #bdbdbd;
`;

const CreditTitle = styled.div`
font-size: 16rem;
`;

const NOT_DEFINED_GENDER = 0;
const FEMALE_GENDER = 1;
const MALE_GENDER = 2;

function Credit({
  title, imageUrl, text, gender,
}) {
  let crewImage = `https://image.tmdb.org/t/p/w300_and_h450_face${imageUrl}`;
  if (!imageUrl) {
    if (gender === NOT_DEFINED_GENDER || gender === MALE_GENDER) {
      crewImage = '/man-placeholder.jpg';
    } else if (gender === FEMALE_GENDER) {
      crewImage = '/woman-placeholder.jpg';
    }
  }

  return (
    <CreditContainer>
      {title && <CreditTitle>{title}</CreditTitle>}
      <CreditImageContainer>
        <CreditImage src={crewImage} imageDefined={!!imageUrl} />
      </CreditImageContainer>
      <CreditText>{text}</CreditText>
    </CreditContainer>
  );
}

export default Credit;
