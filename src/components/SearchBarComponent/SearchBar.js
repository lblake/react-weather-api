import React from 'react';

export const SearchBar = ({ placeHolder, handleChange }) => {
  // const inputRef = useRef < HTMLInputElement > null;
  return (
    <div>
      <form>
        {/* <label htmlFor='search-bar'>Search</label> */}

        <input
          type='search'
          placeholder={placeHolder}
          onChange={handleChange}
          id='search-bar'
          // ref={inputRef}
        />
        <button type='submit'>Get weather</button>
      </form>
    </div>
  );
};
