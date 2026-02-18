'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      aria-label="Einleitung"
    >
      {/* Animated Gradient Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          
          {/* Eyebrow - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-px bg-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Frontend & CMS Developer
            </span>
          </motion.div>

          {/* Headline - Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Hi, ich bin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Lejs Becirovic
            </span>
          </motion.h1>

          {/* Subtext - Animated */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
          >
            Ich entwickle barrierefreie, moderne Webapplikationen mit Fokus auf 
            sauberen Code und außergewöhnliche User Experience.
          </motion.p>

          {/* CTAs - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <span className="flex items-center gap-2">
                Projekte ansehen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-emerald-500/30 hover:border-emerald-500/60 text-white font-medium rounded-lg transition-all hover:bg-emerald-500/5"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>

          {/* Stats - Animated with Stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-12 mt-16 pt-16 border-t border-emerald-500/10"
          >
            {[
              { value: '2+', label: 'Jahre Erfahrung' },
              { value: 'WCAG', label: '2.2 Zertifiziert' },
              { value: '10+', label: 'Projekte' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
