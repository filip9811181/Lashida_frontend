import type { Metadata } from 'next';
import { Baskervville, Gluten, Inter, Nerko_One, Patrick_Hand, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';
import Providers from './providers';

// Local Flick font
const flick = localFont({
  src: './fonts/Flick.otf',
  variable: '--font-flick',
  weight: '400',
});

// Local BrittiSansTrial font
const brittiSansTrial = localFont({
  src: [
    {
      path: './fonts/BrittiSansTrial-Regular-BF6757bfd47ffbf.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BrittiSansTrial-Semibold-BF6757bfd443a8a.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/BrittiSansTrial-Bold-BF6757bfd4a96ed.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-britti-sans-trial',
});

// Google Fonts
const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  variable: '--font-patrick-hand',
  weight: '400',
});

const nerkoOne = Nerko_One({
  subsets: ['latin'],
  variable: '--font-nerko-one',
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const gluten = Gluten({
  subsets: ['latin'],
  variable: '--font-gluten',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal'],
});

const baskervville = Baskervville({
  subsets: ['latin'],
  variable: '--font-baskervville',
  weight: ['400'], // Baskervville supports '400' for normal and can include 'italic' style if needed
  style: ['normal', 'italic'], // Include italic if you need both styles
});

export const metadata: Metadata = {
  title: 'LaShiba Inu',
  description:
    'LaShiba Inu is the unruly child of two cultural powerhouses; the playful chaos of Labubu and the viral magic of Shiba. Part collectible grail, part crypto degen’s fever dream, LaShiba Inu isn’t just another meme it’s a full-blown phenomenon!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${flick.variable} ${patrickHand.variable} ${nerkoOne.variable} ${inter.variable} ${gluten.variable} ${brittiSansTrial.variable} ${poppins.variable} ${baskervville.variable} antialiased`}
      >
        <div className='flex flex-col'>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
