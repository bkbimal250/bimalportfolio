import { stats } from '../../data/portfolio'
import { RevealSection, StaggerContainer, StaggerItem } from '../ui/Motion'

export function StatsSection() {
  return (
    <RevealSection
      className="grid border-b border-stone-300/80 md:grid-cols-4 dark:border-emerald-950"
      aria-label="Professional highlights"
    >
      <StaggerContainer className="contents">
        {stats.map((item) => (
          <StaggerItem
            as="div"
            className="border-b border-stone-300/80 px-5 py-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:px-9 dark:border-emerald-950"
            key={item.label}
          >
            <strong className="block text-3xl font-black leading-none text-stone-950 md:text-4xl dark:text-stone-50">
              {item.value}
            </strong>
            <span className="mt-2 block text-sm text-stone-500 dark:text-stone-300">
              {item.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </RevealSection>
  )
}
