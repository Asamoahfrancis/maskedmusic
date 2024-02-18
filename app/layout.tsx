import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalCssPriority from "./context/GlobalcssPriority";
import MaterialReset from "./context/MaterialUiReset";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masked Music",
  description: "Free Afrobeat Music ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[2000px] mx-auto">
          <MaterialReset>
            <GlobalCssPriority>{children}</GlobalCssPriority>{" "}
          </MaterialReset>
        </div>
      </body>
    </html>
  );
}
