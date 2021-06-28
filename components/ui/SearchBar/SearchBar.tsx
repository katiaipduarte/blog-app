import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { SearchBarContainer } from './SearchBar.style';

type Props = {
  find: (term: string) => void;
};

const SearchBar = (props: Props): JSX.Element => {
  const { find } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showClearButton, setShowClearButton] = useState<boolean>(false);

  const handleClearSearch = (): void => {
    setSearchTerm('');
    find('');
    setShowClearButton(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    find(event.target.value);
    setShowClearButton(event.target.value.length !== 0);
  };

  const handleMGBClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    if (searchTerm.length >= 3) {
      onClickSearchOption(searchTerm);
    }
  };

  const onClickSearchOption = (item: string): void => {
    if (item !== '') {
      setSearchTerm(item);
      find(item);
    }
  };

  return (
    <SearchBarContainer
      tabIndex={-1}
      role="searchbox"
      aria-label="Search article by name form"
    >
      <button
        id="search-term-btn"
        aria-label="Click to search"
        onClick={handleMGBClick}
        tabIndex={-1}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <input
        type="text"
        placeholder="Search article by name"
        value={searchTerm}
        maxLength={50}
        onChange={handleChange}
        role="search"
        aria-label="Search article by name"
      />
      <button
        id="clear-search-term-btn"
        aria-label="Click to clear search"
        onClick={handleClearSearch}
        style={{ visibility: showClearButton ? 'initial' : 'hidden' }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
