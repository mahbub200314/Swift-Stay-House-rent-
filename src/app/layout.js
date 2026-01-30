import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./footer/page";

export const metadata = {
  title: "Swift-Stay",
  description: "House Rent business",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
