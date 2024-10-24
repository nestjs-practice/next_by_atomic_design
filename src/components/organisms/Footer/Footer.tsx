import { FC } from 'react';
import Link from '@/components/atoms/Link/Link';
import Icon from '@/components/atoms/Icon/Icon';
import Text from '@/components/atoms/Typography/Text'

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* 저작권 정보 */}
        <Text className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </Text>

        {/* 링크 목록 */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact Us
          </Link>
        </div>

        {/* 소셜 미디어 아이콘 */}
        <div className="flex space-x-3">
          <Link href="https://facebook.com" aria-label="Facebook">
            <Icon name="facebook" className="w-5 h-5 hover:text-blue-500" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <Icon name="twitter" className="w-5 h-5 hover:text-blue-400" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <Icon name="instagram" className="w-5 h-5 hover:text-pink-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;