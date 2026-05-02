import { navItems, profile } from '../../data/portfolio'
import { Icon } from '../ui/Icon'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 grid grid-cols-[1fr_auto] items-center gap-6 border-b border-stone-300/80 bg-[#f7f4ee]/90 px-5 py-4 backdrop-blur-xl md:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-16 dark:border-emerald-950 dark:bg-[#111512]/90">
      <a
        className="inline-flex items-center gap-3 text-stone-950 no-underline dark:text-stone-50"
        href="#top"
        aria-label={`${profile.name} home`}
      >
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-stone-400 bg-[#fffaf2] font-black dark:border-emerald-800 dark:bg-emerald-950/30">
          {profile.initials}
        </span>
        <strong className="hidden text-sm tracking-normal sm:block">
          {profile.name}
        </strong>
      </a>

      <nav
        className="hidden items-center gap-1 rounded-lg border border-stone-300 bg-[#fffaf2] p-1 lg:inline-flex dark:border-emerald-900 dark:bg-emerald-950/30"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            className="inline-flex min-h-10 items-center rounded-md px-3.5 text-sm font-bold text-stone-500 no-underline hover:bg-stone-200/70 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-emerald-900/50 dark:hover:text-stone-50"
            key={item.href}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="inline-flex min-h-10 items-center justify-self-end rounded-md border border-stone-400 bg-[#fffaf2] px-3.5 font-extrabold text-stone-950 no-underline transition hover:-translate-y-0.5 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-stone-50"
        href={`mailto:${profile.email}`}
      >
        <Icon name="mail" />
        <span className="ml-2">Hire me</span>
      </a>
    </header>
  )
}
