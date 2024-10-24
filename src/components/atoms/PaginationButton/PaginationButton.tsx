import { ButtonHTMLAttributes, FC } from 'react';

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isDisabled?: boolean;
}

const PaginationButton: FC<PaginationButtonProps> = ({ children, isActive, isDisabled, className, ...props }) => {
  let baseClasses = 'px-3 py-1 border border-gray-300 rounded-md focus:outline-none';

  if (isActive) {
    baseClasses += ' bg-blue-500 text-white border-blue-500';
  } else {
    baseClasses += ' bg-white text-gray-700 hover:bg-gray-100';
  }

  if (isDisabled) {
    baseClasses += ' opacity-50 cursor-not-allowed';
  }

  return (
    <button
      className={`${baseClasses} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default PaginationButton;