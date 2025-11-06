import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Header Component with animations
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-black/80'
    }`}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with hover animation */}
          <Link to="/" className="flex items-center group">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 bg-black rounded-full transition-all duration-300 group-hover:animate-pulse"></div>
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">BetaBLU</span>
          </Link>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Cosmos', path: '/cosmos' },
              { name: 'Nova', path: '/nova' },
              { name: 'API Platform', path: '/api' },
              { name: 'Research', path: '/research' },
              { name: 'Safety', path: '/safety' },
              { name: 'Company', path: '/company' }
            ].map((item, index) => (
              <Link 
                key={item.name}
                to={item.path} 
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button with enhanced animation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
              Log in
            </Link>
            <Link to="/cosmos" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
              Try Cosmos
            </Link>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-all duration-300 hover:scale-110"
            >
              <svg className={`h-6 w-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            {[
              { name: 'Cosmos', path: '/cosmos' },
              { name: 'Nova', path: '/nova' },
              { name: 'API Platform', path: '/api' },
              { name: 'Research', path: '/research' },
              { name: 'Safety', path: '/safety' },
              { name: 'Company', path: '/company' }
            ].map((item, index) => (
              <Link 
                key={item.name}
                to={item.path} 
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-800 rounded-lg transform hover:translate-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link to="/login" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-800 rounded-lg">
                Log in
              </Link>
              <Link to="/cosmos" className="bg-white text-black px-4 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-all duration-300 inline-block mt-2 ml-3 hover:scale-105 transform">
                Try Cosmos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Animated Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className={`mb-12 lg:mb-0 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 mb-6 hover:bg-gray-700 transition-colors duration-300">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Next-Generation AI Research
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="inline-block animate-fadeInUp">Adaptive</span>{' '}
              <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Intelligence</span>
              <span className="block text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>that Evolves</span>
            </h1>
            <p className={`text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Betablu builds autonomous AI agents that think, act, learn, and improve over time. 
              Unlike static models, our adaptive systems are persistent, self-improving, and truly intelligent.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link to="/cosmos" className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center group hover:scale-105 transform">
                <span>Explore Cosmos</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/research" className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center hover:scale-105 transform">
                View Research
              </Link>
            </div>
          </div>
          <div className={`relative transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1535136104956-115a2cd67fc4" 
                alt="Advanced AI Systems" 
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-600 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-4 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Products Component
const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      name: "Cosmos",
      description: "Advanced LLM chat agent that learns and adapts from every conversation",
      image: "https://images.pexels.com/photos/15940012/pexels-photo-15940012.jpeg",
      status: "Coming Soon",
      link: "/cosmos",
      features: ["Natural Language Processing", "Persistent Memory", "Adaptive Learning"]
    },
    {
      name: "Deepblu",
      description: "Deep research agent that conducts comprehensive analysis on any topic",
      image: "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c",
      status: "Coming Soon",
      link: "/research",
      features: ["Deep Research", "Data Analysis", "Autonomous Investigation"]
    },
    {
      name: "Nova",
      description: "Advanced visual intelligence system with adaptive learning capabilities",
      image: "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png",
      status: "Coming Soon",
      link: "/nova",
      features: ["Computer Vision", "Visual Analysis", "Multi-modal AI"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeInUp">Our Products</h2>
          <p className="text-xl text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Autonomous AI agents that evolve with every interaction</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={index} 
              to={product.link} 
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`bg-black rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                hoveredIndex === index ? 'shadow-2xl shadow-white/20' : 'shadow-lg'
              }`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      product.status === 'Available' 
                        ? 'bg-green-500 text-white group-hover:bg-green-400' 
                        : 'bg-gray-600 text-gray-300 group-hover:bg-gray-500'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  {/* Hover overlay with features */}
                  <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center">
                      <h4 className="text-white font-bold mb-3">Key Features</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center text-gray-500 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm">Learn more</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Latest News Component
const LatestNews = () => {
  const newsItems = [
    {
      title: "Betablu introduces Adaptive AI Framework",
      description: "Our breakthrough framework enables AI agents to continuously learn and adapt to new environments without retraining.",
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
      date: "June 2025",
      category: "Research",
      readTime: "5 min read"
    },
    {
      title: "Cosmos: The Self-Improving AI Agent",
      description: "Meet Cosmos, our flagship autonomous agent that evolves its reasoning capabilities through persistent learning.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      date: "June 2025",
      category: "Product",
      readTime: "3 min read"
    },
    {
      title: "Deepblu: Revolutionary Research Agent",
      description: "Deepblu transforms how we conduct research with its deep analytical capabilities and autonomous investigation features.",
      image: "https://images.unsplash.com/photo-1593846129052-6b02feecdc80",
      date: "June 2025",
      category: "Innovation",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeInUp">Latest developments</h2>
          <p className="text-xl text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Breakthrough advances in adaptive intelligence and autonomous AI systems</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={index} 
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium group-hover:bg-gray-200 transition-colors duration-300">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-sm">{item.readTime}</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-500 font-medium">{item.date}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
                <div className="flex items-center text-gray-500 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm">Read more</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Home Page Component
export const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Products />
      <LatestNews />
    </div>
  );
};

// Enhanced Cosmos Page Component
export const CosmosPage = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm Cosmos, your adaptive AI assistant. I learn from every conversation to provide better responses. What would you like to explore today?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
      setIsTyping(true);
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: "That's a fascinating question! As an adaptive AI, I'm constantly learning and improving my responses. Let me analyze this from multiple perspectives and provide you with comprehensive insights..." 
        }]);
        setIsTyping(false);
      }, 2000);
      
      setInputValue('');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-20">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-300 mb-6 hover:bg-green-800 transition-colors duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available Now
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="animate-fadeInUp inline-block">Cosmos</span>
              <span className="block text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>LLM Chat Agent</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Cosmos is our flagship conversational AI agent that learns and adapts from every interaction. 
              Unlike traditional chatbots, Cosmos maintains persistent memory and continuously improves its responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform">
                Start Chatting
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform">
                View Documentation
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/249798/pexels-photo-249798.png" 
                alt="Cosmos Chat Interface" 
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: "Adaptive Learning",
              description: "Learns from every conversation to provide better responses"
            },
            {
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              ),
              title: "Persistent Memory",
              description: "Remembers context across sessions for meaningful conversations"
            },
            {
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Real-time Processing",
              description: "Lightning-fast responses with deep understanding"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 group hover:bg-gray-900 rounded-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300 group-hover:animate-pulse">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Chat Demo */}
        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-6">Try Cosmos Now</h3>
          <div className="bg-black rounded-xl p-6 mb-4 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}>
                  <div className={`px-4 py-2 rounded-2xl max-w-xs transition-all duration-300 hover:scale-105 ${
                    message.type === 'user' 
                      ? 'bg-white text-black' 
                      : 'bg-gray-800 text-white'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start animate-fadeInUp">
                  <div className="bg-gray-800 text-white px-4 py-2 rounded-2xl max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..." 
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Nova Page Component
export const NovaPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-400 mb-6 animate-fadeInUp hover:bg-gray-700 transition-colors duration-300">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse"></div>
            Coming Soon
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block">Nova</span>
            <span className="block text-gray-400">Visual Intelligence</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Nova represents the next frontier in visual AI. Our advanced visual intelligence system will understand, 
            analyze, and interact with visual content in ways never before possible.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-20">
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/18069695/pexels-photo-18069695.png" 
                alt="Nova Visual Intelligence" 
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold mb-6">Revolutionary Visual AI</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nova will combine advanced computer vision with adaptive learning to create an AI that not only sees 
              but truly understands visual content. From medical imaging to creative design, Nova will transform 
              how we interact with visual information.
            </p>
            <div className="space-y-4">
              {[
                { title: "Advanced Scene Understanding", desc: "Comprehensive analysis of visual scenes and contexts" },
                { title: "Adaptive Visual Learning", desc: "Continuous improvement through visual pattern recognition" },
                { title: "Multi-modal Integration", desc: "Seamless integration with text and audio understanding" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group hover:bg-gray-900 p-3 rounded-lg transition-all duration-300">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex-shrink-0 mt-1 group-hover:bg-gray-600 transition-colors duration-300"></div>
                  <div>
                    <h3 className="font-semibold group-hover:text-gray-300 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-900 rounded-2xl p-12 hover:bg-gray-800 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4">Be the First to Experience Nova</h3>
          <p className="text-gray-400 mb-8">Join our waitlist to get early access when Nova launches.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 bg-black text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
              required
            />
            <button 
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform"
            >
              {isSubmitted ? '✓ Added!' : 'Join Waitlist'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Enhanced API Page Component
export const APIPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const apiExamples = [
    {
      name: "Cosmos API",
      description: "Conversational AI with persistent memory and adaptive learning",
      code: `curl -X POST https://api.betablu.ai/cosmos/chat
-H "Authorization: Bearer YOUR_API_KEY"
-d '{"message": "Hello Cosmos"}'`,
      response: `{
  "response": "Hello! I'm ready to help you with adaptive intelligence.",
  "session_id": "sess_12345",
  "confidence": 0.98
}`
    },
    {
      name: "Deepblu API",
      description: "Deep research capabilities for comprehensive analysis",
      code: `curl -X POST https://api.betablu.ai/deepblu/research
-H "Authorization: Bearer YOUR_API_KEY"
-d '{"query": "climate change impacts"}'`,
      response: `{
  "research_id": "res_67890",
  "status": "processing",
  "estimated_completion": "2 minutes"
}`
    },
    {
      name: "Nova API",
      description: "Visual intelligence for image and video analysis",
      code: `# Coming Soon
curl -X POST https://api.betablu.ai/nova/analyze
-H "Authorization: Bearer YOUR_API_KEY"
-F "image=@image.jpg"`,
      response: `{
  "status": "coming_soon",
  "message": "Nova API will be available soon"
}`
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="inline-block">API Platform</span>
            <span className="block text-gray-400">Build with Betablu</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Integrate our adaptive AI agents into your applications. Our API platform provides 
            enterprise-grade access to Cosmos, Deepblu, and Nova with full customization capabilities.
          </p>
        </div>

        {/* Interactive API Examples */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center mb-8">
            {apiExamples.map((api, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-medium transition-all duration-300 hover:scale-105 transform ${
                  activeTab === index 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {api.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">{apiExamples[activeTab].name}</h3>
            <p className="text-gray-400 mb-6">{apiExamples[activeTab].description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Request</h4>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {apiExamples[activeTab].code}
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Response</h4>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-blue-400 text-sm overflow-x-auto">
                    {apiExamples[activeTab].response}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Pricing */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 animate-fadeInUp">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                features: ["10,000 API calls/month", "Cosmos access", "Basic support", "Rate limiting: 100/min"],
                popular: false
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                features: ["100,000 API calls/month", "Cosmos + Deepblu access", "Priority support", "Rate limiting: 1000/min"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: ["Unlimited API calls", "All products access", "Dedicated support", "Custom integrations"],
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 transition-all duration-500 hover:scale-105 transform animate-fadeInUp ${
                  plan.popular 
                    ? 'bg-white text-black scale-105' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className={`text-xl ${plan.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className={`space-y-3 mb-8 ${plan.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform ${
                  plan.popular 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}>
                  {plan.popular ? 'Most Popular' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Research Page Component
export const ResearchPage = () => {
  const [selectedArea, setSelectedArea] = useState(0);

  const researchAreas = [
    {
      title: "Adaptive Intelligence",
      description: "Developing AI systems that can continuously adapt and improve their performance based on new experiences and changing environments.",
      image: "https://images.unsplash.com/photo-1700498597220-b67a0364d55c"
    },
    {
      title: "Autonomous Agents", 
      description: "Creating AI agents that can operate independently, make decisions, and take actions without constant human supervision.",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg"
    },
    {
      title: "Persistent Memory",
      description: "Building memory systems that allow AI to maintain long-term context and learn from extended interactions over time.",
      image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5"
    },
    {
      title: "Multi-modal Learning",
      description: "Integrating different types of data and sensory inputs to create more comprehensive and capable AI systems.",
      image: "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="inline-block">Research</span>
            <span className="block text-gray-400">Advancing AI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Our research focuses on developing adaptive intelligence systems that can learn, 
            reason, and evolve autonomously. We're pushing the boundaries of what's possible with AI.
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Adaptive Learning in Neural Networks",
              description: "Exploring how neural networks can adapt and improve their performance over time without explicit retraining.",
              image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
              date: "June 2025"
            },
            {
              title: "Beyond Static Models: Self-Improving Intelligence", 
              description: "Exploring the fundamental differences between traditional static AI and our next-generation adaptive intelligence systems.",
              image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
              date: "May 2025"
            },
            {
              title: "Memory-Persistent AI Agents",
              description: "Understanding how long-term memory enables AI agents to build context and make better decisions over extended interactions.",
              image: "https://images.unsplash.com/photo-1593846129052-6b02feecdc80",
              date: "May 2025"
            }
          ].map((paper, index) => (
            <article 
              key={index} 
              className="bg-gray-900 rounded-2xl overflow-hidden group hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={paper.image} 
                  alt="Research" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{paper.date}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors duration-300">{paper.title}</h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">{paper.description}</p>
                <button className="text-white hover:text-gray-300 font-medium group flex items-center">
                  <span>Read Paper</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Research Areas */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fadeInUp">Research Areas</h2>
          
          <div className="flex flex-wrap justify-center mb-8">
            {researchAreas.map((area, index) => (
              <button
                key={index}
                onClick={() => setSelectedArea(index)}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-medium transition-all duration-300 hover:scale-105 transform ${
                  selectedArea === index 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">{researchAreas[selectedArea].title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {researchAreas[selectedArea].description}
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="relative group">
                  <img 
                    src={researchAreas[selectedArea].image} 
                    alt={researchAreas[selectedArea].title}
                    className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Safety Page Component
export const SafetyPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="inline-block">AI Safety</span>
            <span className="block text-gray-400">Our Commitment</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Safety is at the core of everything we build. We're committed to developing AI systems 
            that are aligned with human values, transparent, and beneficial for humanity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-6">Safety Principles</h2>
            <div className="space-y-6">
              {[
                {
                  color: "bg-green-500",
                  title: "Human Alignment",
                  description: "Our AI systems are designed to understand and align with human values and intentions."
                },
                {
                  color: "bg-blue-500", 
                  title: "Transparency",
                  description: "We believe in making our AI systems interpretable and their decision-making processes clear."
                },
                {
                  color: "bg-purple-500",
                  title: "Robustness", 
                  description: "Our systems are designed to be reliable and perform safely across a wide range of scenarios."
                }
              ].map((principle, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:bg-gray-900 p-4 rounded-2xl transition-all duration-300">
                  <div className={`w-8 h-8 ${principle.color} rounded-full flex-shrink-0 mt-1 flex items-center justify-center group-hover:animate-pulse`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors duration-300">{principle.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5" 
                alt="AI Safety Research" 
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Safety Research */}
        <div className="bg-gray-900 rounded-2xl p-12 mb-20 hover:bg-gray-800 transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-8 text-center">Safety Research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Risk Assessment",
                description: "Comprehensive evaluation of potential risks and mitigation strategies"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Monitoring",
                description: "Continuous monitoring of AI system behavior and performance"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Best Practices",
                description: "Development and sharing of safety best practices across the industry"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:bg-gray-800 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300 group-hover:animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Safety Research</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for researchers and practitioners who share our commitment to AI safety.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Company Page Component
export const CompanyPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="inline-block">About Betablu</span>
            <span className="block text-gray-400">Our Mission</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Betablu is a next-generation AI research company building the world's most advanced 
            adaptive intelligence systems — autonomous AI agents that can think, act, learn, and improve over time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We envision a future where AI systems are not just tools, but intelligent partners 
              that continuously evolve and adapt to better serve humanity. Our adaptive intelligence 
              systems represent a fundamental shift from static, task-specific models to dynamic, 
              self-improving agents.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Unlike traditional AI that requires constant retraining and human intervention, 
              our systems learn autonomously, maintain persistent memory, and improve their 
              capabilities through every interaction.
            </p>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5" 
                alt="Betablu Team" 
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 mb-20 hover:bg-gray-800 transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of what's possible with AI through groundbreaking research"
              },
              {
                title: "Safety",
                description: "Ensuring our AI systems are aligned with human values and beneficial for society"
              },
              {
                title: "Transparency",
                description: "Building trust through open research and clear communication about our technology"
              }
            ].map((value, index) => (
              <div key={index} className="text-center group hover:bg-gray-800 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're looking for brilliant minds who share our passion for advancing AI and creating 
            technology that benefits humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform">
              View Open Positions
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Login Page Component
export const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-md w-full mx-4 relative">
        <div className="text-center mb-8 animate-fadeInUp">
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-black rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to Betablu</h1>
          <p className="text-gray-400">Sign in to access your AI agents</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input 
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 transform disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account? 
              <button className="text-white hover:text-gray-300 ml-1 transition-colors duration-300">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Footer Component
export const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Cosmos", path: "/cosmos" },
        { name: "Deepblu", path: "/research" },
        { name: "Nova", path: "/nova" },
        { name: "API Platform", path: "/api" }
      ]
    },
    {
      title: "Research",
      links: [
        { name: "Research overview", path: "/research" },
        { name: "Publications", path: "/research" },
        { name: "Adaptive AI", path: "/research" },
        { name: "Safety Research", path: "/safety" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Betablu", path: "/company" },
        { name: "News", path: "/" },
        { name: "Careers", path: "/company" },
        { name: "Mission", path: "/company" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "Documentation", path: "/api" },
        { name: "API Reference", path: "/api" },
        { name: "Examples", path: "/api" },
        { name: "Community", path: "/api" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 animate-fadeInUp">
            <Link to="/" className="flex items-center mb-6 group">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 bg-gray-900 rounded-full group-hover:animate-pulse"></div>
              </div>
              <span className="ml-3 text-xl font-bold group-hover:text-gray-300 transition-colors duration-300">Betablu</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building the world's most advanced adaptive intelligence systems — AI that thinks, acts, learns, and evolves.
            </p>
            <div className="flex space-x-4">
              {[
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>,
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ].map((icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-400 text-sm">
            © 2025 Betablu. All rights reserved. Building adaptive intelligence for humanity.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "AI Ethics"].map((link, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105 transform">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};