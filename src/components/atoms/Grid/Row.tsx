import { FC, ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
  className?: string;
}

const Row: FC<RowProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-wrap -mx-4 ${className}`}>
      {children}
    </div>
  );
};

export default Row;