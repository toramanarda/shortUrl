import MobileHeader from './shortly/components/MobileHeader';
import DesktopHeader from './shortly/components/DesktopHeader';
import Hero from './shortly/components/Hero';
import Statistics from './shortly/components/Statistics';
import LinkArea from './shortly/components/LinkArea';
import Advert from './shortly/components/Advert';
import Footer from './shortly/components/Footer';
import './shortly/styles/shortly.css';

const ShortlyPage = () => {
  return (
    <div>
      <MobileHeader />
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