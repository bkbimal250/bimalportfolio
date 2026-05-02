import heroImg from '../../assets/hero.png'
import { profile } from '../../data/portfolio'
import { ButtonLink } from '../ui/Button'
import { RevealSection } from '../ui/Motion'
import { Eyebrow } from '../ui/Section'

export function HeroSection() {
  return (
    <RevealSection className="relative grid items-center gap-8 overflow-hidden border-b border-stone-300/80 px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:min-h-[calc(100svh-73px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-20 lg:px-16 dark:border-emerald-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_40%)]"></div>

      <div className="relative z-10 min-w-0">
        <Eyebrow>{profile.role}</Eyebrow>

        <h1 className="max-w-3xl text-[clamp(34px,12vw,96px)] font-black leading-[0.95] text-stone-950 dark:text-stone-50">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg md:text-xl dark:text-stone-300">
          {profile.headline}
        </p>

        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <ButtonLink href="#work" icon="arrow">
            View work
          </ButtonLink>

          <ButtonLink href={`mailto:${profile.email}`} icon="mail" variant="light">
            Contact
          </ButtonLink>
        </div>
      </div>

      <div className="relative z-10 flex min-h-0 flex-col justify-between rounded-2xl border border-stone-300 bg-[#fffaf2] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-6 md:min-h-[520px] md:p-8 dark:border-emerald-800 dark:bg-emerald-950/30">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 flex-col gap-3">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-semibold text-stone-900 shadow-sm sm:mt-2 sm:px-4 dark:border-emerald-900 dark:bg-[#181e1a] dark:text-stone-50">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"></span>
              <span className="truncate">{profile.location} / Available</span>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-semibold text-stone-900 shadow-sm transition hover:border-emerald-400 hover:text-emerald-600 sm:px-4 dark:border-emerald-900 dark:bg-[#181e1a] dark:text-stone-50"
            >
              <span className="shrink-0 text-emerald-600">Email</span>
              <span className="truncate">{profile.email}</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-semibold text-stone-900 shadow-sm transition hover:border-emerald-400 hover:text-emerald-600 sm:px-4 dark:border-emerald-900 dark:bg-[#181e1a] dark:text-stone-50"
            >
              <span className="shrink-0 text-emerald-600">Link</span>
              <span className="truncate">LinkedIn Profile</span>
            </a>
          </div>

          <div className="group relative mx-auto w-full max-w-[170px] shrink-0 sm:mx-0 sm:w-[150px] md:w-[240px] md:max-w-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/30 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"></div>

            <img
              src={profile.heroImg || heroImg}
              alt={profile.name}
              className="relative z-10 h-auto w-full rounded-2xl border border-white/40 object-cover shadow-2xl transition duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1"
            />
          </div>
        </div>

        <div className="mt-6 max-w-full overflow-hidden rounded-xl border border-stone-400 bg-slate-900 text-emerald-100 shadow-lg sm:mt-8">
          <div className="flex gap-2 border-b border-white/10 p-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
          </div>

          <pre className="max-w-full overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:p-5 sm:text-sm">{`const developer = {
  name: 'Bimal Vishwakarma',
  stack: ['React', 'Node', 'Django','FastAPI'],
  ships: ['SpaAdvisor', 'WorkSpa','Mastercall']
}`}</pre>
        </div>
      </div>
    </RevealSection>
  )
}
