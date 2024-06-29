import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins(
  { 
    subsets: ["latin"],
    weight:['400','500','600','700'],
    variable:'--font-poppins',

  });

export const metadata: Metadata = {
  title: "Eventu",
  description: "we will let you know about the events",
  icons:{
    icon:'./assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>
        <div>{children}</div></body>
    </html>
    </ClerkProvider>
  );
}
