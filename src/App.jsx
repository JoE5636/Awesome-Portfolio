import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full flex flex-col bg-gray-100">
      <Header></Header>
      <div>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
