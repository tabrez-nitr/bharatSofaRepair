import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Title and Basic SEO
  title: 'Expert Sofa Repair in Noida & Gurugram | Custom Sofas',
  description: 'Top-rated sofa repair, custom new sofas, and fabric changes in Noida, Gurugram & Ghaziabad. Quality craftsmanship and doorstep service. Get a free quote!',
   keywords: [
    // Core Services
    'sofa repair',
    'sofa set repair',
    'couch repair',
    'custom sofa maker',
    'new sofa manufacturing',
    'sofa fabric change',
    'sofa upholstery service',
    'sofa reupholstery',
    'sofa polishing service',
    'wooden sofa polish',
    'furniture repair and polish',
    'leather sofa repair',
    
    // Location: Noida
    'sofa repair in Noida',
    'best sofa repair Noida Sector 110',
    'custom sofa maker Noida',
    'sofa fabric change in Noida',
    'sofa polishing service near Noida Sector 110',
    'furniture repair Noida',
    'doorstep sofa repair in Noida',

    // Location: Gurugram
    'sofa repair in Gurugram',
    'couch repair service Gurugram',
    'sofa reupholstery Gurugram',
    'new sofa set price in Gurugram',
    'affordable sofa polishing Gurugram',
    'leather sofa repair in Gurugram',

    // Location: Ghaziabad
    'sofa repair service Ghaziabad',
    'custom sofa manufacturing Ghaziabad',
    'sofa upholstery cost in Ghaziabad',
    'wooden sofa polish in Ghaziabad',
    'best furniture repair Ghaziabad',

    // Intent-Based
    'sofa repair near me',
    'sofa fabric change near me',
    'custom sofa makers near me',
    'furniture polishing service near me',
    'upholstery repair near me',
    'sofa set repair shop near me',

    // Long-Tail & Questions
    'cost to repair a 3-seater sofa',
    'how to change sofa fabric at home',
    'best fabric for sofa reupholstery',
    'wooden sofa polishing price in Noida',
    'get a new sofa made to order',
    'old sofa repair and service',
    'professional sofa cleaning and polishing'
  ],
  authors: [{ name: 'Bharat Sofa Services' }],

  // Social Sharing (Open Graph)
  openGraph: {
    title: 'Bharat Sofa Services',
    description: 'Premium sofa repair, custom new sofas, and fabric change services since 2012.',
    images: '/og-image.png', // Must be an absolute path from the `public` folder
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >
        {children}
         <SpeedInsights />
      </body>
    </html>
  );
}
