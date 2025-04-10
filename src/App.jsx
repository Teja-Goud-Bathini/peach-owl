import Navbar from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/Newsletter";
import Footer from "./components/Footer";
import LandingPage from "./components/Landing";
function App() {
  return (
    <div>
    {/* // <div className="min-h-screen bg-gradient-to-b from-green-50 to-white"> */}
      {/* <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer /> */}
        <LandingPage />
    </div>
  );
}

export default App;