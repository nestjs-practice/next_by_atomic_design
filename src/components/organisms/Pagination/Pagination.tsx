import { FC } from 'react';
import PaginationItem from '@/components/molecules/PaginationItem/PaginationItem';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex items-center justify-center space-x-1 mt-4">
      {/* 이전 버튼 */}
      <PaginationItem
        type="previous"
        isDisabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      {/* 페이지 번호 */}
      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={index} className="px-3 py-1">
              ...
            </span>
          );
        }

        return (
          <PaginationItem
            key={index}
            type="page"
            pageNumber={page as number}
            isActive={currentPage === page}
            onClick={() => onPageChange(page as number)}
          />
        );
      })}

      {/* 다음 버튼 */}
      <PaginationItem
        type="next"
        isDisabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;