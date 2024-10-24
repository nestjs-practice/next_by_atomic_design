import {ButtonHTMLAttributes, FC} from "react";
import clsx from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
};

const Button: FC<ButtonProps> = ({
                                     children,
                                     variant = 'primary',
                                     size = 'medium',
                                     className,
                                     ...props
                                 }) => {
    const baseStyles = 'rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles = variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500';
    const sizeStyles = size === 'small'
        ? 'px-2 py-1 text-sm'
        : size === 'large'
            ? 'px-4 py-2 text-lg'
            : 'px-3 py-2 text-md';

    return (
        <button
            className={clsx(baseStyles, variantStyles, sizeStyles, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;