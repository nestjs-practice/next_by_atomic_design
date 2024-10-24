import { FC, LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

const Label: FC<LabelProps> = ({ children, className, required = false, ...props }) => {
  return (
    <label
      {...props}
      className={clsx('block text-sm font-medium text-gray-700', className)}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;