import "./globals.css";
import { EB_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

export const metadata = {
  title: "Portfolio | Gavin Durai",
  description: "Personal portfolio of Gavin Durai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={garamond.variable}>
      <body className="font-sans antialiased bg-[#274472] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}