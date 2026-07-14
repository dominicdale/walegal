import { useEffect } from 'react'

const services = [
  {
    number: '01',
    title: 'Criminal defence',
    body: 'Decisive representation from the first police interview through to trial and appeal.',
  },
  {
    number: '02',
    title: 'Road traffic law',
    body: 'Specialist advice delivered with urgency when your licence, livelihood, or reputation is at risk.',
  },
  {
    number: '03',
    title: 'Police station representation',
    body: 'Immediate, composed guidance before you speak to the police, available when it matters most.',
  },
]

const expertise = ['Immigration', 'Public inquiries', 'Fatal accident inquiries', 'Licensing', 'Mental health law', 'Sports law']

function Logo({ className = '' }: { className?: string }) {
  return <span className={`wa-logo block bg-[url('/images/wa-legal-logo-transparent.png')] bg-no-repeat ${className}`} aria-label="WA Legal" />
}

function App() {
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
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-stone">
      <div className="scroll-progress fixed inset-x-0 top-0 z-[60] h-px origin-left bg-stone" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[92px] max-w-[1480px] items-center justify-between px-6 lg:px-12">
          <a href="#top" className="shrink-0" aria-label="WA Legal home">
            <Logo className="h-12 w-[190px] lg:h-14 lg:w-[220px]" />
          </a>

          <nav className="hidden items-center gap-9 xl:flex" aria-label="Main navigation">
            {['About', 'Expertise', 'Funding', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <a href="tel:01414671489" className="button-outline hidden md:inline-flex">
            0141 467 1489
          </a>
        </div>
      </header>

      <main id="top">
        <section className="line-field relative min-h-screen pt-[92px]">
          <div className="hero-glow absolute inset-0" />
          <div className="mx-auto flex min-h-[calc(100vh-92px)] max-w-[1480px] flex-col justify-center px-6 py-16 lg:px-12 lg:py-20">
            <div className="hero-enter relative z-10 w-full">
              <Eyebrow>Criminal defence solicitors, Scotland</Eyebrow>
              <div className="mt-10 border-y border-white/14 py-10 lg:py-14">
                <h1 className="font-display text-[clamp(4rem,9vw,8.8rem)] leading-[0.92] tracking-normal">
                  <span className="block text-left">Expert advocacy.</span>
                  <span className="mt-2 block text-right text-stone/72">Clear direction.</span>
                </h1>
              </div>
              <div className="grid gap-8 pt-9 lg:grid-cols-12 lg:items-start">
                <p className="max-w-[48ch] text-[15px] leading-7 text-stone/62 lg:col-span-5 lg:text-base lg:leading-8">
                  Award-winning criminal defence and road traffic solicitors offering legal aid, private service, and representation across Scotland.
                </p>
                <div className="flex flex-wrap gap-3 lg:col-span-4 lg:col-start-7">
                  <a href="#contact" className="button-light">Arrange a consultation</a>
                  <a href="#expertise" className="button-outline">Explore expertise</a>
                </div>
                <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:col-start-11">
                  <Detail label="Funding" value="Legal aid & private" />
                  <Detail label="Reach" value="Nationwide" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-[1480px] divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-12">
            <Proof figure="24/7" label="Advice available" />
            <Proof figure="Scotland" label="Nationwide representation" />
            <Proof figure="Legal aid" label="And private instructions" />
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-[1480px] gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
          <div className="reveal lg:col-span-4" data-reveal>
            <Eyebrow>A wealth of experience</Eyebrow>
            <div className="mt-12 border-t border-white/15 pt-6">
              <span className="font-display text-6xl leading-none text-white/18">“</span>
              <p className="mt-4 max-w-[18ch] font-display text-2xl leading-[1.25] tracking-normal text-white/70">
                Clarity at every stage. Resolve when it matters.
              </p>
            </div>
          </div>
          <div className="reveal lg:col-span-7 lg:col-start-6" data-reveal>
            <h2 className="font-display text-[clamp(3rem,5vw,5.4rem)] leading-[0.98] tracking-normal">
              Serious expertise, delivered with humanity.
            </h2>
            <div className="mt-10 grid gap-7 border-t border-white/12 pt-8 md:grid-cols-2">
              <p className="body-copy">
                WA Legal has extensive experience across criminal defence, road traffic law, and civil matters. We bring clear judgement and robust advocacy to every instruction.
              </p>
              <p className="body-copy">
                Every client receives considered, direct advice, whether funded through legal aid or a tailored private arrangement.
              </p>
            </div>
          </div>
        </section>

        <section id="expertise" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
            <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
              <div className="lg:col-span-7">
                <Eyebrow>Our expertise</Eyebrow>
                <h2 className="mt-6 max-w-[14ch] font-display text-[clamp(3rem,5vw,5.4rem)] leading-[0.98] tracking-normal">
                  Focused representation when the outcome matters.
                </h2>
              </div>
              <p className="body-copy lg:col-span-4 lg:col-start-9">
                Specialist knowledge, calm strategy, and a defence built around the detail of your case.
              </p>
            </div>

            <div className="mt-16 border-t border-white/15">
              {services.map((service) => (
                <article key={service.number} className="reveal group grid gap-5 border-b border-white/15 py-12 transition-colors duration-500 hover:bg-white/[0.025] md:grid-cols-12 md:items-center" data-reveal>
                  <span className="text-[10px] tracking-[0.25em] text-white/38 md:col-span-1">{service.number}</span>
                  <h3 className="font-display text-[clamp(2.1rem,3.5vw,3.8rem)] leading-[1.02] tracking-normal md:col-span-5">
                    {service.title}
                  </h3>
                  <p className="max-w-[48ch] text-sm leading-7 text-white/57 md:col-span-4">{service.body}</p>
                  <a href="#contact" className="justify-self-start text-[10px] uppercase tracking-[0.24em] text-white/60 transition group-hover:text-white md:col-span-2 md:justify-self-end">
                    Enquire <span className="ml-2">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <p className="text-[10px] uppercase tracking-[0.27em] text-white/40 lg:col-span-3">Further practice areas</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 lg:col-span-9">
                {expertise.map((item) => <span key={item} className="text-sm text-white/64">{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="funding" className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="reveal grid overflow-hidden bg-stone text-ink lg:grid-cols-12" data-reveal>
            <div className="border-black/15 p-8 sm:p-12 lg:col-span-5 lg:p-16">
              <Eyebrow dark>Flexible funding</Eyebrow>
              <h2 className="mt-7 max-w-[11ch] font-display text-[clamp(2.25rem,3vw,3.4rem)] leading-[1.02] tracking-normal">
                Access to exceptional representation.
              </h2>
              <div className="mt-12 h-px w-20 bg-black/25" />
            </div>
            <div className="grid border-t border-black/15 lg:col-span-7 lg:grid-cols-2 lg:border-l lg:border-t-0">
              <Funding title="Legal aid" body="Comprehensive legal aid services are available to qualifying clients." />
              <Funding title="Private service" body="A tailored, discreet service with dedicated attention at every stage." bordered />
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="reveal mx-auto grid max-w-[1480px] gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-28" data-reveal>
            <div className="lg:col-span-6">
              <Eyebrow>Speak with WA Legal</Eyebrow>
              <h2 className="mt-7 max-w-[11ch] font-display text-[clamp(3.2rem,5vw,5.4rem)] leading-[0.98] tracking-normal">
                Clear advice starts here.
              </h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
              <Contact label="Telephone" value="0141 467 1489" href="tel:01414671489" />
              <Contact label="Email" value="info@walegal.co.uk" href="mailto:info@walegal.co.uk" />
              <Contact label="Office" value={'6 St Ninian Terrace\nGlasgow, G5 0RJ'} />
              <Contact label="Coverage" value="Representation across Scotland" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-12">
          <Logo className="h-12 w-[190px]" />
          <p className="max-w-[52ch] text-[10px] leading-5 tracking-[0.08em] text-white/35">
            WA Legal is a trading name of WA Solicitors Ltd. This concept homepage uses content supplied by the WA Legal website.
          </p>
        </div>
      </footer>
    </div>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${dark ? 'text-black/45' : 'text-white/45'}`}>{children}</p>
}

function Detail({ label, value, className = '' }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[9px] uppercase tracking-[0.24em] text-white/38">{label}</p>
      <p className="mt-2 text-[12px] leading-5 text-white/72">{value}</p>
    </div>
  )
}

function Proof({ figure, label }: { figure: string; label: string }) {
  return (
    <div className="flex min-h-32 flex-col justify-between gap-5 py-7 sm:px-8 sm:first:pl-0 sm:last:pr-0 xl:min-h-0 xl:flex-row xl:items-baseline xl:justify-start xl:gap-4">
      <strong className="whitespace-nowrap font-display text-3xl font-normal tracking-normal">{figure}</strong>
      <span className="max-w-[20ch] text-[9px] uppercase leading-5 tracking-[0.24em] text-white/42">{label}</span>
    </div>
  )
}

function Funding({ title, body, bordered = false }: { title: string; body: string; bordered?: boolean }) {
  return (
    <article className={`flex min-h-[360px] flex-col justify-between p-8 sm:p-10 ${bordered ? 'border-t border-black/15 lg:border-l lg:border-t-0' : ''}`}>
      <span className="text-[10px] uppercase tracking-[0.25em] text-black/42">Available</span>
      <div>
        <h3 className="font-display text-3xl tracking-normal">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-black/58">{body}</p>
      </div>
    </article>
  )
}

function Contact({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = <span className="whitespace-pre-line text-[15px] leading-7 text-white/76">{value}</span>
  return (
    <div className="border-t border-white/15 pt-5">
      <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-white/38">{label}</p>
      {href ? <a href={href} className="transition hover:text-white">{content}</a> : content}
    </div>
  )
}

export default App
