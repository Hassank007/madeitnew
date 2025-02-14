import { ContactProvider } from '@/app/context/ContactContext'
import { Geist, Geist_Mono, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import {Red_Hat_Display} from 'next/font/google'
import { QuoteProvider } from './context/QuoteContext';
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const redhatdisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-redhatdisplay',
})

export const metadata = {
  title: "MADE IT",
  description: "MADE IT - Transforming businesses with AI, Cloud Computing, Web3, and Data Analytics. Expert in software automation, AI & ML development, cloud solutions, mobile & web apps, and DevOps. Elevate efficiency and customer experience with MADE IT. Let's innovate together!",
  keywords: "MADE IT, business automation, AI solutions, machine learning, cloud computing, Web3, data analytics, DevOps, mobile app development, web development, software solutions, AWS, GCP, Azure, AI model training, CI/CD pipelines, AR/VR, XR integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
          className={`${montserrat.variable} ${redhatdisplay.variable} `}
      >
        <ContactProvider>
          <QuoteProvider>
        {children}
        </QuoteProvider>
        </ContactProvider>
      </body>
    </html>
  );
}
