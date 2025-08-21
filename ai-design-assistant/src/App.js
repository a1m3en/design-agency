import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Integration from "./components/Integration/Integration";
import Navbar from "./components/Navbar/Navbar";
import Questions from "./components/Questions/Questions";
import SponsorsBar from "./components/SponsorsBar/SponsorsBar";
import Customers from "./Customers/Customers";
import Pricing from "./Pricing/Pricing";


const knotTexture = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  pointerEvents: 'none',
  zIndex: 0,
  background: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 12px)',
};

function App() {
  return (
    <div className="App" style={{ background: 'var(--background)', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <div style={knotTexture} />
      <Navbar />
      <Hero />
      <SponsorsBar />
      <Features/>
      <Integration/>
      <Pricing />
      <Customers/>
      <Questions/>
      <Footer/>
    </div>
  );
}

export default App;
