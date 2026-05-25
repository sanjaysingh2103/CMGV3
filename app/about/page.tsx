import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Award, Users, TrendingUp } from "lucide-react"
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

      <HeroBanner
        headline="Experts Who Make Australia Possible"
        subheadline="Commonwealth Migration Group is a team of MARA-registered agents passionate about connecting people with Australia's extraordinary opportunities."
        bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920"
        gradient="gradient-blue-red"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
          { label: "Meet Our Team", href: "#team", variant: "secondary" },
        ]}
        height="large"
      />

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">Who We Are</h2>
            <div className="space-y-4 text-cmg-slate leading-relaxed">
              <p>
                Founded with a singular mission — to cut through immigration complexity and deliver real results — Commonwealth Migration Group has grown into one of Australia's most trusted migration agencies.
              </p>
              <p>
                Our team of MARA-registered agents brings decades of combined experience across every visa category, from skilled migration and family reunions to employer sponsorship and business investment visas.
              </p>
              <p>
                We believe that immigration should be empowering, not intimidating. That's why we invest in every client relationship, providing clear advice, transparent pricing, and relentless follow-through until you hold your visa in hand.
              </p>
              <p>
                The story of Commonwealth Migration Group began with a simple observation: too many skilled, deserving people were having their Australian dreams derailed by poor advice, incomplete applications, or simply not knowing where to start. Our founders — themselves immigrants who navigated Australia's migration system — set out to build the agency they wished had existed when they arrived.
              </p>
              <p>
                Today, CMG operates across Australia and serves clients from over 30 countries. Our approach combines rigorous legal knowledge with genuine human care. We know that behind every visa application is a family's future, a career goal, or a life-changing opportunity — and we treat every case with the seriousness it deserves.
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
              alt="CMG team in a collaborative meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = valueIcons[val.icon] ?? Shield
              return (
                <div key={val.title} className="rounded-2xl bg-white p-6 shadow-card">
                  <div className="w-12 h-12 rounded-2xl bg-cmg-light-blue flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-cmg-blue" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-cmg-text mb-3">{val.title}</h3>
                  <p className="text-cmg-slate text-sm leading-relaxed">{val.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Our People</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text">Meet Our Migration Experts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-hover transition-all">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-cmg-text mb-1">{member.name}</h3>
                  <p className="text-cmg-blue font-medium text-sm mb-1">{member.title}</p>
                  <p className="text-cmg-slate text-xs mb-3">{member.mara} · {member.experience}</p>
                  <p className="text-cmg-slate text-sm leading-relaxed">Specialises in {member.specialisation}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARA Registration */}
      <section className="py-20 px-4 bg-cmg-light-blue">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-cmg-red uppercase tracking-widest mb-3">Your Protection</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cmg-text mb-6">Your Protection. Our Commitment.</h2>
            <div className="space-y-4 text-cmg-slate leading-relaxed">
              <p>
                All CMG migration agents are registered with the Office of the Migration Agents Registration Authority (OMARA). This means you receive the protection of the Migration Agents Code of Conduct, fair fee agreements, and access to the MARA complaints process.
              </p>
              <p>
                Always verify your agent's MARA registration at{" "}
                <a href="https://www.mara.gov.au" target="_blank" rel="noopener noreferrer" className="text-cmg-blue hover:underline font-medium">
                  mara.gov.au
                </a>
                {" "}before engaging any migration agent's services.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-card">
              <div className="w-12 h-12 rounded-full bg-cmg-gold flex items-center justify-center">
                <span className="text-lg font-bold text-cmg-navy">M</span>
              </div>
              <div>
                <p className="font-semibold text-cmg-text text-sm">MARA Registered Migration Agents</p>
                <p className="text-cmg-slate text-xs">Office of the Migration Agents Registration Authority</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full gradient-blue-red flex items-center justify-center shadow-hero">
              <div className="text-center text-white">
                <div className="text-5xl font-bold font-heading">97%</div>
                <div className="text-white/80 mt-2 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to work with CMG's expert team?"
        body="Book a free 30-minute consultation with a MARA-registered CMG agent. Available online worldwide."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Call Us Now", href: `tel:+61200000000` }}
        variant="navy-gold"
      />
    </>
  )
}
