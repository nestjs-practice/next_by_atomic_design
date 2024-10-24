import React, { FC, ImgHTMLAttributes } from 'react';
import clsx from 'clsx';

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: 'small' | 'medium' | 'large';
  alt: string;
};

const sizeClasses = {
  small: 'h-8 w-8',
  medium: 'h-12 w-12',
  large: 'h-16 w-16',
};

const Avatar: FC<AvatarProps> = ({ size = 'medium', className, alt, ...props }) => {
  return (
    <img
      className={clsx(
        'rounded-full object-cover',
        sizeClasses[size],
        className
      )}
      alt={alt}
      {...props}
    />
  );
};

export default Avatar;
