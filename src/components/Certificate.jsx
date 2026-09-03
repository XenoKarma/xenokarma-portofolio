import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import javascriptCert from '../assets/sertifikat/javascript.png'
import certiportCert from '../assets/sertifikat/IC3.png'
import dicoding from '../assets/sertifikat/dicoding.png'
import reactSertif from '../assets/sertifikat/reactjs.png'
import laravelSertif from '../assets/sertifikat/laravel.png'
import imphnenSertif from '../assets/sertifikat/imphnen.png'

const certificates = [
  {
    title: 'Web Development',
    issuer: 'Programmer Zaman Now — UDEMY',
    date: '2025',
    credential: 'https://www.udemy.com/certificate/UC-8adcd571-5d0d-4c54-8103-74155277163c/',
    image: javascriptCert,
  },
  {
    title: 'IC3 Digital Literacy',
    issuer: 'Certiport',
    date: '2024',
    credential: null,
    image: certiportCert,
  },
  {
    title: 'Financial Literacy',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    credential: 'https://www.dicoding.com/certificates/RVZKGVR0OXD5',
    image: dicoding,
  },
  {
    title: 'ReactJS: Pemula sampai Mahir',
    issuer: 'Programmer Zaman Now — UDEMY',
    date: '2026',
    credential: 'https://www.udemy.com/certificate/UC-c10ecf73-c611-4659-a3c4-e9c50ea51842/',
    image: reactSertif,
  },
  {
    title: 'Laravel: Pemula sampai Mahir',
    issuer: 'Programmer Zaman Now — UDEMY',
    date: '2026',
    credential: 'https://www.udemy.com/certificate/UC-4d1d7f7f-16b1-4eea-810f-58ae31d45eb6/',
    image: laravelSertif,
  },
  {
    title: 'Imphnen',
    issuer: 'Imphnen',
    date: '2025',
    credential: null,
    image: imphnenSertif,
  },
]

function CertificateCard({ cert, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div className="group border-2 border-ink/15 hover:border-ink transition-colors">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink/5 border-b-2 border-ink/15">
          {cert.image ? (
            <button onClick={() => onSelect(cert)} className="w-full h-full cursor-pointer">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-ink/10">{String(index + 1).padStart(2, '0')}</span>
            </div>
          )}
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-ink text-cream text-[10px] font-bold tracking-wider">
            {cert.date}
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-sm font-bold text-ink group-hover:text-accent-blue transition-colors">
            {cert.title}
          </h3>
          <p className="mt-1 text-xs text-ink-light">{cert.issuer}</p>
          <div className="mt-3">
            {cert.credential ? (
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border-2 border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
              >
                View Credential
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ) : (
              <span className="inline-flex items-center px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border border-ink/15 text-ink-light/50">
                Not Available
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    if (!selectedCert) return
    const onKeyDown = (e) => { if (e.key === 'Escape') setSelectedCert(null) }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedCert])

  return (
    <section id="certificate" className="py-14 md:py-24 px-4 md:px-6 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-light">
            05 / Certificates
          </span>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-ink leading-[0.9] tracking-tighter">
            CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.title} cert={cert} index={i} onSelect={setSelectedCert} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink/60 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90dvh] bg-cream border-2 border-ink overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink shrink-0">
                <div>
                  <h3 className="text-sm font-bold text-ink">{selectedCert.title}</h3>
                  <p className="text-xs text-ink-light">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 flex items-center justify-center border-2 border-ink text-ink hover:bg-ink hover:text-cream transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center bg-ink/5">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[70dvh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
