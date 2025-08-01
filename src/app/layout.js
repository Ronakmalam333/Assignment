import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "TechCo - Modern Web Solutions",
  description: "Responsive Next.js app with theme toggle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar/>
          <main>
            <div className="container">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}