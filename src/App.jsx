import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-32 py-8">
        <div>
          <Hero />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
