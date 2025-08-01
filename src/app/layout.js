import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dev-Hire - Hire Top Developers",
  description: "Responsive Next.js app with theme toggle assignment",
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