import "./main.css";
import Navbar from "./components/navbar/Navbar";
import HomeInteriors from "./components/homeinteriors/HomeInteriors";
import Works from "./components/works/Works";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ overflow: "hidden" }}>
        <HomeInteriors />
        <Works />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}

export default App;
