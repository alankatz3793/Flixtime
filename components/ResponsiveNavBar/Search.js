import styled from 'styled-components';
import { Icon, Input } from 'semantic-ui-react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SEARCH_ROUTE } from '../../pages/api/routes';
import scrollToTop from '../../utils/scrollToTop';

const SearchContainer = styled.div`

input {
border-radius: 20px !important;
background-color: rgba(255, 255, 255, 0.2) !important;
color: white !important;
border: 1px solid #0499ff !important;
outline: none !important;

@media only screen and (max-width: 768px) {
background-color: rgba(255,255,255,0.1) !important;
border: none !important;
}
}

i {
color:#0499ff !important;
background: rgba(255, 255, 255, 0.7);
user-select: none !important;
@media only screen and (max-width: 768px) {
color:#000000 !important;
}
}
`;

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleChange = (e, { value }) => {
    setSearchTerm(value);
  };

  const innerOnSearch = () => {
    if (searchTerm) {
      router.push(`/${SEARCH_ROUTE}?term=${searchTerm}`).then(scrollToTop());
      setSearchTerm('');
      onSearch();
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && searchTerm) { // enter
      innerOnSearch();
    }
  };

  return (
    <SearchContainer>
      <Input
        icon={<Icon name="search" onClick={() => innerOnSearch()} circular link />}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </SearchContainer>
  );
}

Search.defaultProps = {
  onSearch: () => {},
};

export default Search;
