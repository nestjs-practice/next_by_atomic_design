import { FC } from 'react';
import TableHeader from '@/components/atoms/Table/TableHeader';
import Icon from '@/components/atoms/Icon/Icon';

interface TableHeadProps {
  columns: {
    label: string;
    sortable?: boolean;
    onSort?: () => void;
    sortDirection?: 'asc' | 'desc';
  }[];
}

const TableHead: FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead>
    <tr>
      {columns.map((column, index) => (
        <TableHeader key={index}>
          <div className="flex items-center">
            <span>{column.label}</span>
            {column.sortable && (
              <button
                onClick={column.onSort}
                className="ml-2 focus:outline-none"
                aria-label={`Sort by ${column.label}`}
              >
                {column.sortDirection === 'asc' ? (
                  <Icon name="arrowUp" className="w-4 h-4" />
                ) : (
                  <Icon name="arrowDown" className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </TableHeader>
      ))}
    </tr>
    </thead>
  );
};

export default TableHead;