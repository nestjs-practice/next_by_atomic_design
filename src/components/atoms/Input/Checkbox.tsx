import React, { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error = false, className, ...props }, ref) => {
    return (
      <label className={clsx('flex items-center space-x-2', className)}>
        <input
          type="checkbox"
          ref={ref}
          className={clsx(
            'h-4 w-4 text-blue-600 border-gray-300 rounded',
            error && 'border-red-500'
          )}
          {...props}
        />
        {label && <span className="text-sm text-gray-700">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;