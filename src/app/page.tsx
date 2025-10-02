import About from "@/components/Home/About";
import Blog from "@/components/Home/Blog";
import Counseling from "@/components/Home/Counseling";
import Footer from "@/components/Home/Footer";
import NavBar from "@/components/Home/navBar";
import Post from "@/components/Home/Posts";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <>
    <NavBar/>
    <About/>
    <Services/>
    <Post/>
    <Counseling/>
    <Blog/>
    <Footer/>
    </>

  );
}
