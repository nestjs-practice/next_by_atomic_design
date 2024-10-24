import { FC, useMemo, useState } from 'react';
import TableHead from '@/components/molecules/Table/TableHead';
import TableBody from '@/components/molecules/Table/TableBody';

interface Column {
  label: string;
  sortable?: boolean;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: {
    [key: string]: any;
  }[];
}

const Table: FC<TableProps> = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const sortedData = useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const handleSort = (accessor: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === accessor && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: accessor, direction });
  };

  const columnsWithSort = columns.map((col) => ({
    label: col.label,
    sortable: col.sortable,
    onSort: col.sortable ? () => handleSort(col.accessor) : undefined,
    sortDirection: sortConfig?.key === col.accessor ? sortConfig.direction : undefined,
  }));

  const tableRows = sortedData.map((item, rowIndex) => {
    const row: { [key: string]: React.ReactNode } = {};
    columns.forEach((col) => {
      row[col.accessor] = item[col.accessor];
    });
    return row;
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <TableHead columns={columnsWithSort} />
        <TableBody rows={tableRows} />
      </table>
    </div>
  );
};

export default Table;