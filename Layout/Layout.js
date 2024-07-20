import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { navlinks } from "@/utils/constants";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  const routeIndex = navlinks.findIndex(
    (navlink) => router.route === navlink.href
  );
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
      {routeIndex > -1 ? (
        <>
          <Header />
          <Navbar />
          {children}
        </>
      ) : (
        <h1>404 Page not Found</h1>
      )}
    </div>
  );
};

export default Layout;
