import React from 'react';
import { Search, Zap, Flame, ShieldCheck, Gauge } from 'lucide-react';

export default function Hero({ searchQuery, setSearchQuery, totalVehicles }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-racing-red/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-volt-cyan/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top pill badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-pulse">
          <Flame className="w-4 h-4 text-racing-red" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Speed • Horsepower • Engineering Excellence
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase max-w-5xl mx-auto leading-none mb-6">
          Unleash <span className="bg-clip-text text-transparent bg-gradient-to-r from-racing-red via-turbo-amber to-volt-cyan">Peak Velocity</span> & Machines
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 font-normal leading-relaxed mb-10">
          Discover verified performance metrics, engine dyno specs, 0-60 acceleration times, and head-to-head comparisons for the world's greatest cars and superbikes.
        </p>

        {/* Central Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-12">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, model, or engine (e.g., Porsche, Panigale, V8, Supercharged)..."
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-carbon-800/90 text-white placeholder-gray-500 border border-white/10 focus:border-racing-red focus:ring-2 focus:ring-racing-red/20 focus:outline-none backdrop-blur-xl shadow-2xl text-sm sm:text-base transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-gray-400 hover:text-white text-xs font-bold px-2 py-1 bg-carbon-700 rounded-md"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Performance Metric Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl border border-white/5 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Catalog</span>
              <Gauge className="w-4 h-4 text-racing-red" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">{totalVehicles}+</div>
            <div className="text-xs text-gray-400 mt-0.5">Iconic Cars & Bikes</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Top Output</span>
              <Zap className="w-4 h-4 text-turbo-amber" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">1,020 HP</div>
            <div className="text-xs text-gray-400 mt-0.5">Tri-Motor Hyper Power</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Record Launch</span>
              <Flame className="w-4 h-4 text-volt-cyan" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">1.99s</div>
            <div className="text-xs text-gray-400 mt-0.5">0-60 MPH Benchmarks</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Validation</span>
              <ShieldCheck className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white">100%</div>
            <div className="text-xs text-gray-400 mt-0.5">Authentic OEM Specs</div>
          </div>
        </div>

      </div>
    </section>
  );
}
