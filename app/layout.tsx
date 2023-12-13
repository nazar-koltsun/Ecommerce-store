import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';
import PreviewModal from '@/components/PreviewModal';
import { Toaster } from 'react-hot-toast';

import './globals.css';


const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ecommerce store',
  description: 'Ecommerce store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className + ' grid grid-rows-[min-content_1fr_min-content]'}>
        <PreviewModal />
        <Toaster />
        <Navbar />
        <Container className='py-8 px-[15px]'>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
