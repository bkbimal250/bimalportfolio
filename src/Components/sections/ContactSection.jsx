import { profile } from '../../data/portfolio'
import { ButtonLink } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { RevealSection, StaggerContainer, StaggerItem } from '../ui/Motion'
import { sectionClass } from '../ui/Section'

const contactCards = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}` },
  { icon: 'map', label: 'Location', value: profile.location, href: profile.portfolio },
]

export function ContactSection() {
  return (
    <RevealSection
      className={`${sectionClass} grid gap-8 bg-stone-950 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)] dark:bg-black`}
      id="contact"
    >
      <div>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.08em] text-orange-300">
          Contact
        </p>
        <h2 className="text-2xl font-black leading-tight tracking-normal text-white sm:text-3xl md:text-5xl">
          Have a product, dashboard, or platform to build?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base">
          Send the idea, deadline, and the result you want. I can help shape it
          into a clean build plan, scalable backend, and polished UI.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <ButtonLink href={`mailto:${profile.email}`} icon="mail">
            Email me
          </ButtonLink>
          <ButtonLink href={profile.github} icon="github" variant="ghost" external>
            GitHub
          </ButtonLink>
          <ButtonLink href={profile.linkedin} icon="arrow" variant="ghost" external>
            LinkedIn
          </ButtonLink>
        </div>
      </div>

      <StaggerContainer className="grid gap-3">
        {contactCards.map((card) => (
          <StaggerItem
            as="a"
            className="flex min-h-16 min-w-0 items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4 text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/15"
            href={card.href}
            key={card.label}
          >
            <span className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-orange-200">
              <Icon name={card.icon} />
            </span>
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.08em] text-white/50">
                {card.label}
              </span>
              <strong className="block break-all text-sm">{card.value}</strong>
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </RevealSection>
  )
}
