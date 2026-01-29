import Sidebar from "@/Components/Sidebar";
import "./globals.css";
import Header from "@/Components/Header";
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
        <div className="main flex">
<div className="sidebarWrapper w-[18%] h-screen ">
<Sidebar />
</div>
<div className="rightContent w-[82%] ">
  <Header/>
 <div className="p-3 pt-20 px-3">
 {children}
    </div>  
</div>
        </div>
        </ThemeProvider>
       </body>
    </html>
  );
}
