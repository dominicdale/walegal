import { FormEvent, useEffect, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Criminal Defence',
    body: 'Robust representation at every stage, from police interview to trial and appeal.',
  },
  {
    number: '02',
    title: 'Road Traffic Offences',
    body: 'We deal with all road traffic matters and can start preparing your defence today.',
  },
  {
    number: '03',
    title: 'Station Representation',
    body: 'It is incredibly important to speak to a solicitor before speaking to the police.',
  },
  {
    number: '04',
    title: 'Public Inquiries',
    body: 'Expert advocacy for individuals and organisations appearing before inquiries.',
  },
  {
    number: '05',
    title: 'Fatal Accident Inquiries',
    body: 'Compassionate, rigorous representation at Fatal Accident Inquiries before the Court.',
  },
  {
    number: '06',
    title: 'Immigration Law',
    body: 'Navigating the UK immigration system requires a dedicated and experienced partner.',
  },
  {
    number: '07',
    title: 'Mental Health Law',
    body: 'Robust legal expertise coupled with genuine compassion when you need it most.',
  },
  {
    number: '08',
    title: 'Sports Law',
    body: 'Legal advice with first-hand insight into the mechanics of sports tribunals.',
  },
  {
    number: '09',
    title: 'Licensing Law',
    body: 'Robust representation at licensing hearings before the council.',
  },
]

const legalLinks = [
  'Criminal Defence Lawyer',
  'Road Traffic Lawyer',
  'Police Station & Interview Representation',
  'Immigration Lawyer',
  'Public Inquiry & Fatal Accident Inquiries',
  'Licensing Lawyer',
  'Mental Health Law',
  'Sports Law',
]

const resourceLinks = [
  'Privacy & GDPR Policy',
  'SAR AML Policy',
  'Data Processing (Appendix 1)',
  'Data Sharing (Appendix 2)',
]

