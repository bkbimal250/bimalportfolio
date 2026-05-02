import { services } from '../../data/portfolio'
import { Icon } from '../ui/Icon'
import { StaggerContainer, StaggerItem } from '../ui/Motion'
import { Section } from '../ui/Section'

export function ServicesSection() {
  return (
    <Section
      eyebrow="Services"
      id="services"
      title="Solutions designed to grow your business"
      description="From websites to full-scale applications, I build systems focused on leads, automation, and real business results."
    >
      <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">

        {services.map((service) => (
          <StaggerItem
            key={service}
            as="div"
            className="group relative min-w-0 rounded-xl border border-stone-300 bg-[#fffaf2] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 dark:border-emerald-900 dark:bg-emerald-950/30"
          >

            {/* ICON */}
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition group-hover:scale-110 dark:bg-emerald-900/40 dark:text-emerald-300">
              <Icon name="check" />
            </div>

            {/* TEXT */}
            <p className="text-sm font-semibold leading-relaxed text-stone-800 dark:text-stone-100">
              {service}
            </p>

            {/* subtle hover glow */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-emerald-200/20 via-transparent to-transparent dark:from-emerald-500/10"></div>

          </StaggerItem>
        ))}

      </StaggerContainer>
    </Section>
  )
}
