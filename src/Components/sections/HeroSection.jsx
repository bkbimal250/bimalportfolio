import { profile } from '../../data/portfolio'
import { ButtonLink } from '../ui/Button'
import { RevealSection } from '../ui/Motion'
import { Eyebrow } from '../ui/Section'

export function HeroSection() {
  return (
    <RevealSection className="relative grid min-h-[calc(100svh-73px)] items-center gap-12 border-b border-stone-300/80 px-6 py-14 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-20 lg:px-16 dark:border-emerald-950">

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_40%)]"></div>

      {/* LEFT */}
      <div className="relative z-10">
        <Eyebrow>{profile.role}</Eyebrow>

        <h1 className="max-w-3xl text-[clamp(42px,7vw,96px)] font-black leading-[0.95] text-stone-950 dark:text-stone-50">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl dark:text-stone-300">
          {profile.headline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href="#work" icon="arrow">
            View work
          </ButtonLink>

          <ButtonLink href={`mailto:${profile.email}`} icon="mail" variant="light">
            Contact
          </ButtonLink>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative z-10 flex min-h-[440px] flex-col justify-between rounded-2xl border border-stone-300 bg-[#fffaf2] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] md:min-h-[520px] dark:border-emerald-800 dark:bg-emerald-950/30">

        {/* TOP ROW */}
        <div className="flex items-start justify-between gap-6">

          <div className="flex flex-col gap-3">

            {/* LOCATION */}
            <div className="inline-flex items-center mt-2 gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm dark:border-emerald-900 dark:bg-[#181e1a] dark:text-stone-50">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              {profile.location} / Available
            </div>

            {/* EMAIL */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm transition hover:border-emerald-400 hover:text-emerald-600 dark:border-emerald-900 dark:bg-[#181e1a] dark:text-stone-50"
            >
              <span className="text-emerald-600">✉</span>
              {profile.email}
            </a>

            {/* LINKEDIN */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-900 shadow-sm transition hover:border-emerald-400 hover:text-emerald-600 dark:border-emerald-900 dark:bg-[#181e1a] dark:text-stone-50"
            >
              <span className="text-emerald-600">🔗</span>
              LinkedIn Profile
            </a>

          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="group relative w-[150px] md:w-[240px] shrink-0">

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/30 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"></div>

            {/* image */}
            <img
              src={profile.heroImg || '/images/profile.png'}
              alt={profile.name}
              className="relative z-10 w-full rounded-2xl border border-white/40 object-cover shadow-2xl transition duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1"
            />
          </div>
        </div>

        {/* TERMINAL CARD */}
        <div className="mt-8 overflow-hidden rounded-xl border border-stone-400 bg-slate-900 text-emerald-100 shadow-lg">
          <div className="flex gap-2 border-b border-white/10 p-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
          </div>

          <pre className="p-5 font-mono text-sm leading-relaxed">{`const developer = {
  name: 'Bimal Vishwakarma',
  stack: ['React', 'Node', 'Django','FastAPI'],
  ships: ['SpaAdvisor', 'WorkSpa','Mastercall']
}`}</pre>
        </div>

      </div>
    </RevealSection>
  )
}