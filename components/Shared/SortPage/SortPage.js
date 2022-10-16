import { useRouter } from 'next/router';
import Select from 'react-select';
import { Icon, Pagination } from 'semantic-ui-react';
import styled from 'styled-components';

import scrollToTop from '../../../utils/scrollToTop';
import * as S from './SortPage.style';
import ContentItem from '../ContentItem/ContentItem';
import { getYear } from '../../../utils/formatUtils';

const customStyles = {
  container: (provided) => ({
    ...provided,
    marginBottom: '40rem',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'gray',
    backgroundColor: state.isSelected ? 'rgba(48,48,48,0.74)' : state.isFocused ? '#161616' : '#0d0d0d',
    width: 200,

    ':active': {
      backgroundColor: '#a4a4a4',
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: 200,
    backgroundColor: '#0d0d0d',
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: '#0d0d0d',
    width: 200,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
};

const FiltersContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 500rem;
margin: 0 auto;
padding: 0 15rem;
align-items: center;

@media only screen and (max-width: 470px) {
flex-direction: column;
}
`;


const FilterContainer = styled.div`

.title {
color: #d2d2d2;
margin-bottom: 7rem;
font-size: 15rem;
}

`;

const mediaPath = (mediaType) => (mediaType === 'movie' ? 'movies' : 'shows');
export const getOption = (options, value) => options.find((option) => option.value === value);

function SortPage({
  results, sortOptions, mediaType, totalPages, genresOptions,
}) {
  const router = useRouter();
  const { page = '1', sortBy = sortOptions[0].value, genre = '' } = router.query;
  const sortOption = getOption(sortOptions, sortBy);
  const genreOption = getOption(genresOptions, Number(genre));

  const handPageChange = (event, data) => {
    if (data.activePage === 1 && sortBy === sortOptions[0].value && !genre) {
      router.push(`/${mediaPath(mediaType)}`).then(scrollToTop());
    } else {
      router.push(`/${mediaPath(mediaType)}?sortBy=${sortBy}${genre ? `&genre=${genre}` : ''}&page=${data.activePage}`).then(scrollToTop());
    }
  };

  const handleSortDropdownChange = (selectedOption) => router.push(`/${mediaPath(mediaType)}?sortBy=${selectedOption.value}${genre ? `&genre=${genre}` : ''}&page=1`).then(scrollToTop());
  const handleGenreDropdownChange = (selectedOption) => router.push(`/${mediaPath(mediaType)}?sortBy=${sortBy}${selectedOption ? `&genre=${selectedOption.value}` : ''}&page=1`).then(scrollToTop());

  return (
    <S.GridContainer>
      <S.FireText>
        <h2>
          <span>{mediaType === 'movie' ? 'movies' : 'tv shows'}</span>
        </h2>
      </S.FireText>
      <FiltersContainer>
        <FilterContainer>
          <div className="title">Sort By:</div>
          <Select
            styles={customStyles}
            options={sortOptions}
            value={sortOption || sortOptions[0]}
            onChange={handleSortDropdownChange}
            isSearchable={false}
            placeholder="Sort by..."
          />
        </FilterContainer>
        <FilterContainer>
          <div className="title">Genre:</div>
          <Select
            styles={customStyles}
            options={genresOptions}
            value={genreOption || null}
            onChange={handleGenreDropdownChange}
            isSearchable={false}
            placeholder="Choose genre"
            isClearable
          />
        </FilterContainer>
      </FiltersContainer>
      <S.ContentGrid>
        {results.map((elem) => (
          <ContentItem
            key={elem.id}
            id={elem.id}
            clientName={elem.title}
            mediaType={mediaType}
            releaseDate={getYear(elem.releaseDate)}
            clientUrl={elem.imageUrl ? `https://image.tmdb.org/t/p/w300/${elem.imageUrl}` : '/not_available.png'}
          />
        ))}
      </S.ContentGrid>
      <Pagination
        activePage={page}
        totalPages={totalPages}
        onPageChange={handPageChange}
        siblingRange={2}
        boundaryRange={0}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        prevItem={{ content: <Icon name="angle left" />, icon: true }}
        nextItem={{ content: <Icon name="angle right" />, icon: true }}
      />
    </S.GridContainer>
  );
}


export default SortPage;
