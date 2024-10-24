import React, { SelectHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: boolean;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error = false, className, children, ...props }, ref) => {
    return (
      <div className={clsx('flex flex-col space-y-1', className)}>
        {label && <label className="text-sm text-gray-700">{label}</label>}
        <select
          ref={ref}
          className={clsx(
            'border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
            error ? 'border-red-500' : 'border-gray-300'
          )}
          {...props}
        >
          {children}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;