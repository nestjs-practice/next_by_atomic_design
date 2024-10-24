import { FC, ReactNode, ComponentProps } from 'react';

interface TableRowProps extends ComponentProps<'tr'> {
  children: ReactNode;
}

const TableRow: FC<TableRowProps> = ({ children, className, ...props }) => {
  return (
    <tr
      className={`hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
};

export default TableRow;