function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`wa-logo block bg-[url('/images/wa-legal-logo-transparent.png')] bg-no-repeat ${className}`}
      aria-label="WA Legal"
    />
  )
}

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current">
      <path d="M2.5 8h10M8.5 4l4 4-4 4" strokeWidth="1.25" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const phone = String(data.get('phone') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Website enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`)

    setFormStatus('Your email application is opening with your enquiry ready to send.')
    window.location.href = `mailto:info@walegal.co.uk?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-ivory">
      <div className="scroll-progress fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-ivory" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/92 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#top" className="shrink-0" aria-label="WA Legal home" onClick={() => setMenuOpen(false)}>
            <Logo className="h-12 w-[184px] sm:h-[54px] sm:w-[208px]" />
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            <a href="#about" className="nav-link">About us</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#funding" className="nav-link">Funding</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:01414671489" className="header-phone hidden sm:inline-flex">
              0141 467 1489
            </a>
            <button
              className="menu-button lg:hidden"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          className={`mobile-navigation lg:hidden ${menuOpen ? 'is-open' : ''}`}
          aria-label="Mobile navigation"
        >
          {['About', 'Services', 'Funding', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
              <Arrow />
            </a>
          ))}
          <a href="tel:01414671489" onClick={() => setMenuOpen(false)}>Call 0141 467 1489</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-grid relative flex min-h-[900px] items-end pt-24 lg:min-h-screen">
          <div className="hero-aura absolute inset-0" />
          <div className="relative z-10 mx-auto w-full max-w-[1540px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-14 lg:pb-16 lg:pt-36">
            <div className="hero-enter">
              <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-6">
                <Eyebrow>Your trusted legal voice</Eyebrow>
                <p className="hidden text-right text-[10px] uppercase tracking-[0.24em] text-white/42 sm:block">
                  Scotland / Nationwide representation
                </p>
              </div>

              <h1 className="mt-10 max-w-[12ch] font-display text-[clamp(4rem,8vw,8.2rem)] leading-[0.91] font-normal tracking-normal">
                Expert legal representation <em className="font-normal text-ivory/52">in Scotland.</em>
              </h1>

              <div className="mt-14 grid gap-10 border-t border-white/15 pt-8 lg:grid-cols-12 lg:items-end">
                <p className="max-w-[48ch] text-[15px] leading-7 text-white/58 lg:col-span-4 lg:text-base lg:leading-8">
                  Clear advice and formidable representation across criminal, road traffic, civil, and specialist areas of law.
                </p>
                <div className="flex flex-wrap gap-3 lg:col-span-4 lg:col-start-6">
                  <a href="#contact" className="button-ivory">Arrange a consultation</a>
                  <a href="#services" className="button-line">See our services</a>
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/12 border-y border-white/12 py-5 lg:col-span-3">
                  <MiniProof value="24/7" label="Advice" />
                  <MiniProof value="Aid" label="Available" />
                  <MiniProof value="UK" label="Reach" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ivory text-ink">
          <div className="mx-auto grid max-w-[1540px] lg:grid-cols-12">
            <div className="reveal border-black/15 px-5 py-20 sm:px-8 lg:col-span-5 lg:border-r lg:px-14 lg:py-28" data-reveal>
              <Eyebrow dark>Advice is available</Eyebrow>
              <h2 className="mt-7 max-w-[9ch] font-display text-[clamp(3.2rem,5vw,5.6rem)] leading-[0.96] font-normal tracking-normal">
                Let us understand what you need.
              </h2>
              <p className="mt-8 max-w-[42ch] text-[15px] leading-7 text-black/58">
                Whether you need urgent assistance or wish to arrange a consultation, our team is here to help. We offer legal aid and private fee services across all our practice areas.
              </p>
              <div className="mt-12 hidden items-center gap-4 border-t border-black/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-black/45 sm:flex">
                <span className="h-2 w-2 rounded-full bg-black" />
                Confidential enquiries
              </div>
            </div>

            <div className="reveal border-t border-black/15 px-5 py-16 sm:px-8 lg:col-span-7 lg:border-t-0 lg:px-14 lg:py-24" data-reveal>
              <form onSubmit={handleSubmit} className="consultation-form">
                <div className="grid gap-x-8 sm:grid-cols-2">
                  <FormField label="Your name" name="name" type="text" required autoComplete="name" />
                  <FormField label="Telephone" name="phone" type="tel" autoComplete="tel" />
                  <FormField label="Email address" name="email" type="email" required autoComplete="email" />
                  <div className="hidden border-b border-black/20 sm:block" aria-hidden="true" />
                </div>
                <label className="form-field mt-8 block">
                  <span>How can we help? *</span>
                  <textarea name="message" rows={4} required placeholder="Tell us briefly about your matter" />
                </label>
                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[42ch] text-[11px] leading-5 text-black/45">
                    Submitting opens your email application with the enquiry prepared for WA Legal.
                  </p>
                  <button className="button-dark shrink-0" type="submit">
                    Send enquiry
                    <Arrow />
                  </button>
                </div>
                <p className="mt-4 min-h-5 text-[11px] text-black/55" aria-live="polite">{formStatus}</p>
              </form>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10">
          <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
            <div className="reveal grid gap-12 lg:grid-cols-12" data-reveal>
              <div className="lg:col-span-3">
                <Eyebrow>A wealth of experience</Eyebrow>
                <p className="mt-8 font-display text-3xl leading-tight text-white/38">
                  Clear counsel.<br />Strong defence.
                </p>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <h2 className="max-w-[15ch] font-display text-[clamp(3rem,5.5vw,6rem)] leading-[0.98] font-normal tracking-normal">
                  Experience that carries weight when it matters.
                </h2>
              </div>
            </div>

            <div className="reveal mt-20 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-12" data-reveal>
              <div className="lg:col-span-3">
                <p className="text-[10px] uppercase leading-5 tracking-[0.24em] text-white/38">
                  Considered. Direct.<br />Always prepared.
                </p>
              </div>
              <div className="space-y-7 lg:col-span-4 lg:col-start-5">
                <p className="body-copy">
                  We have a wealth of experience in criminal defence law, road traffic law, and areas of civil law. Our team of dedicated solicitors brings decades of combined expertise to every case, whether you are facing a serious criminal charge or navigating a complex civil matter.
                </p>
                <p className="body-copy">
                  We understand the weight of legal proceedings and are committed to providing clear, considered, and effective representation at every stage.
                </p>
              </div>
              <div className="space-y-7 lg:col-span-4 lg:col-start-9">
                <p className="body-copy">
                  At WA Legal, we believe that access to justice should never feel out of reach. Our approach is direct, thorough, and always guided by the best interests of those we represent.
                </p>
                <p className="body-copy">
                  Legal aid is available for qualifying clients, and we also welcome private fee instructions.
                </p>
                <a href="#services" className="text-link">
                  See how we can help
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-white/[0.018]">
          <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
            <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
              <div className="lg:col-span-7">
                <Eyebrow>Our legal services</Eyebrow>
                <h2 className="mt-7 max-w-[12ch] font-display text-[clamp(3.2rem,5.7vw,6.2rem)] leading-[0.95] font-normal tracking-normal">
                  How we can support you.
                </h2>
              </div>
              <p className="body-copy lg:col-span-4 lg:col-start-9">
                Specialist knowledge, clear strategy, and representation shaped around the detail of your circumstances.
              </p>
            </div>

            <div className="mt-16 grid border-l border-t border-white/14 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.number} className="service-card reveal" data-reveal>
                  <div className="flex items-center justify-between">
                    <span className="service-number">{service.number}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/28 transition-colors duration-300 group-hover:bg-ivory" />
                  </div>
                  <div className="mt-20 sm:mt-24">
                    <h3 className="max-w-[12ch] font-display text-[2rem] leading-[1.04] font-normal tracking-normal sm:text-[2.35rem]">
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-[40ch] text-[13px] leading-6 text-white/52">{service.body}</p>
                  </div>
                  <a href="#contact" className="service-link" aria-label={`Enquire about ${service.title}`}>
                    Enquire
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="funding" className="bg-ivory text-ink">
          <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
            <div className="reveal grid gap-10 lg:grid-cols-12" data-reveal>
              <div className="lg:col-span-5">
                <Eyebrow dark>Flexible funding options available</Eyebrow>
                <h2 className="mt-7 max-w-[11ch] font-display text-[clamp(3rem,5vw,5.7rem)] leading-[0.97] font-normal tracking-normal">
                  Quality representation, made accessible.
                </h2>
              </div>
              <p className="max-w-[48ch] self-end text-[15px] leading-7 text-black/58 lg:col-span-5 lg:col-start-8">
                At WA Legal, we believe that access to quality legal representation should never be limited by financial concerns. We offer a range of funding options to suit your individual circumstances.
              </p>
            </div>

            <div className="mt-16 grid border-l border-t border-black/18 lg:grid-cols-2">
              <Funding
                number="01"
                title="Legal Aid Available"
                body="For those who qualify, we provide comprehensive legal aid services, ensuring that financial constraints do not stand between you and expert legal support."
              />
              <Funding
                number="02"
                title="Private Accounts"
                body="For clients seeking a premium, personalised experience, our private fee service offers an elevated level of care, discretion, and dedicated attention to your case."
              />
            </div>

            <div className="reveal mt-12 flex flex-col gap-6 border-t border-black/18 pt-8 md:flex-row md:items-center md:justify-between" data-reveal>
              <p className="max-w-[70ch] text-[13px] leading-6 text-black/56">
                Whatever your situation, our team will work with you to find the funding solution that best meets your needs. Contact us today to discuss your options.
              </p>
              <a href="#contact" className="button-dark shrink-0">
                Discuss your options
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-panel border-t border-white/10">
          <div className="mx-auto grid max-w-[1540px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-14 lg:py-32">
            <div className="reveal lg:col-span-6" data-reveal>
              <Eyebrow>Contact WA Legal</Eyebrow>
              <h2 className="mt-7 max-w-[10ch] font-display text-[clamp(3.4rem,6vw,6.8rem)] leading-[0.93] font-normal tracking-normal">
                Clear advice starts here.
              </h2>
              <a href="#contact" className="button-ivory mt-10">Make an enquiry</a>
            </div>
            <div className="reveal grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:self-end" data-reveal>
              <Contact label="Main office / 24/7" value="0141 467 1489" href="tel:01414671489" />
              <Contact label="Email" value="info@walegal.co.uk" href="mailto:info@walegal.co.uk" />
              <Contact label="Office" value={'6 St Ninian Terrace\nGlasgow, G5 0RJ'} />
              <Contact label="Coverage" value="Representation across Scotland" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/12 bg-black">
        <div className="mx-auto max-w-[1540px] px-5 pb-8 pt-16 sm:px-8 lg:px-14 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Logo className="h-14 w-[216px]" />
              <p className="mt-7 max-w-[34ch] text-[12px] leading-6 text-white/42">
                We have a wealth of experience in criminal defence, road traffic, and civil law. We represent clients across Scotland.
              </p>
              <div className="mt-7 flex gap-5">
                {['Facebook', 'X', 'Instagram'].map((social) => (
                  <a key={social} href="#top" className="footer-social">{social}</a>
                ))}
              </div>
            </div>

            <FooterList title="Legal advice" items={legalLinks} className="lg:col-span-3 lg:col-start-5" />
            <FooterList title="Additional resources" items={resourceLinks} className="lg:col-span-2" />

            <div className="lg:col-span-3">
              <p className="footer-heading">Get in touch</p>
              <a href="tel:01414671489" className="mt-5 block font-display text-3xl text-ivory transition hover:text-white">
                0141 467 1489
              </a>
              <p className="mt-6 whitespace-pre-line text-[12px] leading-6 text-white/48">
                {'WA Legal\n6 St Ninian Terrace\nGlasgow, G5 0RJ'}
              </p>
              <a href="mailto:info@walegal.co.uk" className="mt-4 inline-block text-[12px] text-white/62 transition hover:text-white">
                info@walegal.co.uk
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/12 pt-7 text-[9px] uppercase tracking-[0.18em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>WA Legal. Glasgow, Scotland.</p>
            <a href="#top" className="inline-flex items-center gap-2 transition hover:text-white">
              Back to top
              <Arrow />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[10px] font-semibold uppercase tracking-[0.27em] ${dark ? 'text-black/48' : 'text-white/46'}`}>
      {children}
    </p>
  )
}

function MiniProof({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 first:pl-0 last:pr-0">
      <strong className="block font-display text-xl font-normal">{value}</strong>
      <span className="mt-1 block text-[8px] uppercase tracking-[0.18em] text-white/38">{label}</span>
    </div>
  )
}

function FormField({
  label,
  name,
  type,
  required = false,
  autoComplete,
}: {
  label: string
  name: string
  type: string
  required?: boolean
  autoComplete: string
}) {
  return (
    <label className="form-field block">
      <span>{label}{required ? ' *' : ''}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} />
    </label>
  )
}

function Funding({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <article className="group flex min-h-[370px] flex-col justify-between border-b border-r border-black/18 p-7 transition-colors duration-500 hover:bg-black hover:text-ivory sm:p-10 lg:p-12">
      <span className="text-[10px] tracking-[0.24em] text-black/42 transition-colors group-hover:text-white/42">{number} / Available</span>
      <div>
        <h3 className="max-w-[13ch] font-display text-[2.5rem] leading-none font-normal tracking-normal sm:text-5xl">{title}</h3>
        <p className="mt-6 max-w-[52ch] text-[13px] leading-6 text-black/58 transition-colors group-hover:text-white/55">{body}</p>
      </div>
    </article>
  )
}

function Contact({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = <span className="whitespace-pre-line text-[14px] leading-7 text-white/70">{value}</span>
  return (
    <div className="border-t border-white/15 pt-5">
      <p className="mb-4 text-[9px] uppercase tracking-[0.24em] text-white/36">{label}</p>
      {href ? <a href={href} className="transition hover:text-white">{content}</a> : content}
    </div>
  )
}

function FooterList({ title, items, className = '' }: { title: string; items: string[]; className?: string }) {
  return (
    <div className={className}>
      <p className="footer-heading">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#contact" className="text-[11px] leading-5 text-white/46 transition hover:text-white">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
