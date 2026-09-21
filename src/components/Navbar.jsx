import React from 'react';
import { Gauge, GitBranch, ArrowLeftRight, Car, Bike, Sparkles, BookOpen } from 'lucide-react';

export default function Navbar({ 
  selectedCategory, 
  setSelectedCategory, 
  compareList, 
  onOpenCompare,
  scrollToGuides 
}) {
  return (
    <header className="sticky top-0 z-40 w-full glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setSelectedCategory('All')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-racing-red to-racing-crimson flex items-center justify-center shadow-lg shadow-racing-red/20 group-hover:scale-105 transition-transform duration-200">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                APEX<span className="text-racing-red">DRIVE</span>
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-widest text-gray-400">
                Cars & Bikes Intel
              </span>
            </div>
          </div>

          {/* Nav Links / Filter Shortcuts */}
          <nav className="hidden md:flex items-center space-x-1 bg-carbon-800/80 p-1.5 rounded-xl border border-white/5">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-racing-red text-white shadow-md shadow-racing-red/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All Vehicles
            </button>
            <button
              onClick={() => setSelectedCategory('Cars')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'Cars'
                  ? 'bg-racing-red text-white shadow-md shadow-racing-red/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Cars</span>
            </button>
            <button
              onClick={() => setSelectedCategory('Bikes')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'Bikes'
                  ? 'bg-racing-red text-white shadow-md shadow-racing-red/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Bikes</span>
            </button>
            <button
              onClick={() => setSelectedCategory('Electric (EV)')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'Electric (EV)'
                  ? 'bg-volt-cyan text-carbon-900 font-semibold shadow-md shadow-volt-cyan/25'
                  : 'text-gray-300 hover:text-volt-cyan hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>EVs</span>
            </button>
            <button
              onClick={scrollToGuides}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Guides</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            {/* Compare Bar Button */}
            <button
              onClick={onOpenCompare}
              className={`relative flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
                compareList.length > 0
                  ? 'border-turbo-amber/60 bg-turbo-amber/10 text-turbo-amber hover:bg-turbo-amber/20'
                  : 'border-white/10 bg-carbon-800 text-gray-300 hover:text-white hover:border-white/20'
              }`}
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span className="hidden sm:inline">Compare</span>
              <span className={`inline-flex items-center justify-center text-xs w-5 h-5 rounded-full font-bold ${
                compareList.length > 0 ? 'bg-turbo-amber text-carbon-900' : 'bg-carbon-700 text-gray-400'
              }`}>
                {compareList.length}
              </span>
            </button>

            {/* GitHub Repo Link */}
            <a
              href="https://github.com/adithyag1129-web/apexdrive-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-carbon-800 hover:bg-carbon-700 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <GitBranch className="w-4 h-4 text-racing-red" />
              <span>GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
