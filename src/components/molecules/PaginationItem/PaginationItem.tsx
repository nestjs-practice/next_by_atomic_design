import { FC } from 'react';
import PaginationButton from '@/components/atoms/PaginationButton/PaginationButton';
import Icon from '@/components/atoms/Icon/Icon';

interface PaginationItemProps {
  type: 'previous' | 'next' | 'page';
  pageNumber?: number;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const PaginationItem: FC<PaginationItemProps> = ({ type, pageNumber, isActive, isDisabled, onClick }) => {
  if (type === 'previous') {
    return (
      <PaginationButton
        isDisabled={isDisabled}
        onClick={onClick}
        aria-label="Previous Page"
      >
        <Icon name="leftArrow" className="w-4 h-4" />
      </PaginationButton>
    );
  }

  if (type === 'next') {
    return (
      <PaginationButton
        isDisabled={isDisabled}
        onClick={onClick}
        aria-label="Next Page"
      >
        <Icon name="rightArrow" className="w-4 h-4" />
      </PaginationButton>
    );
  }

  return (
    <PaginationButton
      isActive={isActive}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {pageNumber}
    </PaginationButton>
  );
};

export default PaginationItem;