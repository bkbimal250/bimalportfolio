'use client'

import { motion, useReducedMotion } from 'framer-motion'

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const staggerItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const viewport = { once: true, amount: 0.18, margin: '0px 0px -80px 0px' }

export function RevealSection({ children, className = '', ...props }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      variants={revealVariants}
      viewport={viewport}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export function StaggerContainer({ children, className = '', ...props }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      variants={staggerContainerVariants}
      viewport={viewport}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', as = 'div', ...props }) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      variants={staggerItemVariants}
      {...props}
    >
      {children}
    </Component>
  )
}

export function MotionCard({ children, className = '', ...props }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className={className}
      variants={staggerItemVariants}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.03,
              y: -5,
              boxShadow: '0 24px 60px rgba(28, 21, 13, 0.14)',
            }
      }
      {...props}
    >
      {children}
    </motion.article>
  )
}
