import styled from 'styled-components';
import {
  getActors, getCreators, getReviews, getTrailer,
} from '../utils/mediaDetailsGetters';
import HeaderDetails from '../components/MediaDetails/HeaderDetails';
import { formatMinutes, getYearAndMonth } from '../utils/formatUtils';
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

function Show({
  details, credits, trailers, reviews,
}) {
  const trailerId = getTrailer(trailers);
  return (
    <>
      <HeaderDetails
        name={details.original_name}
        rating={details.vote_average}
        genres={details.genres}
        coverImage={details.backdrop_path}
      >
        <MovieProperties>
          <PropertyContainer>
            First Air Date
            <span>{getYearAndMonth(details.first_air_date)}</span>
          </PropertyContainer>
          {details.episode_run_time > 0 && (
          <PropertyContainer>
            Episode Run Time
            <span>{formatMinutes(details.episode_run_time)}</span>
          </PropertyContainer>
          )}
          <PropertyContainer>
            Networks
            <span>{details.networks.map((network) => network.name).join(', ')}</span>
          </PropertyContainer>
          <PropertyContainer>
            Seasons
            <span>{details.number_of_seasons}</span>
          </PropertyContainer>
          <PropertyContainer>
            Episodes
            <span>{details.number_of_episodes}</span>
          </PropertyContainer>
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
              {getCreators(details).map((crew) => (
                <Credit
                  key={crew.credit_id}
                  title="Creator"
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
  const mediaType = 'tv';
  const responseShow = await getDetails(id, mediaType);
  return { props: responseShow };
}

export default Show;
