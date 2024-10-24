import { FC, ReactNode } from 'react';

export interface ColumnProps {
  children: ReactNode;
  span?: number; // 기본 span (모바일)
  sm?: number; // 작은 화면 (sm)
  md?: number; // 중간 화면 (md)
  lg?: number; // 큰 화면 (lg)
  xl?: number; // 초대형 화면 (xl)
  className?: string;
}

const Column: FC<ColumnProps> = ({ children, span = 12, sm, md, lg, xl, className = '' }) => {
  // Tailwind CSS의 그리드 시스템을 사용하여 span에 따라 width 조정
  const baseClass = span === 12 ? 'w-full' : `w-${span}/12`;
  const smClass = sm ? `sm:w-${sm}/12` : '';
  const mdClass = md ? `md:w-${md}/12` : '';
  const lgClass = lg ? `lg:w-${lg}/12` : '';
  const xlClass = xl ? `xl:w-${xl}/12` : '';

  return (
    <div className={`px-4 ${baseClass} ${smClass} ${mdClass} ${lgClass} ${xlClass} ${className}`}>
      {children}
    </div>
  );
};

export default Column;