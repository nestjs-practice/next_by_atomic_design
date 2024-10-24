import { FC, ReactNode } from 'react';
import Header from '@/components/organisms/Header/Header';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import Footer from '@/components/organisms/Footer/Footer';

interface DashboardTemplateProps {
  children: ReactNode;
}

const DashboardTemplate: FC<DashboardTemplateProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <Header />

      {/* 본문 */}
      <div className="flex flex-1">
        {/* 사이드바 */}
        <Sidebar />

        {/* 메인 콘텐츠 */}
        <main className="flex-1 p-4">
          {/* 위젯 패널 */}
          {/*<WidgetPanel />*/}
          {children}
        </main>
      </div>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default DashboardTemplate;