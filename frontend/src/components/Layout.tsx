import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
    <LiveChat />
  </div>
);

export default Layout;
