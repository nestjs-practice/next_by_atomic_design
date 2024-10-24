import { ComponentProps, FC, ReactNode } from 'react';

interface TableHeaderProps extends ComponentProps<'th'> {
  children: ReactNode;
}

const TableHeader: FC<TableHeaderProps> = ({ children, className, ...props }) => {
  return (
    <th
      className={`px-4 py-2 border-b border-gray-300 text-left text-sm font-medium text-gray-700 ${className}`}
      {...props}
    >
      {children}
    </th>
  );
};

export default TableHeader;