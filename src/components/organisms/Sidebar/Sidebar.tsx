import React, { FC } from 'react';
import Avatar from '@/components/atoms/Avatar/Avatar';
import NavigationItem from '@/components/molecules/NavigationItem/NavigationItem';
import Text from '@/components/atoms/Typography/Text'


const Sidebar: FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col">
      {/* 사용자 프로필 */}
      <div className="flex items-center space-x-3 mb-6">
        <Avatar src="/images/user.jpg" alt="User Avatar" size="medium" />
        <div>
          <Text className="font-semibold">John Doe</Text>
          <Text className="text-sm text-gray-400">Admin</Text>
        </div>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavigationItem href="/dashboard" icon="home" label="Dashboard" />
          </li>
          <li>
            <NavigationItem href="/profile" icon="user" label="Profile" />
          </li>
          <li>
            <NavigationItem href="/settings" icon="settings" label="Settings" />
          </li>
          <li>
            <NavigationItem href="/reports" icon="report" label="Reports" />
          </li>
        </ul>
      </nav>

      {/* 로그아웃 버튼 */}
      <div>
        <NavigationItem href="/logout" icon="logout" label="Logout" />
      </div>
    </aside>
  );
};

export default Sidebar;