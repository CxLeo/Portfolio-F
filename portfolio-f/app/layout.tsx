import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBarComponents/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feiran Design",
  icons: {
    // icon: '/images/favicon/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className}  h-fit`}>
        <ThemeProvider 
          storageKey="themes"
          defaultTheme="light"
          // enableSystem={false}
          themes={['light','dark']} 

        >
          <NavBar /> 
          {children}
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
