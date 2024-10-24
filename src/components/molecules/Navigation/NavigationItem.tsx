import { FC } from 'react';
import Link from '@/components/atoms/Link/Link';
import Icon from '@/components/atoms/Icon/Icon';

interface NavigationItemProps {
  href: string;
  icon: 'home' | 'search' | 'user' | 'settings'; // Icon 이름 추가
  label: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ href, icon, label }) => {
  return (
    <Link href={href} className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
      <Icon name={icon} className="w-5 h-5 text-gray-500" />
      <span className="text-gray-700">{label}</span>
    </Link>
  );
};

export default NavigationItem;