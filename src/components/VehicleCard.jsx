import React from 'react';
import { Zap, Timer, Gauge, Plus, Check, ArrowRight, Car, Bike, Sparkles } from 'lucide-react';

export default function VehicleCard({ 
  vehicle, 
  onSelect, 
  onToggleCompare, 
  isComparing 
}) {
  return (
    <div className="glass-card group rounded-2xl overflow-hidden flex flex-col border border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-racing-red/10">
      
      {/* Image Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-carbon-800">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent opacity-80" />

        {/* Badges on top */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md ${
            vehicle.type === 'car' 
              ? 'bg-racing-red/90 text-white' 
              : 'bg-turbo-amber/90 text-carbon-900 font-extrabold'
          }`}>
            {vehicle.type === 'car' ? <Car className="w-3 h-3" /> : <Bike className="w-3 h-3" />}
            {vehicle.type}
          </span>

          <span className="bg-black/60 backdrop-blur-md text-gray-200 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
            {vehicle.category}
          </span>
        </div>

        {/* EV badge if applicable */}
        {vehicle.fuelType === 'Electric' && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 bg-volt-cyan/90 text-carbon-900 text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-lg shadow-volt-cyan/20">
              <Sparkles className="w-3 h-3" />
              100% EV
            </span>
          </div>
        )}

        {/* Price tag over image bottom right */}
        <div className="absolute bottom-3 right-3">
          <div className="text-sm font-display font-extrabold text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            {vehicle.price}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Brand & Name */}
          <div className="flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            <span>{vehicle.brand}</span>
            <span>{vehicle.year}</span>
          </div>

          <h3 className="text-xl font-display font-bold text-white tracking-wide group-hover:text-racing-red transition-colors line-clamp-1 mb-2">
            {vehicle.name}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed font-normal">
            {vehicle.tagline}
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 p-2.5 bg-carbon-800/80 rounded-xl border border-white/5 mb-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-gray-400">
                <Zap className="w-3 h-3 text-turbo-amber" />
                Power
              </div>
              <div className="text-sm font-display font-bold text-white mt-0.5">
                {vehicle.horsepower} <span className="text-[10px] text-gray-400 font-normal">HP</span>
              </div>
            </div>

            <div className="border-x border-white/10">
              <div className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-gray-400">
                <Timer className="w-3 h-3 text-racing-red" />
                0-60
              </div>
              <div className="text-sm font-display font-bold text-white mt-0.5">
                {vehicle.zeroToSixty}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1 text-[10px] uppercase font-bold text-gray-400">
                <Gauge className="w-3 h-3 text-volt-cyan" />
                Top Speed
              </div>
              <div className="text-xs sm:text-sm font-display font-bold text-white mt-0.5 truncate px-1">
                {vehicle.topSpeed.split('(')[0]}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2 border-t border-white/5">
          <button
            onClick={() => onSelect(vehicle)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-racing-red hover:bg-racing-crimson text-white font-semibold text-xs transition-colors shadow-lg shadow-racing-red/20"
          >
            <span>Full Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onToggleCompare(vehicle)}
            title={isComparing ? 'Remove from comparison' : 'Add to compare'}
            className={`py-2.5 px-3 rounded-xl border font-semibold text-xs flex items-center gap-1.5 transition-all ${
              isComparing
                ? 'bg-turbo-amber text-carbon-900 border-turbo-amber font-bold'
                : 'bg-carbon-800 text-gray-300 hover:text-white border-white/10 hover:border-white/25'
            }`}
          >
            {isComparing ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Compare</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}
