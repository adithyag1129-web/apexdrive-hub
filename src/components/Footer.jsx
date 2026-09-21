import React from 'react';
import { Gauge, GitBranch, ExternalLink, Heart, ShieldAlert } from 'lucide-react';

export default function Footer({ onCategoryClick, onGuidesClick }) {
  return (
    <footer className="bg-carbon-900 border-t border-white/10 text-gray-400 py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-racing-red to-racing-crimson flex items-center justify-center text-white">
                <Gauge className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                APEX<span className="text-racing-red">DRIVE</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              ApexDrive is a high-octane digital encyclopedia for automotive and motorcycle enthusiasts. Compare real-world dyno benchmarks, aerodynamic profiles, and engineering data across iconic combustion and electric machines.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldAlert className="w-4 h-4 text-turbo-amber shrink-0" />
              <span>Drive responsibly. All top speed benchmarks recorded on closed course tracks.</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore Fleet
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onCategoryClick('Cars')} 
                  className="hover:text-racing-red transition-colors"
                >
                  High Performance Cars
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onCategoryClick('Bikes')} 
                  className="hover:text-racing-red transition-colors"
                >
                  Superbikes & Hypersport
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onCategoryClick('Electric (EV)')} 
                  className="hover:text-volt-cyan transition-colors"
                >
                  Electric Vehicles (EVs)
                </button>
              </li>
              <li>
                <button 
                  onClick={onGuidesClick} 
                  className="hover:text-white transition-colors"
                >
                  Maintenance & Buying Guide
                </button>
              </li>
            </ul>
          </div>

          {/* GitHub & Deployment */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Open Source
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Source code published and ready for 1-click deployment to Vercel, Netlify, or GitHub Pages.
            </p>
            <a
              href="https://github.com/adithyag1129-web/apexdrive-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-carbon-800 hover:bg-carbon-700 text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              <GitBranch className="w-4 h-4 text-racing-red" />
              <span>adithyag1129-web / apexdrive-hub</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} ApexDrive Hub. Built for automotive enthusiasts.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with speed & precision for</span>
            <span className="text-gray-300 font-semibold">Adithya G</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
