import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

export type TextProps = {
  children: ReactNode;
  className?: string;
};

const Text: FC<TextProps> = ({ children, className }) => {
  return (
    <p className={clsx('text-base text-gray-700', className)}>
      {children}
    </p>
  );
};

export default Text;