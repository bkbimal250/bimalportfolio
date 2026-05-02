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
        <h2 className="text-3xl font-black leading-tight tracking-normal text-white md:text-5xl">
          Have a product, dashboard, or platform to build?
        </h2>
        <p className="mt-5 max-w-2xl text-white/75">
          Send the idea, deadline, and the result you want. I can help shape it
          into a clean build plan, scalable backend, and polished UI.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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
            className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4 text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/15"
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
              <strong className="block text-sm">{card.value}</strong>
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </RevealSection>
  )
}
