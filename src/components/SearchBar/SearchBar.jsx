import SearchForm from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

export const SearchBar = () => {
  return (
    <>
      <SearchForm />
      <SearchTypeSelector />
    </>
  );
};
