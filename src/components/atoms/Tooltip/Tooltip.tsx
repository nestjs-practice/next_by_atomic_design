import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
};

const Tooltip: FC<TooltipProps> = ({ children, content, position = 'top', className }) => {
  return (
    <div className={clsx('relative flex items-center', className)}>
      {children}
      <div
        className={clsx(
          'absolute p-2 text-xs text-white bg-black rounded-md opacity-0 transition-opacity duration-200 pointer-events-none',
          'group-hover:opacity-100',
          position === 'top' && 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
          position === 'right' && 'left-full ml-2 top-1/2 transform -translate-y-1/2',
          position === 'bottom' && 'top-full mt-2 left-1/2 transform -translate-x-1/2',
          position === 'left' && 'right-full mr-2 top-1/2 transform -translate-y-1/2'
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;