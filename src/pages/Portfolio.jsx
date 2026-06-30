import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaChevronLeft, 
  FaChevronRight, 
  FaTrophy, 
  FaDumbbell, 
  FaStar 
} from 'react-icons/fa';

export default function Portfolio() {
  // Image placeholders updated to .jpeg
  const images = [
    { src: '/gym1.jpeg', alt: 'M. Rajkumar Stage Posing' },
    { src: '/gym2.jpeg', alt: 'M. Rajkumar Training' },
    { src: '/gym3.jpeg', alt: 'M. Rajkumar Championship Win' },
    { src: '/gym4.jpeg', alt: 'M. Rajkumar Indian Railways Representing' },
    { src: '/gym5.jpeg', alt: 'M. Rajkumar Most muscular' },
    { src: '/gym6.jpeg', alt: 'M. Rajkumar Gold Medal Moment' }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-amber-500 selection:text-zinc-950 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Dark Background Overlay with subtle texture */}
        <div className="absolute inset-0 opacity-40 bg-[url('/gym4.jpeg')] bg-cover bg-center mix-blend-luminosity scale-105 transform transition-transform duration-10000 hover:scale-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center lg:text-left w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-500 text-sm font-semibold tracking-wide uppercase shadow-lg backdrop-blur">
              <FaShieldAlt className="text-amber-500" /> Indian Railways Athlete
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-none">
              M. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">Rajkumar</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl font-medium tracking-wide">
              Elite International Bodybuilder representing Indian Railways. Dedicated to absolute physical perfection and high-performance athletic achievement.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-zinc-400 pt-2 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800">
                <FaCalendarAlt className="text-amber-500" />
                <span>DOB: 22/05/1998</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800">
                <FaMapMarkerAlt className="text-amber-500" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Main Silhouette / Image Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group"
          >
            <img 
              src="/gym2.jpeg" 
              alt="M. Rajkumar Profile" 
              className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-900/80 backdrop-blur rounded-xl border border-zinc-800">
              <p className="text-xs uppercase tracking-widest text-zinc-400">Current Status</p>
              <p className="text-md font-bold text-white flex items-center gap-2 mt-1">
                <FaDumbbell className="text-amber-500" /> Active Competitive Circuit
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS HIGHLIGHT RAMP --- */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-amber-500">11x</div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">Mr. Tamilnadu Titles</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-amber-500">1st</div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">All India Railways Gold</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-amber-500">Asia</div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">Bronze Medalist</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-amber-500">Top 6</div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">World Championship</div>
          </div>
        </div>
      </section>

      {/* --- ELITE PRESTIGE HARDWARE (INTERNATIONAL & NATIONALS) --- */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16 space-y-2"
        >
          <h2 className="text-xs uppercase tracking-widest text-amber-500 font-bold">The Pinnacle</h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">International & National Arena</p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Card 1: Mr. Asia */}
          <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 text-2xl">
                <FaTrophy />
              </div>
              <div>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full font-bold">2022</span>
                <h3 className="text-2xl font-bold mt-2 text-white">Mr. Asia Bronze Medalist</h3>
                <p className="text-zinc-400 text-sm mt-1">Staged in Maldives</p>
                <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                  Secured podium positioning competing against elite international configurations, bringing laurels to Indian bodybuilding on the Asian stage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: World Championship */}
          <motion.div variants={fadeInUp} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 text-2xl">
                <FaStar />
              </div>
              <div>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full font-bold">2022</span>
                <h3 className="text-2xl font-bold mt-2 text-white">Top 6 Finalist</h3>
                <p className="text-zinc-400 text-sm mt-1">World Championship • Thailand</p>
                <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                  Earned a definitive position within the global Top 6 bracket, maintaining world-class symmetry, muscularity, and conditioning parameters.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- DOMESTIC TRACK RECORD & RAILWAYS TIMELINE --- */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-xs uppercase tracking-widest text-amber-500 font-bold">Chronology of Dominance</h2>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">National & State Track Record</p>
          </motion.div>

          <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-32 space-y-12">
            
            {/* 2025 Block */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-3 top-1 bg-amber-500 w-6 h-6 rounded-full border-4 border-zinc-950 flex items-center justify-center shadow-lg" />
              <div className="absolute right-full mr-8 top-1 hidden md:block text-right">
                <span className="text-2xl font-black text-amber-500">2025</span>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Chakradharpur</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                <span className="text-2xl font-black text-amber-500 block md:hidden mb-1">2025</span>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  All India Inter-Railway Championship <span className="text-sm bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 font-normal">Bronze 🥉</span>
                </h4>
                <p className="text-zinc-400 text-sm mt-2">Continued consistency representing the Indian Railways sports system with distinction on the national platform.</p>
              </div>
            </motion.div>

            {/* 2024 Block */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-3 top-1 bg-zinc-600 w-6 h-6 rounded-full border-4 border-zinc-950 flex items-center justify-center shadow-lg" />
              <div className="absolute right-full mr-8 top-1 hidden md:block text-right">
                <span className="text-2xl font-black text-zinc-400">2024</span>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">ICF & Seniors</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
                <span className="text-2xl font-black text-zinc-400 block md:hidden mb-1">2024</span>
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    All India Inter-Railway Championship <span className="text-sm bg-zinc-400/10 text-zinc-400 px-2 py-0.5 rounded border border-zinc-500/20 font-normal">Bronze 🥉</span>
                  </h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-0.5">Held at ICF</p>
                </div>
                <div className="border-t border-zinc-800/60 pt-3">
                  <h4 className="text-lg font-bold text-zinc-300">4th Place — Senior Nationals</h4>
                  <p className="text-zinc-400 text-sm">Represented Indian Railways at the premier top-tier national championship.</p>
                </div>
              </div>
            </motion.div>

            {/* 2023 Block */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-3 top-1 bg-amber-400 w-6 h-6 rounded-full border-4 border-zinc-950 flex items-center justify-center shadow-lg" />
              <div className="absolute right-full mr-8 top-1 hidden md:block text-right">
                <span className="text-2xl font-black text-amber-400">2023</span>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Hubli & Circuit</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
                <span className="text-2xl font-black text-amber-400 block md:hidden mb-1">2023</span>
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    All India Inter-Railway Championship <span className="text-sm bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30 font-bold animate-pulse">Gold 🥇</span>
                  </h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-0.5">Staged at Hubli</p>
                </div>
                <div className="border-t border-zinc-800/60 pt-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    Senior Nationals <span className="text-sm bg-zinc-400/10 text-zinc-400 px-2 py-0.5 rounded border border-zinc-500/20 font-normal">Bronze 🥉</span>
                  </h4>
                  <p className="text-zinc-400 text-sm">Proudly standing on the national podium representing Indian Railways.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Regional & Heritage Grid Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-extrabold text-white">11 Times</div>
              <p className="text-sm text-amber-500 font-semibold uppercase tracking-wider mt-1">Mr. Tamilnadu</p>
              <p className="text-xs text-zinc-500 mt-2">Unbroken regional legacy across open championship variations.</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-extrabold text-white">5 Times</div>
              <p className="text-sm text-amber-500 font-semibold uppercase tracking-wider mt-1">Gold Medalist</p>
              <p className="text-xs text-zinc-500 mt-2">Maximized structural alignment and routine excellence.</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-extrabold text-white">2 Times</div>
              <p className="text-sm text-amber-500 font-semibold uppercase tracking-wider mt-1">Champion of Champions</p>
              <p className="text-xs text-zinc-500 mt-2">Overall class supremacy at Mr. Tamilnadu (COC).</p>
            </div>
          </motion.div>

          {/* Mr South India Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-zinc-400 text-sm font-medium tracking-wide"
          >
            🏆 <span className="text-white font-bold">2-Time Mr. South India Bronze Medalist</span> representing regional cross-state championship excellence.
          </motion.div>
        </div>
      </section>

      {/* --- CAROUSEL & VISUAL REPRESENTATION --- */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-amber-500 font-bold">Gallery Blueprint</h2>
          <p className="text-4xl font-extrabold uppercase">Athletic Visual Showcase</p>
        </div>

        {/* Main Active Media Frame (Updated to full image/object-contain) */}
        <div className="relative h-[550px] md:h-[700px] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group flex items-center justify-center">
          
          {/* Blurred Background to fill empty space nicely */}
          <img 
            src={images[activeImageIndex].src} 
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none" 
            alt=""
          />

          {/* Full un-cropped image */}
          <motion.img 
            key={activeImageIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={images[activeImageIndex].src} 
            alt={images[activeImageIndex].alt}
            className="relative z-10 w-full h-full object-contain"
          />
          
          {/* Bottom Fade Gradient for text readability */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Navigation Controls */}
          <button 
            onClick={prevImage}
            className="absolute z-30 left-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-950/80 border border-zinc-800 rounded-full hover:bg-amber-500 hover:text-zinc-950 hover:scale-110 transition-all text-white flex items-center justify-center"
            aria-label="Previous Image"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextImage}
            className="absolute z-30 right-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-950/80 border border-zinc-800 rounded-full hover:bg-amber-500 hover:text-zinc-950 hover:scale-110 transition-all text-white flex items-center justify-center"
            aria-label="Next Image"
          >
            <FaChevronRight />
          </button>

          {/* Frame Label */}
          <div className="absolute z-30 bottom-6 left-8">
            <p className="text-lg md:text-xl font-bold tracking-wide text-white drop-shadow-md">
              {images[activeImageIndex].alt}
            </p>
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative aspect-video rounded-lg overflow-hidden border transition-all ${
                activeImageIndex === idx ? 'border-amber-500 scale-95 ring-2 ring-amber-500/20' : 'border-zinc-800 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* --- PROFESSIONAL FOOTER SIGNATURE --- */}
      <footer className="border-t-2 border-amber-500/20 bg-zinc-950 py-16 text-center text-zinc-500 text-sm relative">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          
          <div className="text-2xl font-black uppercase text-amber-500 tracking-widest drop-shadow-sm">
            M. RAJKUMAR
          </div>
          
          <p className="text-zinc-400 max-w-md mx-auto text-xs md:text-sm">
            Official Elite Athletic Portfolio. Managed and configured for high-level athletic profiling and sporting sponsorship networks.
          </p>
          
          {/* Yellow Divider Accent */}
          <div className="w-16 h-1 bg-amber-500/60 mx-auto rounded-full" />
          
          <p className="text-xs font-mono tracking-wider text-zinc-600">
            © {new Date().getFullYear()} M. Rajkumar • Indian Railways. All Rights Reserved.
          </p>
          
        </div>
      </footer>

    </div>
  );
}