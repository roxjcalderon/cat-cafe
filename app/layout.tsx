import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"
import Image from "next/image"

import cowboyHat from './assets/images/cowboy_hat.svg';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitty Corral",
  description: "We have cats at home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Ultra&display=swap" rel="stylesheet"/>

        <div className="topNav">
            <div className="topNav">
              <Image src={cowboyHat} alt="cowboy hat logo" width={75} />
              <Link className="linkText" href="/"><h1 className="titleHeader"> Kitty Corral</h1></Link>
            </div>
            <ul className="topNavLinks">
              <li className="topNavLink"><Link className="linkText" href="/menu">Menu </Link></li>
              <li className="topNavLink"><Link className="linkText" href="/meet-the-cats">Meet the Cats</Link></li>
              <li className="topNavLink" ><Link className="linkText" href="/review-the-cats">Review the Cats</Link></li>
              <li className="topNavLink"><Link className="linkText" href="/about">About Us</Link></li>
            </ul>
        </div>

        {children}
        
        <div className="bottomNav"> 
          
        </div>
      </body>
    </html>
  );
}
