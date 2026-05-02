import { projects } from '../../data/portfolio'
import { Icon } from '../ui/Icon'
import { MotionCard, StaggerContainer } from '../ui/Motion'
import { Section, Tag } from '../ui/Section'

export function ProjectsSection() {
  return (
    <Section
      className="bg-stone-200/50 dark:bg-[#151a17]"
      eyebrow="Selected Work"
      id="work"
      title="Live projects with production workflows and measurable usage."
    >
      <StaggerContainer className="grid gap-3.5">
        {projects.map((project, index) => (
          <MotionCard
            className="grid min-w-0 gap-4 rounded-lg border border-stone-300 bg-[#fffaf2] p-4 sm:gap-5 sm:p-6 lg:grid-cols-[72px_minmax(0,1fr)_minmax(260px,0.45fr)] dark:border-emerald-900 dark:bg-emerald-950/30"
            key={project.name}
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg border border-stone-400 bg-white text-sm font-black text-teal-950 sm:h-12 sm:w-12 sm:text-base dark:border-emerald-800 dark:bg-[#181e1a] dark:text-teal-200">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="text-xs font-black uppercase text-teal-700 dark:text-teal-200">
                {project.type}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <h3 className="text-lg font-black leading-snug text-stone-950 sm:text-xl dark:text-stone-50">
                  {project.name}
                </h3>
                <a
                  className="inline-flex min-h-11 items-center gap-1 text-sm font-black text-teal-800 no-underline dark:text-teal-200"
                  href={project.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit
                  <Icon name="external" className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
            <div>
              <strong className="block text-base font-black text-stone-950 dark:text-stone-50">
                {project.impact}
              </strong>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </MotionCard>
        ))}
      </StaggerContainer>
    </Section>
  )
}
