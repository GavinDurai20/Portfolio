import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className="bg-[#274472] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}