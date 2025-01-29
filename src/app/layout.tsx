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
    <html lang="ko">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 flex  flex-col items-center  justify-center  ">
              <div className="max-w-2xl w-full h-full bg-white rounded-t-3xl  scrollbar-hide overflow-y-auto h-[calc(100vh-76px)]">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
