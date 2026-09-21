# 🏎️ ApexDrive | Cars & Bikes Intelligence Hub

ApexDrive is a high-octane, responsive web application for automotive and motorcycle enthusiasts. Explore verified performance specifications, top speed benchmarks, dyno figures, 0-60 acceleration records, and head-to-head engineering comparisons for iconic cars and superbikes.

![ApexDrive](https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80)

---

## ⚡ Features

- **Iconic Vehicle Fleet**: Curated cars (Porsche 911 GT3 RS, Ferrari 296 GTB, Tesla Model S Plaid, Corvette Z06, Dodge Hellcat, BMW M3) and bikes (Kawasaki Ninja H2, Ducati Panigale V4 S, BMW S1000RR, Suzuki Hayabusa, Harley Sportster S, BMW R1250 GS).
- **Deep Technical Specifications**: Engine layout, displacement, horsepower, torque, transmission, curb weight, brake systems, suspension, and aerodynamic highlights.
- **Head-to-Head Comparison Matrix**: Select any two vehicles to compare horsepower, 0-60 launch times, top speed, curb weight, and engine layouts side-by-side with winning badges.
- **Interactive Search & Dynamic Filters**: Filter by category (Supercars, Superbikes, Muscle, EVs, Adventure, Cruisers) and sort by horsepower, 0-60, top speed, or price.
- **Ownership & Maintenance Guides**: Step-by-step guides for motorcycle chain care, tire pressures and track temperatures, engine fluids, EV battery longevity, and pre-purchase inspection checklists.
- **Automotive Aesthetic**: Dark mode theme styled with carbon-fiber accents, racing red and electric cyan highlights, and responsive glassmorphism.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (Dark theme with custom automotive palettes)
- **Icons**: Lucide React
- **Deployment**: Static SPA ready for Vercel, Netlify, or GitHub Pages

---

## 🚀 Quick Start (Local Development)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   This generates an optimized static bundle in the `dist/` directory.

---

## 🌐 Deploy to the Web (Free & Easy)

### Option 1: Deploy to Vercel (Recommended)
1. Push your repository to GitHub: `https://github.com/adithyag1129-web/apexdrive-hub`.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository `apexdrive-hub`.
4. Click **Deploy**. Vercel will automatically build and deploy your site with a free `*.vercel.app` URL and automatic updates on every git push!

### Option 2: Deploy to Netlify
1. Log in to [netlify.com](https://www.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"** -> select GitHub.
3. Select `apexdrive-hub` and click **Deploy**.

### Option 3: Deploy to GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add `"base": "/apexdrive-hub/"` to `vite.config.js`.
3. Add deploy script to `package.json`: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

---

## 👤 Author
- **GitHub**: [@adithyag1129-web](https://github.com/adithyag1129-web)
