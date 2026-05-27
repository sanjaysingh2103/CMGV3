import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Award, Users, TrendingUp, Sparkles, CheckCircle } from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"
import { team, values } from "@/lib/site"

export const metadata: Metadata = {
  title: "About CMG - Dubai-Based Australia Migration Specialists",
  description:
    "Meet the team at Commonwealth Migration Group - MARA-authorised migration consultancy based in Dubai, serving the GCC and Middle East with Australia-focused expertise.",
  openGraph: {
    title: "About CMG - Dubai-Based Australia Migration Specialists",
    description: "MARA-authorised consultancy connecting GCC professionals with their Australian future.",
    images: [{
      url: "/api/og?title=About+CMG&subtitle=Dubai-Based+Australia+Migration+Specialists&eyebrow=MARA-Authorised+%C2%B7+Est.+2009",
      width: 1200, height: 630,
    }],
  },
}

const valueIcons: Record<string, React.ElementType> = {
  Shield,
  Award,
  Users,
  TrendingUp,
  Sparkles,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Commonwealth Migration Group",
  url: "https://commonwealthmigration.com.au",
  logo: "https://commonwealthmigration.com.au/logo/cmg-logo.png",
  description: "MARA-registered Australian immigration and migration agents.",
  sameAs: [
    "https://www.linkedin.com/company/commonwealthmigrationgroup",
    "https://www.facebook.com/CMGMigration",
  ],
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <HeroBanner
        eyebrow="MARA-Registered · Sydney-Based · Est. 2009"
        headline="Experts Who Make Australia Possible"
        subheadline="Commonwealth Migration Group is a team of MARA-registered agents passionate about connecting people with Australia's extraordinary opportunities."
        bgImage="/hero-about.png"
        gradient="gradient-hero-blue"
        texture="dots"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "Meet Our Team", href: "#team", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Our Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-cmg-red" />
              <p className="eyebrow text-cmg-red">Our Story</p>
              <span className="h-px w-6 bg-cmg-red" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">
              GCC&rsquo;s Trusted Australia Migration Partner
            </h2>
            <div className="space-y-4 text-cmg-slate leading-relaxed">
              <p>
                Commonwealth Migration Group (CMG) was established with a vision to provide ethical, transparent, and professional Australia migration solutions for skilled professionals and families across the GCC region - particularly from Dubai and the wider Middle East.
              </p>
              <p>
                CMG was founded by a team of migration professionals and industry experts who identified the growing demand for genuine Australia-focused immigration guidance backed by proper compliance, strategic case management, and personalised support.
              </p>
              <p>
                The idea behind CMG was to bridge the gap between aspirants and reliable migration services by offering MARA-authorised guidance, modern technology-driven processing systems, and client-centric consultation services under one platform.
              </p>
              <p>
                With Australia continuing to attract skilled migrants globally, CMG simplifies the migration journey for applicants by providing end-to-end assistance for skilled migration, family visas, student pathways, and professional services such as skill assessments, EOI management, and visa documentation.
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "GCC", label: "Specialist Focus" },
                { value: "MARA", label: "Authorised Agents" },
                { value: "AI", label: "Tech-Backed Workflow" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-cmg-blue leading-none">{value}</div>
                  <div className="text-xs text-cmg-slate mt-2 font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Offset frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-cmg-gold/30" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(26,24,38,0.15)]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
                alt="CMG team in a collaborative meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent dot */}
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-cmg-gold shadow-gold" aria-hidden />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Vision */}
          <div className="relative bg-white rounded-2xl border border-cmg-border border-t-[3px] border-t-cmg-blue p-10 shadow-card">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-cmg-blue" />
              <p className="eyebrow text-cmg-blue">Our Vision</p>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cmg-text mb-5 leading-tight">
              A benchmark for trust &amp; compliance in Australia migration
            </h3>
            <p className="text-cmg-slate leading-relaxed">
              To redefine Australia migration services in the Middle East - empowering skilled professionals, students, and families with transparent guidance, ethical practices, and world-class migration solutions tailored to their long-term settlement goals in Australia.
            </p>
          </div>

          {/* Mission */}
          <div className="relative bg-white rounded-2xl border border-cmg-border border-t-[3px] border-t-cmg-red p-10 shadow-card">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-cmg-red" />
              <p className="eyebrow text-cmg-red">Our Mission</p>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cmg-text mb-5 leading-tight">
              Reliable, compliant, result-oriented Australia migration
            </h3>
            <p className="text-cmg-slate leading-relaxed mb-4">
              We deliver MARA-authorised expertise, strategic case management, and technology-driven support systems for GCC-based aspirants. We are committed to:
            </p>
            <ul className="space-y-2 text-cmg-slate text-sm">
              {[
                "Transparent and ethical migration guidance",
                "Simplifying complex Australia visa pathways",
                "Personalised solutions based on each client&rsquo;s profile",
                "End-to-end support - from assessment to visa outcome",
                "High standards of professionalism and compliance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-cmg-red shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us - 5 differentiators */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-cmg-red" />
              <p className="eyebrow text-cmg-red">Why Choose CMG</p>
              <span className="h-px w-6 bg-cmg-red" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">5 reasons clients trust us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => {
              const Icon = valueIcons[val.icon] ?? Shield
              return (
                <div
                  key={val.title}
                  className="rounded-xl bg-white border border-cmg-cream-dark border-t-[3px] border-t-cmg-gold p-6 shadow-[0_2px_12px_rgba(26,24,38,0.05)] hover:shadow-[0_8px_28px_rgba(26,24,38,0.10)] transition-shadow duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-cmg-light-blue flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-cmg-blue" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-cmg-ink mb-2">{val.title}</h3>
                  <p className="text-cmg-slate text-sm leading-relaxed">{val.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-cmg-red mb-3">Our People</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-ink">
              Meet Our Migration Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl overflow-hidden border border-cmg-cream-dark bg-white shadow-[0_2px_16px_rgba(26,24,38,0.06)] hover:shadow-[0_12px_36px_rgba(26,24,38,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* MARA badge overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow">
                    <div className="w-4 h-4 rounded-full bg-cmg-gold flex items-center justify-center">
                      <span className="text-[8px] font-bold text-cmg-navy">M</span>
                    </div>
                    <span className="text-[10px] font-semibold text-cmg-navy">MARA</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-cmg-ink mb-0.5">{member.name}</h3>
                  <p className="text-cmg-blue font-semibold text-sm mb-1">{member.title}</p>
                  <p className="text-cmg-slate text-xs mb-3">{member.mara} · {member.experience}</p>
                  <p className="text-cmg-slate text-sm leading-relaxed">
                    Specialises in {member.specialisation}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARA Registration */}
      <section className="py-24 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="eyebrow text-cmg-red mb-3">Your Protection</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-ink mb-6">
              Your Protection. Our Commitment.
            </h2>
            <div className="space-y-4 text-cmg-slate leading-relaxed">
              <p>
                All CMG migration agents are registered with the Office of the Migration Agents
                Registration Authority (OMARA). This means you receive the protection of the
                Migration Agents Code of Conduct, fair fee agreements, and access to the MARA
                complaints process.
              </p>
              <p>
                Always verify your agent&rsquo;s MARA registration at{" "}
                <a
                  href="https://www.mara.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cmg-blue hover:underline font-medium"
                >
                  mara.gov.au
                </a>{" "}
                before engaging any migration agent&rsquo;s services.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "MARA Code of Conduct compliance",
                "Professional indemnity insurance",
                "Transparent written fee agreements",
                "OMARA complaints pathway available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-cmg-gold shrink-0" />
                  <span className="text-cmg-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-cmg-cream-dark shadow-[0_2px_12px_rgba(26,24,38,0.06)]">
              <div className="w-12 h-12 rounded-full bg-cmg-gold flex items-center justify-center shrink-0">
                <span className="text-lg font-bold text-cmg-navy">M</span>
              </div>
              <div>
                <p className="font-semibold text-cmg-ink text-sm">MARA Registered Migration Agents</p>
                <p className="text-cmg-slate text-xs">Office of the Migration Agents Registration Authority</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Editorial stat circle */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full gradient-navy-gold flex items-center justify-center shadow-[0_20px_60px_rgba(13,35,87,0.35)]">
                <div className="text-center text-white">
                  <div
                    className="font-cormorant leading-none text-cmg-gold-light"
                    style={{ fontSize: "5rem", fontWeight: 300 }}
                  >
                    97%
                  </div>
                  <div className="text-white/75 mt-2 font-medium text-sm tracking-wide">Success Rate</div>
                </div>
              </div>
              {/* Ring decoration */}
              <div className="absolute inset-0 rounded-full border-2 border-cmg-gold/20 scale-110 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to work with CMG&rsquo;s expert team?"
        body="Book a free 30-minute consultation with a MARA-registered CMG agent. Available online worldwide."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Call Us Now", href: "tel:+61299999999" }}
        variant="navy-gold"
      />
    </>
  )
}
