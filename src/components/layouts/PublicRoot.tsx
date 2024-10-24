import { FC, ReactNode } from 'react';
import Footer from '@/components/organisms/Footer/Footer';

interface PublicRootProps {
  children: ReactNode;
}

const PublicRoot: FC<PublicRootProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 공개용 헤더 */}
      {/*<PublicHeader />*/}

      {/* 메인 콘텐츠 */}
      <main className="flex-1 p-4">
        {children}
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default PublicRoot;