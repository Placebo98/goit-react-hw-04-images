import { BsFillSearchHeartFill } from 'react-icons/bs';

import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
} from './Searchbar.styled.js';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarWrapper>
      <SearchBarForm
        onSubmit={event => {
          event.preventDefault();
          onSubmit(event.target.elements.query.value.toLowerCase().trim());
          event.target.reset();
        }}
      >
        <SearchBarButton type="submit">
          <BsFillSearchHeartFill size={25} color="black" />
        </SearchBarButton>
        <SearchBarInput name="query" type="text" placeholder="dog" />
      </SearchBarForm>
    </SearchBarWrapper>
  );
};
