import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "@/components/AppContext";
import {CartProvider} from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food delivery App",
  description: "Get your food fix in a flick, straight to your door, quick!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <AppProvider>
      <Header/>
        {children}
        <Footer/>
        </AppProvider>
        </CartProvider>
        </body>
    </html>
  );
}
