import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App
