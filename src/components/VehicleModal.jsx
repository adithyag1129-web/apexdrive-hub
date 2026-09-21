import React, { useEffect } from 'react';
import { X, Zap, Gauge, Timer, Fuel, Cog, Scale, Shield, CheckCircle2, ArrowLeftRight } from 'lucide-react';

export default function VehicleModal({ vehicle, onClose, onToggleCompare, isComparing }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-carbon-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-racing-red text-white flex items-center justify-center border border-white/10 transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full bg-carbon-800 overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-carbon-900/50 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-bold px-2.5 py-1 rounded-md bg-racing-red text-white">
                  {vehicle.type}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-gray-300 border border-white/10">
                  {vehicle.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-gray-300 border border-white/10">
                  {vehicle.year}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-wide">
                {vehicle.brand} {vehicle.name}
              </h2>
            </div>

            <div className="text-right">
              <div className="text-xs uppercase font-semibold text-gray-400">Starting MSRP</div>
              <div className="text-2xl sm:text-3xl font-display font-black text-turbo-amber">
                {vehicle.price}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          
          {/* Tagline & Description */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-200">Overview</h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
              {vehicle.description}
            </p>
          </div>

          {/* Key Stat Cards Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-carbon-800/90 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-1">
                <Zap className="w-4 h-4 text-turbo-amber" />
                Horsepower
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-white">
                {vehicle.horsepower} <span className="text-xs text-gray-400">HP</span>
              </div>
            </div>

            <div className="bg-carbon-800/90 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-1">
                <Timer className="w-4 h-4 text-racing-red" />
                0-60 MPH
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-white">
                {vehicle.zeroToSixty}
              </div>
            </div>

            <div className="bg-carbon-800/90 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-1">
                <Gauge className="w-4 h-4 text-volt-cyan" />
                Top Speed
              </div>
              <div className="text-base sm:text-lg font-display font-bold text-white truncate">
                {vehicle.topSpeed}
              </div>
            </div>

            <div className="bg-carbon-800/90 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-1">
                <Fuel className="w-4 h-4 text-emerald-400" />
                Fuel / Range
              </div>
              <div className="text-base sm:text-lg font-display font-bold text-white truncate">
                {vehicle.fuelEconomyOrRange}
              </div>
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <Cog className="w-5 h-5 text-racing-red" />
              Technical Specifications & Powertrain
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 bg-carbon-800/60 p-5 rounded-2xl border border-white/5 text-sm">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Engine / Motor</span>
                <span className="text-gray-200 font-semibold text-right max-w-[60%]">{vehicle.engine}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Torque</span>
                <span className="text-gray-200 font-semibold text-right">{vehicle.torque}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Transmission</span>
                <span className="text-gray-200 font-semibold text-right max-w-[60%]">{vehicle.transmission}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Drivetrain</span>
                <span className="text-gray-200 font-semibold text-right">{vehicle.drivetrain}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Curb Weight</span>
                <span className="text-gray-200 font-semibold text-right">{vehicle.curbWeight}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Displacement</span>
                <span className="text-gray-200 font-semibold text-right">{vehicle.specs.displacement}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Braking System</span>
                <span className="text-gray-200 font-semibold text-right max-w-[60%]">{vehicle.specs.brakes}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Suspension</span>
                <span className="text-gray-200 font-semibold text-right max-w-[60%]">{vehicle.specs.suspension}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Wheelbase</span>
                <span className="text-gray-200 font-semibold text-right">{vehicle.specs.wheelbase}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 font-medium">Fuel / Energy Capacity</span>
                <span className="text-gray-200 font-semibold text-right">{vehicle.specs.fuelCapacity}</span>
              </div>
            </div>
          </div>

          {/* Engineering Highlights */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-turbo-amber" />
              Engineering & Aerodynamic Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vehicle.highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-carbon-800/40 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-volt-cyan shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-300 font-normal">{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-carbon-800/90 border-t border-white/10 flex items-center justify-between gap-4">
          <button
            onClick={() => onToggleCompare(vehicle)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
              isComparing
                ? 'bg-turbo-amber text-carbon-900'
                : 'bg-carbon-700 hover:bg-carbon-600 text-white border border-white/10'
            }`}
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>{isComparing ? 'Remove from Comparison' : 'Add to Side-by-Side Compare'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-racing-red hover:bg-racing-crimson text-white text-sm font-bold transition-colors shadow-lg shadow-racing-red/20"
          >
            Close Specs
          </button>
        </div>

      </div>
    </div>
  );
}
