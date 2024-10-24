import React, { FC } from 'react';
import clsx from 'clsx';

export type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
};

const sizeClasses = {
  small: 'h-4 w-4',
  medium: 'h-8 w-8',
  large: 'h-12 w-12',
};

const Spinner: FC<SpinnerProps> = ({ size = 'medium', color = 'text-blue-600', className }) => {
  return (
    <svg
      className={clsx('animate-spin', sizeClasses[size], color, className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  );
};

export default Spinner;