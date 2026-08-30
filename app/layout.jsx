import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google';
import { Providers } from './providers';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-cormorant' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-dm-sans' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-dm-mono' });

export const metadata = {
  title: 'Vishwa Hitay',
  description: 'Shaping Better World for All.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
