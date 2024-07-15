import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComparisonTable from './components/ComparisonTable';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Segmentation from './components/Segmentation'; // Importar o novo componente

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Segmentation /> {/* Adicionar o novo componente */}
      <ComparisonTable />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;
