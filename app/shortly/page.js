import Header from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import LinkArea from './components/LinkArea';
import Advert from './components/Advert';
import Footer from './components/Footer';
import './styles/shortly.css';

const ShortlyPage = () => {
  return (
    <div>
      <Header />
      <DesktopHeader />
      <Hero />
      <LinkArea />
      <Statistics />
      <Advert />
      <Footer />
    </div>
  );
};

export default ShortlyPage;
