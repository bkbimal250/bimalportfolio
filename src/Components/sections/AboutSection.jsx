import { profile, toolGroups } from '../../data/portfolio'
import { RevealSection } from '../ui/Motion'
import { Eyebrow, SectionTitle, sectionClass, Tag } from '../ui/Section'

export function AboutSection() {
  return (
    <RevealSection
      className={`${sectionClass} grid gap-12 lg:grid-cols-[minmax(260px,0.9fr)_minmax(280px,1.1fr)]`}
      id="about"
    >
      {/* LEFT */}
      <div>
        <Eyebrow>About</Eyebrow>

        <SectionTitle>
          I build scalable digital products that solve real business problems.
        </SectionTitle>

        <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
          From idea to deployment, I focus on building systems that are fast,
          reliable, and designed for growth.
        </p>
      </div>

      {/* RIGHT */}
      <div className="grid gap-8">

        {/* TEXT */}
        <div className="grid gap-5 text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">
          <p>{profile.summary}</p>

          {/* 🔥 Highlighted impact */}
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-4 text-sm font-medium text-emerald-900 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200">
            {profile.impact}
          </div>
        </div>

        {/* SKILLS CARD */}
        <div className="rounded-xl border border-stone-300 bg-[#fffaf2] p-6 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/30">

          {toolGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 border-b border-stone-200 py-3 last:border-none dark:border-emerald-900"
            >
              {/* LABEL */}
              <strong className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                {group.label}
              </strong>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </RevealSection>
  )
}