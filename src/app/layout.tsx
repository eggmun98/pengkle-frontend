import Header from '@/_components/layouts/Header/Header';
import Sidebar from '@/_components/layouts/Sidebar/Sidebar';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'pengkle - 핑클 익명 SNS',
  description: '익명 SNS에서 소통해보세요!',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        sizes: '32x32',
      },
      {
        url: '/images/logo.png',
        sizes: '64x64',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-row h-full">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
