import Navbar from "../../shared/components/Navbar/Navbar";
import Footer from "../../shared/components/Footer/Footer";
import { useRouter } from "next/router";
import  Head  from "next/head";
const Layout = ({ children }) => {
  const route = useRouter();
console.log(children)
  return (
    <>
      <Head>
    <title>{children.type.name}</title>
  </Head>
      {route.pathname === "/login" ? null : route.pathname === "/" ? null : <Navbar />}
      {children}
     {route.pathname === "/login" ? null : <Footer />}
    </>
  );
};

export default Layout;
