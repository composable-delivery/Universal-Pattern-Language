import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('YourApplicationID', 'YourSearchOnlyAPIKey');

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <InstantSearch searchClient={searchClient} indexName="your_index_name">
      <SearchBox onChange={(event) => setQuery(event.currentTarget.value)} />
      <Hits />
    </InstantSearch>
  );
};

export default Search;
