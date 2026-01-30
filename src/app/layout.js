import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./footer/page";
import FloatingMessageButton from "./components/FloatingMessageButton";
import Theme from "./components/Theme";
export const metadata = {
  title: "Swift-Stay",
  description: "House Rent business",
};

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black overflow-x-hidden">
        <ThemeProvider>
          <Navbar/>
          {children}
          <FloatingMessageButton/>
          <Theme/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
