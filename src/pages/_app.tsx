import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={router.route}
        initial={{ opacity: 1, x: router.asPath === "/" ? '100vw' : '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.9, x: router.asPath === "/" ? '-100vw' : '100vw' }}
        transition={{ duration:0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
