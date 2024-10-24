import { FC, ReactNode } from 'react';
import TableRow from '@/components/atoms/Table/TableRow';
import TableCell from '@/components/atoms/Table/TableCell';

interface TableBodyProps {
  rows: {
    [key: string]: ReactNode;
  }[];
}

const TableBody: FC<TableBodyProps> = ({ rows }) => {
  return (
    <tbody>
    {rows.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {Object.values(row).map((cell, cellIndex) => (
          <TableCell key={cellIndex}>{cell}</TableCell>
        ))}
      </TableRow>
    ))}
    </tbody>
  );
};

export default TableBody;