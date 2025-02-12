import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-32 py-8 mb-4">
        <div>
          <Hero />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
