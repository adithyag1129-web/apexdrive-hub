import React, { useState, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleCard from './components/VehicleCard';
import VehicleModal from './components/VehicleModal';
import CompareModal from './components/CompareModal';
import GuidesSection from './components/GuidesSection';
import Footer from './components/Footer';
import { vehicles, categories, availableYears } from './data/vehicles';
import { ArrowUpDown, SlidersHorizontal, ArrowLeftRight, Calendar, X } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const guidesRef = useRef(null);
  const catalogRef = useRef(null);

  const scrollToGuides = () => {
    guidesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Compare toggling handler
  const handleToggleCompare = (vehicle) => {
    setCompareList((prev) => {
      const exists = prev.some((v) => v.id === vehicle.id);
      if (exists) {
        return prev.filter((v) => v.id !== vehicle.id);
      }
      if (prev.length >= 2) {
        return [prev[0], vehicle];
      }
      return [...prev, vehicle];
    });
  };

  const handleAddCompare = (vehicle) => {
    setCompareList((prev) => {
      if (prev.some(v => v.id === vehicle.id)) return prev;
      if (prev.length >= 2) return [prev[0], vehicle];
      return [...prev, vehicle];
    });
  };

  const handleRemoveCompare = (vehicleId) => {
    setCompareList((prev) => prev.filter((v) => v.id !== vehicleId));
  };

  // Parsing helper for numeric sorting
  const parseNum = (str) => {
    if (!str) return 0;
    const match = str.toString().replace(/,/g, '').match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  // Filtered and sorted vehicle list
  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((vehicle) => {
        // Year filter (2020+)
        if (selectedYear !== 'All Years' && vehicle.year !== parseInt(selectedYear, 10)) {
          return false;
        }

        // Category Filter
        if (selectedCategory === 'Cars') {
          if (vehicle.type !== 'car') return false;
        } else if (selectedCategory === 'Bikes') {
          if (vehicle.type !== 'bike') return false;
        } else if (selectedCategory !== 'All') {
          if (vehicle.category !== selectedCategory) return false;
        }

        // Search Query Filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = vehicle.name.toLowerCase().includes(q);
          const matchBrand = vehicle.brand.toLowerCase().includes(q);
          const matchEngine = vehicle.engine.toLowerCase().includes(q);
          const matchCategory = vehicle.category.toLowerCase().includes(q);
          const matchFuel = vehicle.fuelType.toLowerCase().includes(q);
          const matchYear = vehicle.year.toString().includes(q);
          if (!matchName && !matchBrand && !matchEngine && !matchCategory && !matchFuel && !matchYear) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'horsepower-desc') {
          return b.horsepower - a.horsepower;
        }
        if (sortBy === 'speed-desc') {
          return parseNum(b.topSpeed) - parseNum(a.topSpeed);
        }
        if (sortBy === 'price-asc') {
          return parseNum(a.price) - parseNum(b.price);
        }
        if (sortBy === 'price-desc') {
          return parseNum(b.price) - parseNum(a.price);
        }
        if (sortBy === 'year-desc') {
          return b.year - a.year;
        }
        return 0; // 'featured' keeps original curated order
      });
  }, [selectedCategory, selectedYear, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-carbon-mesh flex flex-col selection:bg-racing-red selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        compareList={compareList}
        onOpenCompare={() => setIsCompareOpen(true)}
        scrollToGuides={scrollToGuides}
      />

      {/* Hero Section */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalVehicles={vehicles.length}
      />

      {/* Main Catalog Section */}
      <main ref={catalogRef} className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Category Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {categories.map((cat) => {
            const count = vehicles.filter((v) => {
              if (selectedYear !== 'All Years' && v.year !== parseInt(selectedYear, 10)) return false;
              if (cat === 'All') return true;
              if (cat === 'Cars') return v.type === 'car';
              if (cat === 'Bikes') return v.type === 'bike';
              return v.category === cat;
            }).length;

            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? 'bg-racing-red text-white shadow-md shadow-racing-red/20'
                    : 'bg-carbon-800 hover:bg-carbon-700 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-black/30 text-white' : 'bg-carbon-700 text-gray-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter Controls Bar: Year Filter & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-carbon-800/50 p-4 rounded-2xl border border-white/5">
          
          {/* Year Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-xs text-gray-400 flex items-center gap-1 font-semibold mr-1">
              <Calendar className="w-3.5 h-3.5 text-turbo-amber" />
              Year:
            </span>
            {availableYears.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === yr
                    ? 'bg-turbo-amber text-carbon-900 font-bold shadow-sm shadow-turbo-amber/30'
                    : 'bg-carbon-700/60 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-racing-red" />
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-carbon-700 text-white text-xs py-1.5 px-3 rounded-xl border border-white/10 focus:outline-none focus:border-racing-red"
            >
              <option value="featured">Featured Curated</option>
              <option value="horsepower-desc">Highest Horsepower</option>
              <option value="speed-desc">Highest Top Speed</option>
              <option value="year-desc">Newest Year (2024 - 2020)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
          <div>
            Showing <span className="text-white font-semibold">{filteredVehicles.length}</span> {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'}
            {selectedYear !== 'All Years' && (
              <span> from model year <span className="text-turbo-amber font-semibold">{selectedYear}</span></span>
            )}
            {searchQuery && (
              <span> matching "<span className="text-racing-red">{searchQuery}</span>"</span>
            )}
          </div>
          {(searchQuery || selectedCategory !== 'All' || selectedYear !== 'All Years') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedYear('All Years');
              }}
              className="text-racing-red hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Vehicle Cards Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelect={(v) => setSelectedVehicle(v)}
                onToggleCompare={handleToggleCompare}
                isComparing={compareList.some((v) => v.id === vehicle.id)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-12 text-center border border-white/10 my-8">
            <SlidersHorizontal className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-1">No matching vehicles found</h3>
            <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">
              Try adjusting your year, category, or search filters to explore vehicles.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedYear('All Years');
              }}
              className="px-5 py-2.5 rounded-xl bg-racing-red text-white text-xs font-bold hover:bg-racing-crimson transition-colors"
            >
              View Full Fleet (2020 - Present)
            </button>
          </div>
        )}

      </main>

      {/* Floating Bottom Comparison Drawer */}
      {compareList.length > 0 && (
        <aside aria-label="Comparison Tray" className="fixed bottom-6 right-6 z-40 bg-carbon-900/95 border border-turbo-amber/40 shadow-2xl shadow-black/80 backdrop-blur-xl p-4 rounded-2xl flex items-center gap-4 animate-bounce-short">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-turbo-amber/20 border border-turbo-amber/50 flex items-center justify-center text-turbo-amber">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                {compareList.length} of 2 Selected
              </div>
              <div className="text-[11px] text-gray-400">
                {compareList.map(v => v.name).join(' vs ')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-turbo-amber hover:bg-yellow-400 text-carbon-900 text-xs font-extrabold transition-colors shadow-lg shadow-turbo-amber/20"
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="p-1.5 rounded-lg bg-carbon-800 hover:bg-carbon-700 text-gray-400 hover:text-white"
              title="Clear compare selection"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Detailed Vehicle Specs Modal */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onToggleCompare={handleToggleCompare}
          isComparing={compareList.some((v) => v.id === selectedVehicle.id)}
        />
      )}

      {/* Side-by-Side Comparison Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareList={compareList}
        onRemoveVehicle={handleRemoveCompare}
        allVehicles={vehicles}
        onAddVehicle={handleAddCompare}
      />

      {/* Ownership & Maintenance Guides Section */}
      <GuidesSection sectionRef={guidesRef} />

      {/* Footer */}
      <Footer
        onCategoryClick={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        onGuidesClick={scrollToGuides}
      />
    </div>
  );
}
