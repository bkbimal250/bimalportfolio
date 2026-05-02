import { experience } from '../../data/portfolio'
import { MotionCard, RevealSection, StaggerContainer } from '../ui/Motion'
import { Eyebrow, SectionTitle, sectionClass } from '../ui/Section'

export function ExperienceSection() {
  return (
    <RevealSection
      className={`${sectionClass} grid gap-10 lg:grid-cols-[minmax(260px,0.4fr)_minmax(0,0.6fr)]`}
      id="experience"
    >
      {/* LEFT */}
      <div>
        <Eyebrow>Experience</Eyebrow>
        <SectionTitle>
          Building real-world systems that deliver measurable results.
        </SectionTitle>

        <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
          From internship learning to shipping production-grade platforms,
          my focus has been on solving business problems with scalable systems.
        </p>
      </div>

      {/* RIGHT */}
      <StaggerContainer className="relative grid gap-6">

        {/* timeline line */}
        <div className="absolute left-2 top-0 h-full w-[2px] bg-stone-300 dark:bg-emerald-900"></div>

        {experience.map((item, index) => (
          <MotionCard
            key={`${item.period}-${item.company}`}
            className="relative ml-6 rounded-xl border border-stone-300 bg-[#fffaf2] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900 dark:bg-emerald-950/30"
          >

            {/* timeline dot */}
            <span className="absolute -left-[30px] top-6 h-4 w-4 rounded-full border-2 border-white bg-emerald-600 shadow-md"></span>

            {/* PERIOD */}
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              {item.period}
            </span>

            {/* ROLE */}
            <h3 className="mt-2 text-xl font-bold text-stone-950 dark:text-stone-50">
              {item.role}
            </h3>

            {/* COMPANY */}
            <p className="mt-1 text-sm font-semibold text-stone-500 dark:text-stone-300">
              {item.company} • {item.location}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              {item.detail}
            </p>

            {/* subtle hover gradient */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-emerald-200/20 via-transparent to-transparent dark:from-emerald-500/10"></div>
          </MotionCard>
        ))}
      </StaggerContainer>
    </RevealSection>
  )
}