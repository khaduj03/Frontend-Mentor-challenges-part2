import React from 'react';
import Header from './component/Header';
import HeroSection from './component/HeroSection';

const App = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <section className="px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">We’re different</h3>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-dark-purple text-5xl">⚡</div>
            <h4 className="font-bold">Snappy Process</h4>
            <p>
              Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-dark-purple text-5xl">💲</div>
            <h4 className="font-bold">Affordable Prices</h4>
            <p>
              We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-dark-purple text-5xl">👨‍👩‍👧‍👦</div>
            <h4 className="font-bold">People First</h4>
            <p>
              Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-dark-purple text-white px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Find out more about how we work</h3>
        <button className="bg-white text-dark-purple px-6 py-3 rounded hover:bg-gray-200">How We Work</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold">OUR COMPANY</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">How We Work</a></li>
              <li><a href="#" className="hover:underline">Why Insure?</a></li>
              <li><a href="#" className="hover:underline">View Plans</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">HELP ME</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">CONTACT</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Sales</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Live Chat</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">OTHERS</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Licenses</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>&copy; 2024 Insure. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
