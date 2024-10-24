import React, { FC } from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon/Icon';


interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch }) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget.search.value;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <Input
        name="search"
        type="text"
        placeholder={placeholder}
        className="flex-1"
      />
      <Button type="submit" variant="primary" size="medium">
        <Icon name="search" className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default SearchBar;