import React, { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  block?: boolean;
  error?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ block = false, error = false, className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={clsx(
          'border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
          error ? 'border-red-500' : 'border-gray-300',
          block && 'w-full',
          className
        )}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;