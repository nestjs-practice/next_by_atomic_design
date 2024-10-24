import { ComponentProps, FC, ReactNode } from 'react';

interface TableCellProps extends ComponentProps<'td'> {
  children: ReactNode;
}

const TableCell: FC<TableCellProps> = ({ children, className, ...props }) => {
  return (
    <td
      className={`px-4 py-2 border-b border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </td>
  );
};

export default TableCell;