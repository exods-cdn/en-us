import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wallet, Shield, Globe, Zap, ArrowRight, Layers, Lock, RefreshCw, Menu, X } from 'lucide-react';

// Custom animated bullet point component
const AnimatedBullet = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-3 mb-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mt-1 min-w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center"
      >
        <ArrowRight size={14} className="text-white" />
      </motion.div>
      <div>{children}</div>
    </motion.li>
  );
};

// Header component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Company Name */}
          <div className="flex items-center">
            <Wallet size={28} className="text-purple-500 mr-3" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Exodus Web3
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors">Security</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Ecosystem</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
          </nav>
          
          {/* Get Started Button */}
          <div className="hidden md:block">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900 border-b border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#security" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ecosystem
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </a>
              <div className="pt-2">
                <a 
                  href="#" 
                  className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

// Section component with animation
const Section = ({ 
  title, 
  children, 
  icon: Icon, 
  imageUrl, 
  imageAlt,
  reversed = false,
  id
}: { 
  title: string; 
  children: React.ReactNode; 
  icon: React.ElementType; 
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
  id?: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className={`py-16 ${reversed ? 'bg-gray-900' : 'bg-gray-950'}`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} items-center gap-8 lg:gap-16`}>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg">
                <Icon size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                {title}
              </h2>
            </div>
            <div className="text-gray-300 space-y-4">
              {children}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-500/30 rounded-xl blur-xl"></div>
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="relative rounded-xl shadow-2xl w-full object-cover z-10" 
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur-sm opacity-50 z-0"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Hero section component
const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -100, Math.random() * 100, null],
              x: [null, Math.random() * -100, Math.random() * 100, null],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15 + Math.random() * 20,
              ease: "linear"
            }}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-500/10 blur-xl"
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block p-3 mb-6 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-gray-700/30">
            <Wallet size={32} className="text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
            Exodus Web3 Wallet
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            The next generation of digital asset management with unparalleled security, 
            intuitive design, and seamless blockchain integration.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#features" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              Explore Features
            </a>
            <a href="#security" className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-medium text-white hover:bg-gray-700 transition-all duration-300">
              Learn About Security
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Header />
      <Hero />
      
      <Section 
        title="Revolutionizing Digital Asset Management" 
        icon={Wallet}
        imageUrl="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        imageAlt="Digital wallet interface with cryptocurrency assets"
        id="features"
      >
        <p className="mb-6">
          Exodus Web3 Wallet stands at the forefront of the digital revolution, offering a comprehensive solution for managing your cryptocurrency assets with unprecedented ease and security. Unlike traditional financial systems, Exodus empowers users with complete control over their digital wealth through an intuitive interface designed for both novices and experienced crypto enthusiasts.
        </p>
        <ul className="space-y-2">
          <AnimatedBullet>
            <p className="font-medium text-white">Multi-Chain Support</p>
            <p className="text-gray-400">Seamlessly manage assets across Bitcoin, Ethereum, Solana, and over 200 other blockchain networks from a single interface.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Real-Time Portfolio Tracking</p>
            <p className="text-gray-400">Monitor your investments with live price updates, comprehensive charts, and detailed transaction history.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Built-in Exchange</p>
            <p className="text-gray-400">Swap between cryptocurrencies directly within the wallet without relying on external exchanges or platforms.</p>
          </AnimatedBullet>
        </ul>
      </Section>
      
      <Section 
        title="Uncompromising Security Architecture" 
        icon={Shield}
        imageUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        imageAlt="Digital security concept with lock and shield"
        reversed={true}
        id="security"
      >
        <p className="mb-6">
          In the evolving landscape of digital threats, Exodus prioritizes your security above all else. The wallet implements a sophisticated multi-layered security framework that protects your assets while maintaining the accessibility that modern users demand. This delicate balance between security and usability sets Exodus apart from conventional wallets that often sacrifice one for the other.
        </p>
        <ul className="space-y-2">
          <AnimatedBullet>
            <p className="font-medium text-white">Non-Custodial Architecture</p>
            <p className="text-gray-400">Your private keys never leave your device, ensuring you maintain complete sovereignty over your digital assets at all times.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Advanced Encryption</p>
            <p className="text-gray-400">Military-grade encryption secures your wallet data, protecting against unauthorized access even if your device is compromised.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Biometric Authentication</p>
            <p className="text-gray-400">Utilize your device's built-in security features like fingerprint scanning and facial recognition for an additional layer of protection.</p>
          </AnimatedBullet>
        </ul>
      </Section>
      
      <Section 
        title="Seamless Web3 Integration" 
        icon={Globe}
        imageUrl="https://images.unsplash.com/photo-1642059889212-3c2909a4d1b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        imageAlt="Web3 ecosystem visualization with connected nodes"
      >
        <p className="mb-6">
          Exodus transcends the limitations of traditional wallets by embracing the full potential of Web3 technology. As decentralized applications (dApps) and services continue to proliferate, Exodus serves as your gateway to this expanding digital ecosystem. The wallet's Web3 browser creates a seamless bridge between your assets and the innovative applications being built on blockchain technology.
        </p>
        <ul className="space-y-2">
          <AnimatedBullet>
            <p className="font-medium text-white">dApp Browser</p>
            <p className="text-gray-400">Access decentralized applications directly from your wallet with a secure, integrated browsing experience.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">NFT Gallery</p>
            <p className="text-gray-400">Display, organize, and interact with your non-fungible token collection through an elegant visual interface.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">DeFi Integration</p>
            <p className="text-gray-400">Participate in decentralized finance protocols for staking, lending, and yield farming without leaving your wallet environment.</p>
          </AnimatedBullet>
        </ul>
      </Section>
      
      <Section 
        title="Future-Proof Technology" 
        icon={Zap}
        imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        imageAlt="Futuristic technology concept with glowing elements"
        reversed={true}
      >
        <p className="mb-6">
          The blockchain landscape evolves at a breathtaking pace, with new protocols, standards, and technologies emerging regularly. Exodus is engineered with adaptability at its core, ensuring that your wallet remains at the cutting edge without compromising on stability or security. The development team maintains a rigorous update schedule, implementing new features and supporting emerging blockchain technologies as they gain traction.
        </p>
        <ul className="space-y-2">
          <AnimatedBullet>
            <p className="font-medium text-white">Regular Updates</p>
            <p className="text-gray-400">Benefit from continuous improvements and new features through a streamlined update process that never compromises security.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Cross-Platform Synchronization</p>
            <p className="text-gray-400">Access your wallet seamlessly across desktop, mobile, and hardware devices with perfect synchronization.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Layer 2 Support</p>
            <p className="text-gray-400">Embrace the future of blockchain scalability with built-in support for Layer 2 solutions like Lightning Network and Optimistic Rollups.</p>
          </AnimatedBullet>
        </ul>
      </Section>
      
      <Section 
        title="Community-Driven Development" 
        icon={Layers}
        imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        imageAlt="Community collaboration concept with connected people"
      >
        <p className="mb-6">
          At the heart of Exodus lies a vibrant community of users, developers, and blockchain enthusiasts who contribute to its evolution. Unlike closed-source alternatives, Exodus embraces transparency and collaboration, allowing the community to audit code, suggest improvements, and participate in governance decisions. This open approach ensures that the wallet remains aligned with user needs while fostering innovation through collective intelligence.
        </p>
        <ul className="space-y-2">
          <AnimatedBullet>
            <p className="font-medium text-white">Open Development</p>
            <p className="text-gray-400">Contribute to the wallet's improvement through GitHub repositories, feature requests, and community discussions.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Comprehensive Documentation</p>
            <p className="text-gray-400">Access detailed guides, tutorials, and API documentation to maximize your wallet experience or build integrations.</p>
          </AnimatedBullet>
          <AnimatedBullet>
            <p className="font-medium text-white">Responsive Support</p>
            <p className="text-gray-400">Receive assistance from both the official support team and community members through multiple channels.</p>
          </AnimatedBullet>
        </ul>
      </Section>
      
      {/* Call to Action Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Begin Your Web3 Journey Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join thousands of users who have already discovered the freedom, security, and potential of the Exodus Web3 Wallet. Your digital future awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Download Now
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-medium text-white hover:bg-gray-700 transition-all duration-300"
            >
              Explore Documentation
            </motion.a>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Wallet size={32} className="text-purple-500 mr-3" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Exodus Web3
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 Exodus Web3 Wallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;