import { RevealSection } from './Motion'

export const sectionClass =
  'border-b border-stone-300/80 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-24 dark:border-emerald-950'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}) {
  return (
    <RevealSection className={`${sectionClass} ${className}`} id={id}>
      {(eyebrow || title) && (
        <div className="mb-7 grid gap-4 sm:mb-9 sm:gap-6 lg:grid-cols-[minmax(220px,0.42fr)_minmax(0,0.58fr)] lg:gap-9">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : <span />}
          <div>
            {title ? <SectionTitle>{title}</SectionTitle> : null}
            {description ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      )}
      {children}
    </RevealSection>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`mb-3 text-xs font-black uppercase tracking-[0.08em] text-teal-700 dark:text-teal-200 ${className}`}
    >
      {children}
    </p>
  )
}

export function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`text-2xl font-black leading-tight tracking-normal text-stone-950 sm:text-3xl md:text-5xl dark:text-stone-50 ${className}`}
    >
      {children}
    </h2>
  )
}

export function Tag({ children }) {
  return (
    <span className="max-w-full break-words rounded-full border border-stone-300 bg-white px-2.5 py-1.5 text-xs font-black text-stone-500 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-stone-300">
      {children}
    </span>
  )
}
