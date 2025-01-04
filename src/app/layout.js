import { Inter, Calistoga } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['400', '500', '600', '700']
})
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ['400'],
})

export const metadata = {
  title: "profile",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable}  antialiased bg-gradient-to-r from-gray-900 to via-indigo-900 to-gray-800 text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
