import styled from 'styled-components';
import redirect from '../utils/redirect';
import * as S from '../components/Shared/SortPage/SortPage.style';
import ContentItem from '../components/Shared/ContentItem/ContentItem';
import { getYear } from '../utils/formatUtils';
import { getSearch } from '../utils/fetchData';

const SearchTitle = styled.div`
margin: 100rem auto 30rem;
font-size: 35rem;
overflow-wrap: break-word;
color: white;
background: linear-gradient(180deg, #ffffff, #ff9600);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

function Search({ results, term }) {
  return (
    <S.GridContainer>
      <SearchTitle>
        {results.length ? `Search results for "${term}"` : `Sorry, no results for "${term}"`}
      </SearchTitle>
      <S.ContentGrid>
        {results.map((elem) => (
          <ContentItem
            key={elem.id}
            id={elem.id}
            clientName={elem.title}
            mediaType={elem.mediaType}
            releaseDate={getYear(elem.releaseDate)}
            clientUrl={elem.imageUrl ? `https://image.tmdb.org/t/p/w300/${elem.imageUrl}` : '/not_available.png'}
          />
        ))}
      </S.ContentGrid>
    </S.GridContainer>
  );
}

export async function getServerSideProps(ctx) {
  const { term = '' } = ctx.query;
  if (!term) {
    redirect(ctx, '/');
  }

  const responseSearch = await getSearch(term);
  const { searchResults } = responseSearch;

  return { props: { results: searchResults, term } };
}

export default Search;
