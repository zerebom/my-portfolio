import type { Metadata } from 'next';
import { Navbar } from './components/nav';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';
// import { Zen_Kaku_Gothic_New } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: 'Kokoro Higuchi',
    template: '%s | Kokoro Higuchi',
  },
  description: 'Developer, data scientist and blogger.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Kokoro Higuchi',
    description: 'Developer, data scientist and blogger',
    siteName: 'Kokoro Higuchi',
    locale: 'jp_JP',
    type: 'website',
  },
  twitter: {
    title: 'Kokoro Higuchi',
    card: 'summary_large_image',
  },
};

const RobotoSlabFont = Roboto_Slab({ weight: '400', subsets: ['latin'] });
// const ZenKakuFont
const cx = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={cx(RobotoSlabFont.className)}>
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
