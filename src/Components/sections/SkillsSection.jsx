import { skills } from '../../data/portfolio'
import { Icon } from '../ui/Icon'
import { MotionCard, StaggerContainer } from '../ui/Motion'
import { Section, Tag } from '../ui/Section'

export function SkillsSection() {
  return (
    <Section
      eyebrow="Skills"
      id="skills"
      title="Technologies I use to build scalable, production-ready systems"
      description="From frontend interfaces to backend infrastructure, I focus on performance, scalability, and real-world usability."
    >
      <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">

        {skills.map((skill) => (
          <MotionCard
            key={skill.title}
            className="group relative min-w-0 rounded-xl border border-stone-300 bg-[#fffaf2] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 dark:border-emerald-900 dark:bg-emerald-950/30"
          >

            {/* ICON */}
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700 transition group-hover:scale-110 dark:bg-teal-900/40 dark:text-teal-300">
              <Icon name="spark" />
            </div>

            {/* TITLE */}
            <h3 className="text-base font-bold leading-snug text-stone-950 sm:text-lg dark:text-stone-50">
              {skill.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              {skill.text}
            </p>

            {/* TAGS */}
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            {/* subtle hover gradient */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-teal-200/20 via-transparent to-transparent dark:from-teal-500/10"></div>

          </MotionCard>
        ))}

      </StaggerContainer>
    </Section>
  )
}
