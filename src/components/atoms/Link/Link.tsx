import React, { AnchorHTMLAttributes, FC } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  external?: boolean;
};

const Link: FC<LinkProps> = ({ href, external = false, className, children, ...props }) => {
  const isExternal = external || href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx('text-blue-600 hover:underline', className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={clsx('text-blue-600 hover:underline', className)} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;