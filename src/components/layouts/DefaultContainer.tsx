import React, { FC, ReactNode } from 'react';
import Header from '@/components/organisms/Header/Header';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import Footer from '@/components/organisms/Footer/Footer';


interface DefaultContainerProps {
  children: ReactNode;
}

const DefaultContainer: FC<DefaultContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <Header />

      <div className="flex flex-1">
        {/* 사이드바 */}
        <Sidebar />

        {/* 메인 콘텐츠 */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default DefaultContainer;