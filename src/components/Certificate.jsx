import { motion } from 'motion/react'
import javascriptCert from '../assets/sertifikat/javascript.png'
import certiportCert from '../assets/sertifikat/IC3.png'
import dicoding from '../assets/sertifikat/dicoding.png'
import reactSertif from '../assets/sertifikat/reactjs.png'
import laravelSertif from '../assets/sertifikat/laravel.png'
import imphnenSertif from '../assets/sertifikat/imphnen.png'

const certificates = [
  {
    title: 'Web development',
    issuer: 'Programmer Zaman Now - UDEMY',
    date: '2025',
    credential: 'https://www.udemy.com/certificate/UC-8adcd571-5d0d-4c54-8103-74155277163c/',
    image: javascriptCert,
  },
  {
    title: 'IC3 Digital Literacy Certification',
    issuer: 'Certiport',
    date: '2024',
    credential: null,
    image: certiportCert,
  },
  {
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    credential: 'https://www.dicoding.com/certificates/RVZKGVR0OXD5',
    image: dicoding,
  },
  {
    title: 'ReactJS : Pemula sampai Mahir',
    issuer: 'Programmer Zaman Now - UDEMY',
    date: '2026',
    credential: 'https://www.udemy.com/certificate/UC-c10ecf73-c611-4659-a3c4-e9c50ea51842/',
    image: reactSertif,
  },
  {
    title: 'Laravel : Pemula sampai Mahir',
    issuer: 'Programmer Zaman Now - UDEMY',
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

function CertificateCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300">
        <div className="relative aspect-3/2 overflow-hidden bg-linear-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-contain p-3 md:p-4 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12 text-violet-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m0 0a6.023 6.023 0 01-2.77-.896" />
              </svg>
            </div>
          )}
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-violet-500/80 backdrop-blur-sm rounded-md text-[10px] font-semibold text-white">
            {cert.date}
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors">
            {cert.title}
          </h3>
          <p className="mt-1 text-xs text-zinc-400">{cert.issuer}</p>
          {cert.credential ? (
            <a
              href={cert.credential}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 border border-violet-500/25 rounded-lg text-[11px] font-medium text-violet-300 hover:bg-violet-500/20 hover:text-violet-200 transition-all duration-300"
            >
              View Credential
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          ) : (
            <span className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/8 rounded-lg text-[11px] text-zinc-600">
              Not available
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Certificate() {
  return (
    <section id="certificate" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Certificate</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Professional certifications that validate my skills and knowledge in software development.
          </p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
