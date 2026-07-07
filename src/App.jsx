import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionBanner from './components/MissionBanner';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-shell">
      <div className="site-frame">
        <Header />
        <main>
          <Hero />
          <MissionBanner />
          <Services />
          <SelectedWork />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
