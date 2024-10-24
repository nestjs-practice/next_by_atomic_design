import React, { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error = false, className, ...props }, ref) => {
    return (
      <label className={clsx('flex items-center space-x-2', className)}>
        <input
          type="radio"
          ref={ref}
          className={clsx(
            'h-4 w-4 text-blue-600 border-gray-300',
            error && 'border-red-500'
          )}
          {...props}
        />
        {label && <span className="text-sm text-gray-700">{label}</span>}
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;