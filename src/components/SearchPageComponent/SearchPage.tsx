import React from 'react';
import { SearchBar } from '../SearchBarComponent/SearchBar';

export const SearchPage = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // setCity(e.target.value);
  };

  return (
    <div>
      <SearchBar
        placeHolder={'Search...'}
        handleChange={(event) => handleSearch(event)}
      />
    </div>
  );
};
