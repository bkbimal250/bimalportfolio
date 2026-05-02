import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from './Icon'

const MotionAnchor = motion.a

const variants = {
  dark: 'bg-teal-950 text-white dark:bg-teal-700',
  light:
    'border border-stone-400 bg-[#fffaf2] text-stone-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-stone-50',
  ghost: 'border border-white/30 bg-white/10 text-white',
}

export function ButtonLink({
  children,
  href,
  icon,
  variant = 'dark',
  className = '',
  external = false,
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionAnchor
      className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-extrabold no-underline transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-teal-700/30 sm:w-auto sm:text-base ${variants[variant]} ${className}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.03,
              boxShadow: '0 14px 34px rgba(15, 118, 110, 0.18)',
            }
      }
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
    >
      {children}
      {icon ? <Icon name={icon} /> : null}
    </MotionAnchor>
  )
}
