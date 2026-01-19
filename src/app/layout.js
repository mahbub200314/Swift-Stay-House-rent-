import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Swift-Stay",
  description: "House Rent business",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-background1 pt-4">
        <ThemeProvider>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
