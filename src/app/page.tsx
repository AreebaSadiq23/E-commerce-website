import Header from './header';
import Layout from './layout'; 
import HeroSection from './HeroSection';
import SquareImages from './SquareImage';
import NewArrivals from './NewArrivals';
import DiscountBanner from './DiscountBanner';
import TrendingProducts from './TrendingProduct';
import CircleImages from './Circles';
import Testimonials from './Testimonials';
import Footer from './footer';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <SquareImages  />
      <DiscountBanner />
      <TrendingProducts />
      <NewArrivals />
      <CircleImages />
      <Testimonials />
      <Footer />
    </Layout>
  );
};

export default HomePage;
