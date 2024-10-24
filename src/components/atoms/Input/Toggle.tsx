import React, { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

const Toggle = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, error = false, className, ...props }, ref) => {
    return (
      <label className={clsx('flex items-center space-x-2', className)}>
        <span className="relative inline-flex items-center h-6 rounded-full w-11">
          <input
            type="checkbox"
            ref={ref}
            className={clsx(
              'sr-only',
              'peer',
              'focus:outline-none focus:ring-2 focus:ring-blue-500',
              error ? 'border-red-500' : 'border-gray-300'
            )}
            {...props}
          />
          <span
            className={clsx(
              'w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors',
              'after:absolute after:content-[""] after:transition-transform',
              'after:absolute after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4',
              'peer-checked:after:translate-x-full peer-checked:after:border-white'
            )}
          ></span>
        </span>
        {label && <span className="text-sm text-gray-700">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = 'Switch';

export default Toggle;