import "./globals.css";
import ThemeProvider from "@/Context/ThemeContext";

export const metadata = {
  title: "Next Js Dashboard",
  description: "Admin Dashboard Build with Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <ThemeProvider >
        {children}
        </ThemeProvider>
       </body>
    </html>
  );
}
