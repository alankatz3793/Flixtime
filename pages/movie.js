import styled from 'styled-components';
import HeaderDetails from '../components/MediaDetails/HeaderDetails';
import {
  getActors, getDirectors, getProducers, getReviews, getTrailer, getWriters,
} from '../utils/mediaDetailsGetters';
import { formatMinutes, getYearAndMonth, numberWithCommas } from '../utils/formatUtils';
import SemanticUiEmbedded from '../components/MediaDetails/SemanticUiEmbedded';
import CreditList from '../components/MediaDetails/CreditList';
import Credit from '../components/MediaDetails/Credit';
import Review from '../components/MediaDetails/Review';
import { getDetails } from '../utils/fetchData';

const MovieContainer = styled.div`
max-width: 1400rem;
width: 100%;
padding: 20rem 0 0 20rem;
margin: 50rem auto;
color: #fff;

@media only screen and (max-width: 1150px) {
max-width: 800rem;
padding: 0 20rem;
}

@media only screen and (max-width: 768px) {
margin: 20rem auto 50rem;
}

`;


const MovieProperties = styled.div`
    max-width: 300rem;
    margin-top: 20rem;
`;

const PropertyContainer = styled.div`
margin-bottom: 10rem;
font-size: 20rem;
span {
font-size: 15rem;
color: gray;
margin-left: 14rem;
}

`;


const MainContainer = styled.div`
display: grid;
grid-template-columns: auto 450rem;
grid-column-gap: 70rem;
justify-content: space-between;
@media only screen and (max-width: 1150px) {
grid-template-columns: auto;
}
`;

const Overview = styled.div`
text-align: center;

div {
color: gray;
margin-top: 20rem;
}

h4 {
color: white;
font-size: 20rem;
}
`;


function Movie({
  details, credits, trailers, reviews,
}) {
  const trailerId = getTrailer(trailers);
  return (
    <>
      <HeaderDetails
        name={details.original_title}
        rating={details.vote_average}
        genres={details.genres}
        coverImage={details.backdrop_path}
      >
        <MovieProperties>
          <PropertyContainer>
            Release
            <span>{getYearAndMonth(details.release_date)}</span>
          </PropertyContainer>
          <PropertyContainer>
            Run Time
            <span>{formatMinutes(details.runtime)}</span>
          </PropertyContainer>
          {details.budget !== 0 && (
            <PropertyContainer>
              Bugdet
              <span>{`${numberWithCommas(details.budget)} $`}</span>
            </PropertyContainer>
          )}
          {details.revenue !== 0 && (
            <PropertyContainer>
              Revenue
              <span>{`${numberWithCommas(details.revenue)} $`}</span>
            </PropertyContainer>
          )}
        </MovieProperties>
      </HeaderDetails>
      <MovieContainer>
        <MainContainer>
          <Overview>
            <h4>Overview</h4>
            <div>{details.overview}</div>
            {trailerId && <SemanticUiEmbedded trailerId={trailerId} />}
          </Overview>
          <div>
            <CreditList listTitle="Crew">

              {getDirectors(credits).map((crew) => (
                <Credit
                  key={crew.credit_id}
                  title="Director"
                  imageUrl={crew.profile_path}
                  text={crew.name}
                  gender={crew.gender}
                />
              ))}
              {getProducers(credits).map((crew) => (
                <Credit
                  key={crew.credit_id}
                  title="Producer"
                  imageUrl={crew.profile_path}
                  text={crew.name}
                  gender={crew.gender}
                />
              ))}
              {getWriters(credits).map((crew) => (
                <Credit
                  key={crew.credit_id}
                  title="Writer"
                  imageUrl={crew.profile_path}
                  text={crew.name}
                  gender={crew.gender}
                />
              ))}
            </CreditList>
            <CreditList listTitle="Cast">
              {getActors(credits).map((crew) => (
                <Credit
                  key={crew.credit_id}
                  imageUrl={crew.profile_path}
                  text={`${crew.name} - ${crew.character}`}
                  gender={crew.gender}
                />
              ))}
            </CreditList>
          </div>
        </MainContainer>
        {getReviews(reviews).map((review) => <Review key={review.id} review={review} />)}
      </MovieContainer>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const mediaType = 'movie';
  const responseMovie = await getDetails(id, mediaType);
  return { props: responseMovie };
}

export default Movie;
