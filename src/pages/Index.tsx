
import Navigation from '../components/Navigation';
import HeroCarousel from '../components/HeroCarousel';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { TrendingUp, Smartphone, Scissors, ShoppingBag } from 'lucide-react';

const Index = () => {
  const stats = [
    {
      icon: TrendingUp,
      title: "Global Buzz",
      description: "African-inspired fashion is hotter than ever – international sales of authentic designs jumped 60% in 2022.",
      color: "text-gold"
    },
    {
      icon: Smartphone,
      title: "High-Tech Style",
      description: "Immerse yourself in our Virtual Try-On, powered by Google's AI, so you can see outfits on diverse, real models before you buy.",
      color: "text-electric"
    },
    {
      icon: Scissors,
      title: "Custom Fits",
      description: "Every piece can be tailored to you. Choose fabric, cut, and details to make it personal.",
      color: "text-africanprint"
    },
    {
      icon: ShoppingBag,
      title: "Ready to Wear",
      description: "From chic smart-casual staples to show-stopping luxury wear, each item is shop-ready and crafted for confidence.",
      color: "text-burgundy"
    }
  ];

  return (
    <div className="min-h-screen bg-onyx">
      <Navigation />
      <HeroCarousel />
      
      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute inset-0 african-pattern-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why <span className="text-gold">Zillion Kulture</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We're not just fashion – we're a movement bridging cultures and rewiring style for the 21st century.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`${stat.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={40} className="sm:w-12 sm:h-12" />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {stat.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <Link to="/shop" className="luxury-button rounded-full text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 inline-block">
              Shop Now and Step Into the Revolution
            </Link>
            <p className="text-gray-400 mt-4 text-base sm:text-lg px-4">
              Zillion Kulture isn't just fashion – it's a movement.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
