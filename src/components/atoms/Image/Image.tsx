import React, { FC } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import clsx from 'clsx';

export type ImageProps = NextImageProps & {
  className?: string;
};

const Image: FC<ImageProps> = ({ className, ...props }) => {
  return (
    <NextImage
      className={clsx('rounded-md object-cover', className)}
      {...props}
    />
  );
};

export default Image;