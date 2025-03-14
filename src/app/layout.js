import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import BackToTop from './Components/Shared/BackToTop/BackToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Debug Titans',
  description: 'Generated by Debug Titans Teams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <BackToTop></BackToTop>
      </body>
    </html>
  );
}
