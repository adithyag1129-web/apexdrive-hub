import React from 'react';
import { X, ArrowLeftRight, Trophy, Zap, Timer, Gauge, Trash2 } from 'lucide-react';

export default function CompareModal({ 
  isOpen, 
  onClose, 
  compareList, 
  onRemoveVehicle, 
  allVehicles, 
  onAddVehicle 
}) {
  if (!isOpen) return null;

  const vehicleA = compareList[0] || null;
  const vehicleB = compareList[1] || null;

  // Helper function to extract numeric value for comparison
  const parseNum = (str) => {
    if (!str) return 0;
    const match = str.toString().replace(/,/g, '').match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const hpA = vehicleA ? vehicleA.horsepower : 0;
  const hpB = vehicleB ? vehicleB.horsepower : 0;

  const zeroA = vehicleA ? parseNum(vehicleA.zeroToSixty) : 0;
  const zeroB = vehicleB ? parseNum(vehicleB.zeroToSixty) : 0;

  const speedA = vehicleA ? parseNum(vehicleA.topSpeed) : 0;
  const speedB = vehicleB ? parseNum(vehicleB.topSpeed) : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-carbon-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-carbon-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-turbo-amber/20 border border-turbo-amber/40 flex items-center justify-center text-turbo-amber">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white">Head-to-Head Comparison</h3>
              <p className="text-xs text-gray-400">Direct engineering benchmarks & powertrain analysis</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-carbon-700 hover:bg-racing-red text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Top Vehicle Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Slot A */}
            <div className="bg-carbon-800/60 p-5 rounded-2xl border border-white/10 relative">
              {vehicleA ? (
                <div>
                  <button
                    onClick={() => onRemoveVehicle(vehicleA.id)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-carbon-900/80 hover:bg-racing-red text-gray-400 hover:text-white transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-carbon-900">
                    <img src={vehicleA.image} alt={vehicleA.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs font-bold uppercase text-racing-red tracking-wider mb-1">
                    {vehicleA.brand} • {vehicleA.type}
                  </div>
                  <h4 className="text-xl font-display font-extrabold text-white">{vehicleA.name}</h4>
                  <div className="text-lg font-display font-bold text-turbo-amber mt-1">{vehicleA.price}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/10 rounded-xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-3">Vehicle slot is empty</p>
                  <select 
                    onChange={(e) => {
                      const v = allVehicles.find(x => x.id === e.target.value);
                      if (v) onAddVehicle(v);
                    }}
                    defaultValue=""
                    className="bg-carbon-700 text-white text-xs py-2 px-3 rounded-xl border border-white/20 focus:outline-none"
                  >
                    <option value="" disabled>Select a vehicle...</option>
                    {allVehicles.filter(v => v.id !== vehicleB?.id).map(v => (
                      <option key={v.id} value={v.id}>{v.brand} {v.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Slot B */}
            <div className="bg-carbon-800/60 p-5 rounded-2xl border border-white/10 relative">
              {vehicleB ? (
                <div>
                  <button
                    onClick={() => onRemoveVehicle(vehicleB.id)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-carbon-900/80 hover:bg-racing-red text-gray-400 hover:text-white transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-carbon-900">
                    <img src={vehicleB.image} alt={vehicleB.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs font-bold uppercase text-volt-cyan tracking-wider mb-1">
                    {vehicleB.brand} • {vehicleB.type}
                  </div>
                  <h4 className="text-xl font-display font-extrabold text-white">{vehicleB.name}</h4>
                  <div className="text-lg font-display font-bold text-turbo-amber mt-1">{vehicleB.price}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/10 rounded-xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-3">Select second vehicle to compare</p>
                  <select 
                    onChange={(e) => {
                      const v = allVehicles.find(x => x.id === e.target.value);
                      if (v) onAddVehicle(v);
                    }}
                    defaultValue=""
                    className="bg-carbon-700 text-white text-xs py-2 px-3 rounded-xl border border-white/20 focus:outline-none"
                  >
                    <option value="" disabled>Select vehicle to compare...</option>
                    {allVehicles.filter(v => v.id !== vehicleA?.id).map(v => (
                      <option key={v.id} value={v.id}>{v.brand} {v.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

          </div>

          {/* Comparison Matrix Table */}
          {vehicleA && vehicleB && (
            <div className="bg-carbon-800/80 rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-4 bg-carbon-700/50 text-xs font-bold uppercase tracking-wider text-gray-300 border-b border-white/10">
                Direct Benchmark Showdown
              </div>

              <div className="divide-y divide-white/5 text-sm">
                
                {/* Horsepower Row */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className={`font-bold flex items-center gap-2 ${hpA > hpB ? 'text-green-400 font-extrabold' : 'text-gray-300'}`}>
                    {hpA > hpB && <Trophy className="w-4 h-4 text-turbo-amber shrink-0" />}
                    <span>{vehicleA.horsepower} HP</span>
                  </div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">
                    Horsepower
                  </div>
                  <div className={`text-right font-bold flex items-center justify-end gap-2 ${hpB > hpA ? 'text-green-400 font-extrabold' : 'text-gray-300'}`}>
                    <span>{vehicleB.horsepower} HP</span>
                    {hpB > hpA && <Trophy className="w-4 h-4 text-turbo-amber shrink-0" />}
                  </div>
                </div>

                {/* 0-60 MPH Row (Lower is better) */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className={`font-bold flex items-center gap-2 ${zeroA < zeroB ? 'text-green-400 font-extrabold' : 'text-gray-300'}`}>
                    {zeroA < zeroB && <Trophy className="w-4 h-4 text-turbo-amber shrink-0" />}
                    <span>{vehicleA.zeroToSixty}</span>
                  </div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">
                    0-60 MPH
                  </div>
                  <div className={`text-right font-bold flex items-center justify-end gap-2 ${zeroB < zeroA ? 'text-green-400 font-extrabold' : 'text-gray-300'}`}>
                    <span>{vehicleB.zeroToSixty}</span>
                    {zeroB < zeroA && <Trophy className="w-4 h-4 text-turbo-amber shrink-0" />}
                  </div>
                </div>

                {/* Top Speed Row */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className={`font-semibold ${speedA > speedB ? 'text-green-400' : 'text-gray-300'}`}>
                    {vehicleA.topSpeed}
                  </div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">
                    Top Speed
                  </div>
                  <div className={`text-right font-semibold ${speedB > speedA ? 'text-green-400' : 'text-gray-300'}`}>
                    {vehicleB.topSpeed}
                  </div>
                </div>

                {/* Torque Row */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="text-gray-300 font-semibold">{vehicleA.torque}</div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">Torque</div>
                  <div className="text-right text-gray-300 font-semibold">{vehicleB.torque}</div>
                </div>

                {/* Engine Type */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="text-gray-300 text-xs sm:text-sm font-medium">{vehicleA.engine}</div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">Engine</div>
                  <div className="text-right text-gray-300 text-xs sm:text-sm font-medium">{vehicleB.engine}</div>
                </div>

                {/* Curb Weight */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="text-gray-300 font-medium">{vehicleA.curbWeight}</div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">Curb Weight</div>
                  <div className="text-right text-gray-300 font-medium">{vehicleB.curbWeight}</div>
                </div>

                {/* Drivetrain / Transmission */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="text-gray-300 text-xs sm:text-sm font-medium">{vehicleA.transmission}</div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">Gearbox</div>
                  <div className="text-right text-gray-300 text-xs sm:text-sm font-medium">{vehicleB.transmission}</div>
                </div>

                {/* Fuel Economy or Range */}
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="text-gray-300 font-medium">{vehicleA.fuelEconomyOrRange}</div>
                  <div className="text-center text-xs font-semibold text-gray-400 uppercase">Range / Fuel</div>
                  <div className="text-right text-gray-300 font-medium">{vehicleB.fuelEconomyOrRange}</div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 bg-carbon-800/80 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-racing-red hover:bg-racing-crimson text-white text-sm font-bold transition-colors"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
}
