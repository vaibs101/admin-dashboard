import Sidebar from "@/Components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Next Js Dashboard",
  description: "Admin Dashboard Build with Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <div className="main flex">
<div className="sidebarWrapper w-[18%] h-screen ">
<Sidebar />
</div>
<div className="rightContent w-[82%] ">
 {children}
      
</div>
        </div>
       </body>
    </html>
  );
}
