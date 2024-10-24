import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

export type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const Heading: FC<HeadingProps> = ({ children, level = 1, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={clsx('font-bold text-gray-900', className)}>
      {children}
    </Tag>
  );
};

export default Heading;