import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Award, Users, TrendingUp, CheckCircle } from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import CTABanner from "@/components/CTABanner"
import JsonLd from "@/components/JsonLd"
import { team, values } from "@/lib/site"

export const metadata: Metadata = {
  title: "About CMG — MARA-Registered Australian Migration Agents",
  description:
    "Meet the expert team at Commonwealth Migration Group. MARA-registered agents with 15+ years experience across all Australian visa types.",
}

const valueIcons: Record<string, React.ElementType> = {
  Shield,
  Award,
  Users,
  TrendingUp,
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
        headline="Experts Who Make Australia Possible"
        subheadline="Commonwealth Migration Group is a team of MARA-registered agents passionate about connecting people with Australia's extraordinary opportunities."
        bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920"
        gradient="gradient-hero"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "Meet Our Team", href: "#team", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Our Story */}
      <section className="py-24 px-4 bg-cmg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-cmg-red mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-ink mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-cmg-slate leading-relaxed">
              <p>
                Founded with a singular mission — to cut through immigration complexity and deliver real results — Commonwealth Migration Group has grown into one of Australia&rsquo;s most trusted migration agencies.
              </p>
              <p>
                Our team of MARA-registered agents brings decades of combined experience across every visa category, from skilled migration and family reunions to employer sponsorship and business investment visas.
              </p>
              <p>
                We believe that immigration should be empowering, not intimidating. That&rsquo;s why we invest in every client relationship, providing clear advice, transparent pricing, and relentless follow-through until you hold your visa in hand.
              </p>
              <p>
                The story of Commonwealth Migration Group began with a simple observation: too many skilled, deserving people were having their Australian dreams derailed by poor advice, incomplete applications, or simply not knowing where to start. Our founders — themselves immigrants who navigated Australia&rsquo;s migration system — set out to build the agency they wished had existed when they arrived.
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "97%", label: "Approval Rate" },
                { value: "30+", label: "Client Nations" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-cormorant text-4xl font-light text-cmg-blue leading-none">{value}</div>
                  <div className="text-xs text-cmg-slate mt-1 font-medium">{label}</div>
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

      {/* Values */}
      <section className="py-24 px-4 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-cmg-red mb-3">What Drives Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-ink">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section id="team" className="py-24 px-4 bg-cmg-cream">
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
      <section className="py-24 px-4 bg-section-lines">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
