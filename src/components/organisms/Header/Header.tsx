import React, { FC } from 'react';
import Link from '@/components/atoms/Link/Link';
import SearchBar from '@/components/molecules/Search/Search';
import Icon from '@/components/atoms/Icon/Icon';
import Avatar from '@/components/atoms/Avatar/Avatar';
import Dropdown from '@/components/molecules/Dropdown/Dropdown';


const Header: FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // 검색 로직 추가
  };

  const handleProfileAction = (action: string) => {
    console.log(`Profile action: ${action}`);
    // 프로필 관련 로직 추가
  };

  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* 로고 */}
      <div>
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>
      </div>

      {/* 검색 바 */}
      <div className="flex-1 mx-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* 네비게이션 및 사용자 메뉴 */}
      <div className="flex items-center space-x-4">
        <Link href="/home" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
          <Icon name="home" className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
          <Icon name="info" className="w-5 h-5" />
          <span>About</span>
        </Link>
        {/* 사용자 프로필 드롭다운 메뉴 */}
        <Dropdown
          // label={
          //   <Avatar src="/images/user.jpg" alt="User Avatar" size="small" />
          // }
          label="hader"
          items={[
            { label: 'Profile', onClick: () => handleProfileAction('profile') },
            { label: 'Settings', onClick: () => handleProfileAction('settings') },
            { label: 'Logout', onClick: () => handleProfileAction('logout') },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;