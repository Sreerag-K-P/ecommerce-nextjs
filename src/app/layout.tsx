import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowmason",
  description: "We Make Your Wallet Cry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
