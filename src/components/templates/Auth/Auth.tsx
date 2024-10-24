import { FC, ReactNode } from 'react';
import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/organisms/Footer/Footer';

interface AuthTemplateProps {
  children: ReactNode;
}

const AuthTemplate: FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <Header />

      {/* 본문 */}
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow">
          {children}
        </div>
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default AuthTemplate;