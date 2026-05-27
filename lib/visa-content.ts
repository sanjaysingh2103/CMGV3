import type { LucideIcon } from "lucide-react"
import { GraduationCap, Globe, Clock, DollarSign, Users, FileText, Star, Briefcase, Heart, BookOpen, Building2 } from "lucide-react"

export interface VisaEligibility {
  icon: LucideIcon
  title: string
  detail: string
  required?: boolean
  accentColor?: "red" | "gold" | "blue"
}

export interface VisaSubclass {
  number: string
  name: string
  description: string
  keyPoints: string[]
  href: string
  highlighted?: boolean
}

export interface VisaStep {
  title: string
  description: string
}

export interface VisaFeeRow {
  item: string
  fee: string
  notes?: string
}

export interface VisaFaq {
  question: string
  answer: string
  category?: string
}

export interface VisaPageContent {
  slug: string
  hero: {
    headline: string
    subheadline: string
    bgImage: string
    trustBadges: string[]
    eyebrow?: string
    gradient?: string
    texture?: "diagonal" | "dots" | "grid" | "noise"
  }
  overview: {
    intro: string
    keyFacts: { label: string; value: string }[]
  }
  eligibility: VisaEligibility[]
  subclasses: VisaSubclass[]
  steps: VisaStep[]
  fees: {
    rows: VisaFeeRow[]
    total: string
    disclaimer: string
  }
  documents: string[]
  faqs: VisaFaq[]
  cta: {
    headline: string
    body: string
  }
}

export const visaContent: Record<string, VisaPageContent> = {
  "skilled-migration": {
    slug: "skilled-migration",
    hero: {
      eyebrow: "Skilled Independent · Nominated · Regional",
      headline: "Skilled Migration Visas - 189, 190 & 491",
      subheadline: "Australia's points-based skilled migration program invites qualified professionals to live and work permanently. CMG specialists guide you from skills assessment to visa grant.",
      bgImage: "/hero-skilled-migration.png",
      trustBadges: ["MARA Registered Agents", "500+ Skilled Visas Granted", "97% Success Rate"],
      gradient: "gradient-hero-blue",
      texture: "grid",
    },
    overview: {
      intro: "The Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (subclass 491) visas form Australia's core points-based migration pathway. You submit an Expression of Interest (EOI) through SkillSelect, and the Department of Home Affairs issues invitations to the highest-scoring candidates in periodic rounds. A passing score of 65 points is required to submit an EOI, but invitation scores are typically 85–105 points depending on the visa subclass and occupation. The pathway concludes with Subclass 191 Permanent Residence for those who have held a 491 visa and met regional living and working requirements for three years.",
      keyFacts: [
        { label: "Minimum Points", value: "65 (EOI threshold)" },
        { label: "Typical Invitation Score", value: "85–105 points" },
        { label: "Processing Time", value: "75% in 12–24 months" },
        { label: "Visa Type", value: "Permanent (189/190) / Provisional (491)" },
        { label: "Government Fee (primary)", value: "AUD $4,770 (189/190)" },
        { label: "Work Rights", value: "Unrestricted (all states)" },
      ],
    },
    eligibility: [
      { icon: Star, title: "Age Under 45", detail: "You must be under 45 years of age at the time of invitation. Maximum points (30) are awarded to applicants aged 25–32.", required: true, accentColor: "red" },
      { icon: GraduationCap, title: "Skills Assessment", detail: "You must hold a positive skills assessment from the relevant assessing authority for your nominated occupation (e.g., Engineers Australia, VETASSESS, ACS).", required: true, accentColor: "red" },
      { icon: Globe, title: "English Proficiency", detail: "At minimum, Competent English (IELTS 6.0 in each band). Superior English (IELTS 8.0) earns 20 bonus points, Proficient English (IELTS 7.0) earns 10 points.", required: true, accentColor: "blue" },
      { icon: FileText, title: "Nominated Occupation", detail: "Your occupation must appear on the Medium Long-Term Strategic Skills List (MLTSSL) for subclass 189/190, or the Short-Term Skilled Occupation List (STSOL) for some 190/491 streams.", required: true, accentColor: "blue" },
      { icon: Briefcase, title: "Work Experience", detail: "Overseas experience (3–8 years) earns 5–15 points. Australian experience (1–8 years) earns 5–20 points. Experience must be in your nominated occupation.", required: false, accentColor: "gold" },
      { icon: Clock, title: "Health & Character", detail: "All applicants must meet Australian health standards (medical examination) and provide police clearances from every country you have lived in for 12+ months in the last 10 years.", required: true, accentColor: "blue" },
    ],
    subclasses: [
      {
        number: "189",
        name: "Skilled Independent",
        description: "Permanent residency without state sponsorship or employer. The most sought-after skilled visa - you can live and work anywhere in Australia.",
        keyPoints: [
          "No employer or state sponsor required",
          "Permanent residency from day one",
          "Typical invitation score: 85–105 points",
          "Processing: 6–18 months (75th percentile)",
        ],
        href: "/services/skilled-migration",
        highlighted: false,
      },
      {
        number: "190",
        name: "Skilled Nominated",
        description: "Permanent residency with state or territory nomination. Nomination adds 5 points to your score and opens doors when your 189 score isn't quite there.",
        keyPoints: [
          "5 bonus points for nomination",
          "Must live and work in nominating state",
          "Typical invitation score: 75–90 points",
          "Processing: 12–20 months",
        ],
        href: "/services/skilled-migration",
        highlighted: true,
      },
      {
        number: "491",
        name: "Skilled Work Regional (Provisional)",
        description: "5-year provisional visa for regional Australia with a clear pathway to permanent residency via Subclass 191 after 3 years.",
        keyPoints: [
          "15 bonus points for regional nomination",
          "Must live and work in a designated regional area",
          "Pathway to 191 PR after 3 years",
          "Family members may be included",
        ],
        href: "/services/skilled-migration",
        highlighted: false,
      },
    ],
    steps: [
      { title: "Determine Your Points Score", description: "Use CMG's points calculator to estimate your SkillSelect score across all categories: age, English, work experience, education, and additional factors." },
      { title: "Complete Your Skills Assessment", description: "Apply to the assessing authority for your occupation (e.g., Engineers Australia, ACS, VETASSESS). This typically takes 3–6 months and must be completed before lodging an EOI." },
      { title: "Achieve Required English Score", description: "Sit IELTS Academic, PTE Academic or OET. You need at least IELTS 6.0 across all four bands (Competent English). Higher scores earn more points." },
      { title: "Lodge Expression of Interest (EOI)", description: "Submit your EOI through SkillSelect with your points claim. You can update your EOI at any time. Invitations are issued in rounds, typically every 2–4 weeks." },
      { title: "Receive Invitation to Apply (ITA)", description: "Once invited, you have 60 days to lodge a formal visa application with supporting documents. Documents must be certified and translated if not in English." },
      { title: "Lodge Visa Application", description: "Submit all required documents including skills assessment, English test results, employment evidence, police clearances and health examination results." },
      { title: "Visa Decision & Grant", description: "The Department of Home Affairs will assess your application and issue a decision. Processing takes 6–24 months depending on queue and subclass." },
    ],
    fees: {
      rows: [
        { item: "Primary applicant (189/190)", fee: "AUD $4,770", notes: "2025–26 rate" },
        { item: "Secondary applicant (18+)", fee: "AUD $2,385", notes: "Per adult family member" },
        { item: "Secondary applicant (under 18)", fee: "AUD $1,195", notes: "Per child" },
        { item: "Skills assessment", fee: "AUD $500–$900", notes: "Varies by assessing authority" },
        { item: "English test (IELTS Academic)", fee: "AUD $385", notes: "Per sitting" },
        { item: "Health examination", fee: "AUD $300–$600", notes: "Per applicant" },
        { item: "Police clearance", fee: "AUD $40–$100", notes: "Per country" },
        { item: "CMG professional service fee", fee: "POA", notes: "Based on visa type and complexity" },
      ],
      total: "AUD $7,000–$12,000+ (family of 3)",
      disclaimer: "Government fees are set by the Department of Home Affairs and are subject to annual indexation on 1 July. Fees shown are 2025–26 rates. CMG service fees are provided on assessment.",
    },
    documents: [
      "Valid passport (all pages including blank pages)",
      "Positive skills assessment letter",
      "English language test results (IELTS, PTE, or OET)",
      "Employment reference letters (on company letterhead, signed, dated)",
      "Payslips and tax returns for all claimed employment periods",
      "Educational qualifications (degrees, transcripts, certified translations)",
      "Police clearances from all countries lived in 12+ months (last 10 years)",
      "Health examination results (completed at panel physician)",
      "Birth certificates and marriage certificate (for family members)",
      "Current CV / resume",
    ],
    faqs: [
      { question: "What is the minimum points score to submit an EOI?", answer: "You need a minimum of 65 points to submit an Expression of Interest through SkillSelect. However, simply reaching 65 points does not guarantee an invitation - invitation rounds are competitive and current cut-off scores for the 189 visa are typically 85–105 points depending on the occupation and state.", category: "Eligibility" },
      { question: "How long does the skills assessment take?", answer: "This depends on the assessing authority. Engineers Australia typically takes 6–8 weeks for CDR assessments. ACS (IT professionals) takes 4–6 weeks. VETASSESS for trade occupations can take 8–12 weeks. CMG helps you prepare a strong application to minimise delays and resubmissions.", category: "Process & Timeline" },
      { question: "Can I include my family in my application?", answer: "Yes. Your spouse or de facto partner and dependent children can be included as secondary applicants in the same visa application. They must also meet health and character requirements. Secondary applicants have the same visa conditions and work/study rights as the primary applicant.", category: "Family & Dependents" },
      { question: "What is the difference between the 190 and 491 visa?", answer: "Both require state or territory nomination, but the 190 is a permanent visa (5 points bonus) while the 491 is a provisional 5-year visa (15 points bonus) that leads to permanent residency (subclass 191) after 3 years of living and working in a designated regional area. The 491 is advantageous if your points score needs a boost or your occupation is only on the STSOL.", category: "Eligibility" },
      { question: "My occupation is not on the skilled occupation list. Can I still apply?", answer: "Your occupation must appear on the relevant skilled occupation list (MLTSSL or STSOL) to apply for a points-tested visa. However, the occupation lists are regularly updated. CMG can help identify whether a closely related ANZSCO occupation may apply to your skills, or explore alternative employer-sponsored pathways.", category: "Eligibility" },
      { question: "How are invitations issued in SkillSelect?", answer: "The Department of Home Affairs conducts invitation rounds periodically. In each round, candidates are ranked by their points score. Invitations go to the highest-scoring candidates until the round allocation is met. Ties are broken by the date and time the EOI was submitted, so submitting early with accurate information is important.", category: "Process & Timeline" },
      { question: "What happens if my visa application is refused?", answer: "If your skilled visa application is refused, you generally have 21 days to lodge an appeal with the Administrative Review Tribunal (ART, formerly the AAT). ART review fees are around AUD $3,496 and processing typically takes 12–24 months. CMG offers a free refusal assessment to determine whether appeal is your best option or whether re-application with stronger evidence is more strategic.", category: "Refusals & Appeals" },
      { question: "Do I need to be in Australia to apply for skilled migration?", answer: "No. All three subclasses (189, 190, 491) can be lodged either onshore (inside Australia) or offshore (outside Australia). Many applicants apply from their home country and travel to Australia once the visa is granted. The Department conducts the same assessment regardless of where you are physically located when you lodge.", category: "Eligibility" },
      { question: "How much does the entire skilled migration process cost?", answer: "Government fees alone are AUD $4,770 for the primary applicant on subclass 189/190 (AUD $3,210 for the 491). Add AUD $2,385 per adult dependent and AUD $1,195 per child. Skills assessments range AUD $300–$1,200 depending on the authority. English tests cost AUD $375 (IELTS) or AUD $410 (PTE). CMG professional fees vary by complexity - we provide a fixed written quote after your free consultation.", category: "Costs & Fees" },
      { question: "Can I work in Australia while my application is being processed?", answer: "Only if you're already in Australia on a substantive visa with work rights, or hold a Bridging Visa A that includes work permission. If you apply offshore, you cannot enter or work in Australia until the visa is granted. The bridging visa rules are technical - we explain exactly what conditions apply to your specific scenario during consultation.", category: "Work & Travel Rights" },
      { question: "What changed for skilled migration in 2024–2025?", answer: "The federal government released the new Migration Strategy with several reforms: the 491 visa now has a clearer pathway to PR via the 191 visa, English language requirements for some streams have tightened, the points test is under review for streamlining, and Genuine Student / Genuine Temporary Entrant requirements have been strengthened across all skilled pathways. CMG agents are MARA-registered and stay current with every legislative update.", category: "Recent Changes" },
      { question: "How long does the entire process take from start to visa grant?", answer: "Realistically, expect 12–24 months end-to-end. The breakdown: skills assessment (6–12 weeks), English test (2–4 weeks), EOI submission, waiting for an invitation (1 round to 12 months depending on points and occupation), then visa lodgement to grant (75% within 12 months for subclass 189; 8–14 months typical for 190). Higher points scores mean faster invitations.", category: "Process & Timeline" },
    ],
    cta: {
      headline: "Ready to Start Your Skilled Visa Journey?",
      body: "Book a free consultation with a MARA-registered CMG agent. We'll assess your points score, review your skills assessment pathway, and map out a clear strategy to secure your invitation.",
    },
  },

  "employer-sponsored": {
    slug: "employer-sponsored",
    hero: {
      eyebrow: "TSS 482 · ENS 186 · Labour Agreement",
      headline: "Employer Sponsored Visas - 482 & 186",
      subheadline: "When an Australian employer needs your skills, the employer-sponsored pathway offers a direct route to work and permanent residency. CMG supports both employers and applicants through every stage.",
      bgImage: "/hero-employer-sponsored.png",
      trustBadges: ["MARA Registered Agents", "Employer & Applicant Support", "97% Success Rate"],
      gradient: "gradient-hero-deep",
      texture: "dots",
    },
    overview: {
      intro: "Australia's employer-sponsored program allows approved employers to sponsor skilled overseas workers when they cannot find suitable Australian staff. The Temporary Skill Shortage visa (subclass 482) provides a temporary work pathway of 2–4 years, while the Employer Nomination Scheme (subclass 186) offers direct permanent residency. Both require the employer to be an approved sponsor, the position to be a genuine full-time role, and the worker to meet skills, English and health requirements. Labour Market Testing (LMT) - advertising the position to local workers first - is mandatory for most 482 applications.",
      keyFacts: [
        { label: "482 Duration", value: "2 years (STSOL) / 4 years (MLTSSL)" },
        { label: "186 Visa Type", value: "Permanent Residency" },
        { label: "Processing Time", value: "4–12 months (482), 12–24 months (186)" },
        { label: "Government Fee (482 primary)", value: "AUD $3,115" },
        { label: "Government Fee (186 primary)", value: "AUD $4,770" },
        { label: "Employer Requirement", value: "Approved Standard Business Sponsor" },
      ],
    },
    eligibility: [
      { icon: Building2, title: "Approved Employer Sponsor", detail: "The employer must be approved by the Department of Home Affairs as a Standard Business Sponsor (SBS). New sponsors must demonstrate business legitimacy, financial viability and a commitment to training Australian workers.", required: true, accentColor: "red" },
      { icon: Briefcase, title: "Nominated Occupation", detail: "The sponsored position must be in an occupation on the relevant skilled list. MLTSSL occupations qualify for the 4-year 482 stream and the 186 TRT stream; STSOL occupations for the 2-year 482 stream only.", required: true, accentColor: "red" },
      { icon: Star, title: "Skills & Qualifications", detail: "You must have qualifications and at least 2 years of recent work experience in the nominated occupation. A formal skills assessment may be required depending on the occupation.", required: true, accentColor: "blue" },
      { icon: Globe, title: "English Proficiency", detail: "Minimum Competent English (IELTS 5.0 in each band) for 482. Proficient English (IELTS 6.0) is required for certain occupations and for the 186 ENS visa.", required: true, accentColor: "blue" },
      { icon: DollarSign, title: "Salary at Market Rate", detail: "The salary must meet the Temporary Skilled Migration Income Threshold (TSMIT - currently AUD $73,150 per year) and be equivalent to the Australian market salary rate for the position.", required: true, accentColor: "red" },
      { icon: FileText, title: "Labour Market Testing (LMT)", detail: "For most 482 applications, the employer must demonstrate genuine attempts to recruit Australian workers first - typically through Seek and LinkedIn advertising within 4 months of lodgement.", required: true, accentColor: "gold" },
    ],
    subclasses: [
      {
        number: "482",
        name: "Temporary Skill Shortage (TSS)",
        description: "Employer-sponsored temporary work visa. Two streams: Short-Term (2 years, STSOL occupations) and Medium-Term (4 years, MLTSSL occupations with pathway to 186 PR).",
        keyPoints: [
          "2-year stream for short-term occupation list",
          "4-year stream for MLTSSL occupations",
          "Family members may accompany",
          "MLTSSL stream may lead to 186 PR via TRT",
        ],
        href: "/services/employer-sponsored",
        highlighted: false,
      },
      {
        number: "186",
        name: "Employer Nomination Scheme (ENS)",
        description: "Permanent residency through employer sponsorship. Two streams: Direct Entry (DE) for overseas applicants, and Temporary Residence Transition (TRT) for 482 holders.",
        keyPoints: [
          "Permanent residency from grant",
          "Direct Entry or TRT stream",
          "TRT requires 3 years on 482 (MLTSSL)",
          "Must be under 45 (or exempt) for DE stream",
        ],
        href: "/services/employer-sponsored",
        highlighted: true,
      },
      {
        number: "494",
        name: "Skilled Employer Sponsored Regional (Provisional)",
        description: "Regional employer-sponsored provisional visa. 5-year visa for regional areas with pathway to 191 PR after 3 years of living and working regionally.",
        keyPoints: [
          "For regional or low-population growth areas",
          "Employer must be regionally based",
          "5-year provisional visa",
          "Leads to 191 PR after 3 years",
        ],
        href: "/services/employer-sponsored",
        highlighted: false,
      },
    ],
    steps: [
      { title: "Employer Becomes an Approved Sponsor", description: "The sponsoring employer applies to become an Approved Standard Business Sponsor (SBS). This requires demonstrating a lawful and active business, financial capacity and a commitment to training Australian workers." },
      { title: "Occupation & Salary Assessment", description: "CMG confirms the position is on the relevant skilled list and that the offered salary meets or exceeds the TSMIT and the annual market salary rate for the role in the location." },
      { title: "Labour Market Testing (LMT)", description: "The employer advertises the position on Australian job boards (Seek, Indeed, LinkedIn) for at least 28 days. Advertisements must be recent (within 4 months) and detail the position, employer and salary range." },
      { title: "Nomination Application", description: "The employer lodges a Nomination application with full LMT evidence, position description and market salary rate evidence. Processing takes 1–3 months." },
      { title: "Visa Application", description: "Once nomination is approved (or concurrently for streamlined arrangements), the worker lodges the visa application including employment evidence, English test results, skills documentation and health clearances." },
      { title: "Health & Character Checks", description: "All applicants complete health examinations at an approved panel physician and provide police clearances from all relevant countries. Biometrics may also be collected." },
      { title: "Visa Grant", description: "Upon approval, the 482 visa is granted with conditions allowing the holder to work for the sponsor in the nominated occupation. The 186 grants permanent residency upon grant." },
    ],
    fees: {
      rows: [
        { item: "482 primary applicant", fee: "AUD $3,115", notes: "2025–26 rate" },
        { item: "482 secondary applicant (18+)", fee: "AUD $1,555", notes: "Per adult" },
        { item: "186 primary applicant", fee: "AUD $4,770", notes: "Permanent residency" },
        { item: "186 secondary applicant (18+)", fee: "AUD $2,385", notes: "Per adult" },
        { item: "Employer nomination fee", fee: "AUD $540", notes: "Per nomination" },
        { item: "Skills assessment (if required)", fee: "AUD $500–$900", notes: "Varies by authority" },
        { item: "English test (IELTS General)", fee: "AUD $385", notes: "If not already held" },
        { item: "CMG professional service fee", fee: "POA", notes: "Employer + applicant support" },
      ],
      total: "AUD $6,000–$10,000 (primary applicant)",
      disclaimer: "Government fees are set by the Department of Home Affairs and subject to annual indexation. Shown are 2025–26 rates. Employer and applicant fees are separate.",
    },
    documents: [
      "Valid passport (primary and secondary applicants)",
      "Employment contract from the sponsoring employer",
      "Position description (detailed)",
      "Evidence of qualifications and work experience",
      "English language test results",
      "Skills assessment (if required for occupation)",
      "Labour market testing evidence (employer-provided)",
      "Health examination results",
      "Police clearances from all relevant countries",
      "Evidence of current employment (payslips, reference letters)",
    ],
    faqs: [
      { question: "Can my employer sponsor me if they are a small business?", answer: "Yes, small businesses can be approved Standard Business Sponsors provided they can demonstrate they are a lawfully operating business in Australia and have a genuine full-time position requiring the skills of the overseas worker. CMG works with businesses of all sizes through the sponsorship process.", category: "Eligibility" },
      { question: "What is labour market testing and does it always apply?", answer: "Labour market testing (LMT) requires the employer to show genuine efforts to recruit Australian workers before sponsoring an overseas worker. It applies to most 482 nominations but is exempt for certain trade agreements (e.g., CPTPP, AUSFTA) and some senior executive roles. LMT evidence must be recent (within 4 months of lodgement).", category: "Eligibility" },
      { question: "Can I change employers on a 482 visa?", answer: "Yes, but you must lodge a new nomination with the new employer before you start working for them. If the employer becomes insolvent or terminates your employment, you have 60 days to find a new sponsor or make alternative visa arrangements.", category: "Eligibility" },
      { question: "What is the Temporary Residence Transition (TRT) stream for 186?", answer: "The TRT stream allows 482 visa holders to obtain permanent residency (subclass 186) after holding their 482 visa for 3 years in an MLTSSL occupation and working for the same sponsor. The employer must still nominate you and you must continue to meet requirements.", category: "Eligibility" },
      { question: "Does the 482 visa have any pathway to permanent residency?", answer: "The 4-year (medium-term) stream of the 482 visa in an MLTSSL occupation provides a pathway to the 186 ENS visa via the TRT stream after 3 years. The short-term (2-year) stream does not have a direct PR pathway from within Australia, though the 186 Direct Entry stream remains available.", category: "Eligibility" },
      { question: "What is the Core Skills Income Threshold (CSIT) and TSMIT?", answer: "Effective July 2024, employer-sponsored visas require sponsored workers to earn at least the Core Skills Income Threshold of AUD $73,150 (replacing the older TSMIT). This is the minimum salary - actual market salary rates may be higher for your specific occupation. Sponsors must pay genuine market rate, not just the threshold.", category: "Costs & Fees" },
      { question: "Can my family come with me on the 482 visa?", answer: "Yes. Your spouse or de facto partner and dependent children can be included as secondary applicants. Partners have unrestricted work rights - they can work for any Australian employer in any occupation. Children under 18 can attend school (public school costs may apply depending on state). All dependents must meet health and character requirements.", category: "Family & Dependents" },
      { question: "What if my sponsoring employer goes out of business?", answer: "If your sponsor becomes insolvent or terminates your employment, you enter a 60-day grace period to find a new sponsor or make alternative visa arrangements. CMG can act quickly to identify new sponsorship opportunities or transition you to a different visa pathway (e.g., partner visa, 408 onshore protection visa, or a 408 COVID-related stream where applicable).", category: "Eligibility" },
      { question: "How much does it cost to sponsor an employee?", answer: "Employer costs include: sponsorship application AUD $420, nomination AUD $330 (482) or AUD $540 (186), Skilling Australians Fund (SAF) levy ranging AUD $1,200–$5,000 per year per visa depending on business size, and CMG professional fees. Sponsors cannot lawfully ask the employee to repay these costs. We provide a transparent total cost breakdown before any work begins.", category: "Costs & Fees" },
      { question: "What changed for employer-sponsored visas in 2024–2025?", answer: "Major reforms include: the new Skills in Demand visa replacing the 482 with three streams (Core Skills, Specialist Skills, Essential Skills), TSMIT replaced by Core Skills Income Threshold (CSIT $73,150), labour market testing simplified and the requirement to advertise within 4 months of lodgement, and faster processing for high-paying Specialist Skills roles. The 186 ENS visa is undergoing review with PR pathways being clarified.", category: "Recent Changes" },
      { question: "What happens if my 482 nomination is refused?", answer: "Both the sponsor and the visa applicant can be affected. The sponsor may receive sanctions (bars) preventing future sponsorship for up to 5 years if the refusal involves serious breaches. The visa applicant typically has 21 days to lodge an Administrative Review Tribunal (ART) appeal. CMG offers a free refusal assessment for both parties - we'll evaluate appeal merits and identify alternative pathways.", category: "Refusals & Appeals" },
    ],
    cta: {
      headline: "Ready to Sponsor or Be Sponsored?",
      body: "Whether you're an employer looking to sponsor a skilled worker, or a professional with a job offer in Australia - CMG handles the entire process from sponsorship approval to visa grant.",
    },
  },

  "family-partner": {
    slug: "family-partner",
    hero: {
      eyebrow: "Partner · Child · Parent · Remaining Relative",
      headline: "Family & Partner Visas - 820, 309 & 143",
      subheadline: "Reunite with your loved ones in Australia. CMG guides partners, children, and parents through Australia's family visa pathways with care and expertise.",
      bgImage: "/hero-family-partner.png",
      trustBadges: ["MARA Registered Agents", "Family Reunion Specialists", "97% Success Rate"],
      gradient: "gradient-hero-red",
      texture: "diagonal",
    },
    overview: {
      intro: "Australia's Family Stream allows Australian citizens, permanent residents and eligible New Zealand citizens to sponsor their partners, children and parents for visas. The partner visa pathway has two stages - a temporary visa that leads to permanent residency once the relationship is proven genuine and ongoing. Partner visas require evidence across four categories: financial, household, social and commitment. Processing times can be lengthy (12–36 months for partner visas) and documentation requirements are detailed, making specialist assistance essential to avoid delays and requests for further information.",
      keyFacts: [
        { label: "820/801 (Onshore)", value: "12–24 months (temporary → permanent)" },
        { label: "309/100 (Offshore)", value: "24–36 months" },
        { label: "143 Parent Contributory", value: "AUD $47,825 (primary)" },
        { label: "Sponsor Requirement", value: "Australian citizen, PR or eligible NZ citizen" },
        { label: "Relationship Evidence", value: "4 categories required" },
        { label: "Sponsor Age", value: "Must be 18+" },
      ],
    },
    eligibility: [
      { icon: Heart, title: "Genuine Relationship", detail: "You must be in a genuine de facto (12+ months) or married relationship with your sponsor. The relationship must be mutual, continuing and exclusive. Same-sex couples are included.", required: true, accentColor: "red" },
      { icon: Users, title: "Sponsor Eligibility", detail: "The sponsor must be an Australian citizen, permanent resident, or eligible New Zealand citizen aged 18 or over. The sponsor must not have sponsored a previous partner within 5 years (with exceptions).", required: true, accentColor: "red" },
      { icon: FileText, title: "Relationship Evidence - 4 Categories", detail: "Evidence must be provided across all four categories: financial aspects (joint accounts, shared assets), household (shared address, utilities), social (joint activities, knowledge of each other's lives), and commitment (future plans, statutory declarations from friends/family).", required: true, accentColor: "blue" },
      { icon: Globe, title: "Health Requirements", detail: "All visa applicants must undergo an approved health examination. Conditions such as active tuberculosis will delay processing until resolved.", required: true, accentColor: "blue" },
      { icon: Star, title: "Character Requirements", detail: "All applicants aged 16+ must provide police clearances from every country they have lived in for 12 consecutive months in the last 10 years.", required: true, accentColor: "blue" },
      { icon: DollarSign, title: "Sponsor Assurance of Support (Parent visas)", detail: "For parent visas (subclass 143), the sponsor must enter an Assurance of Support (AoS) - a bond lodged with Centrelink to ensure the parent does not rely on social security for a set period.", required: false, accentColor: "gold" },
    ],
    subclasses: [
      {
        number: "820/801",
        name: "Partner Visa (Onshore)",
        description: "For partners already in Australia. The 820 is a temporary visa; the 801 is the permanent visa granted after 2+ years in the relationship.",
        keyPoints: [
          "Must be in Australia when applying",
          "820 temporary + 801 permanent granted together",
          "Work and study rights from grant of 820",
          "Processing: 12–24 months currently",
        ],
        href: "/services/family-partner",
        highlighted: true,
      },
      {
        number: "309/100",
        name: "Partner Visa (Offshore)",
        description: "For partners outside Australia. The 309 (temporary) leads to the 100 (permanent) after 2+ years.",
        keyPoints: [
          "Must be outside Australia when applying",
          "Can travel to Australia on 309 once granted",
          "309 → 100 permanent after relationship verified",
          "Processing: 24–36 months offshore",
        ],
        href: "/services/family-partner",
        highlighted: false,
      },
      {
        number: "143",
        name: "Contributory Parent Visa",
        description: "Permanent residency for parents of Australian citizens/PRs. One of Australia's most expensive visas but provides full permanent residency.",
        keyPoints: [
          "AUD $47,825 primary applicant fee",
          "Must pass the balance-of-family test",
          "Assurance of Support bond required",
          "Processing: 3–5 years currently",
        ],
        href: "/services/family-partner",
        highlighted: false,
      },
    ],
    steps: [
      { title: "Assess Relationship Eligibility", description: "CMG reviews your relationship history, co-habitation period and existing evidence to confirm you meet the genuine relationship requirements before you invest in an application." },
      { title: "Gather Relationship Evidence", description: "Systematically collect evidence across all four categories: joint bank statements, shared lease/mortgage, utility bills in joint names, photos together, statutory declarations from people who know you as a couple." },
      { title: "Sponsor Lodge a Sponsorship Application", description: "Your Australian partner lodges a sponsorship application with the Department of Home Affairs and must be approved before the visa application is lodged." },
      { title: "Lodge Visa Application", description: "The visa application is lodged with all evidence, health examination results, police clearances and the Department of Home Affairs application fee." },
      { title: "Provide Additional Evidence on Request", description: "Case officers may request additional evidence of the relationship at any stage. CMG monitors your case and responds promptly to any requests." },
      { title: "820/309 Temporary Visa Grant", description: "The temporary visa is granted, allowing you to live, work and study in Australia. For offshore applicants, this is when you can enter Australia." },
      { title: "801/100 Permanent Visa", description: "After approximately 2 years from the initial application date, a case officer will reassess the ongoing relationship. On approval, the permanent visa is granted." },
    ],
    fees: {
      rows: [
        { item: "820/801 or 309/100 (primary applicant)", fee: "AUD $8,850", notes: "Combined temporary + permanent fee" },
        { item: "Secondary applicant (18+)", fee: "AUD $4,430", notes: "Per adult" },
        { item: "143 Parent (primary applicant)", fee: "AUD $47,825", notes: "Contributory parent" },
        { item: "Assurance of Support bond (143)", fee: "AUD $10,000", notes: "Refundable after 10 years" },
        { item: "Health examination", fee: "AUD $300–$600", notes: "Per applicant" },
        { item: "Police clearances", fee: "AUD $40–$100", notes: "Per country" },
        { item: "CMG professional service fee", fee: "POA", notes: "Based on visa complexity" },
      ],
      total: "AUD $10,000–$15,000 (partner, couple only)",
      disclaimer: "Partner visa government fees are among the highest in the Australian immigration system and are non-refundable once lodged. CMG recommends a professional assessment before lodgement.",
    },
    documents: [
      "Valid passports for both applicant and sponsor",
      "Birth certificates and marriage certificate (if married)",
      "Joint bank account statements (12+ months)",
      "Shared lease or mortgage documents",
      "Joint utility bills (electricity, internet, phone)",
      "Photos together (across multiple years and settings)",
      "Statutory declarations from friends and family",
      "Evidence of shared social activities",
      "Police clearances from all relevant countries",
      "Health examination results",
    ],
    faqs: [
      { question: "Do we need to be married to apply for a partner visa?", answer: "No. Both married couples and de facto partners can apply. For de facto partners, you must have been in a genuine de facto relationship for at least 12 months at the time of application (unless registered in a state/territory). Same-sex couples are treated identically to opposite-sex couples.", category: "Family & Dependents" },
      { question: "What evidence is needed to prove a genuine relationship?", answer: "Evidence must span four categories: (1) Financial aspects - joint accounts, shared assets or liabilities; (2) Household - shared address, bills in joint names, shared household responsibilities; (3) Social - joint photos, knowledge of each other's families and lives, joint memberships; (4) Commitment - future plans, statutory declarations from people who know you as a couple.", category: "Family & Dependents" },
      { question: "How long does a partner visa take to process?", answer: "The 820/801 (onshore) visa currently takes 12–24 months for the temporary stage and another 12–18 months for the permanent stage. The 309/100 (offshore) pathway takes 24–36 months for the temporary grant. Processing times vary depending on case officer workload and the completeness of your application.", category: "Family & Dependents" },
      { question: "Can I work in Australia while my partner visa is being processed?", answer: "If you applied onshore (820), you receive a bridging visa with full work rights while the visa is being processed. If you applied offshore (309), you must wait outside Australia until the temporary visa is granted, after which you can enter and work in Australia.", category: "Family & Dependents" },
      { question: "Is there a faster parent visa option than the 143?", answer: "Yes - the Contributory Parent (Temporary) subclass 173 is a 2-year temporary visa that leads to the 143 permanent visa, allowing parents to arrive sooner. There is also a non-contributory Parent visa (subclass 103) with a much lower fee but currently has a processing queue of 20–30 years. For most families, the 143 is the practical choice.", category: "Eligibility" },
      { question: "What are the four categories of relationship evidence?", answer: "Partner visa applications require evidence across four key areas: (1) Financial - joint bank accounts, shared bills, pooled income, joint loans; (2) Household - joint lease/mortgage, shared responsibilities, joint utilities; (3) Social - wedding photos, friend statements, trips together, social media; (4) Commitment - your relationship history, future plans, knowledge of each other's family. We help you compile a comprehensive evidence portfolio that addresses all four pillars.", category: "Family & Dependents" },
      { question: "Can I work while my partner visa is being processed?", answer: "If you apply onshore (820), you'll be granted a Bridging Visa A with full work rights once your application is lodged - you can work for any employer in any role. If you apply offshore (309), you cannot enter Australia until the temporary visa is granted, but once granted you have full work rights. CMG explains your work entitlements clearly before lodgement.", category: "Family & Dependents" },
      { question: "How much do partner visa applications cost?", answer: "The combined 820/801 or 309/100 partner visa application fee is AUD $9,365 for the primary applicant (one fee covers both the temporary and permanent stages). Additional fees apply for dependents: AUD $4,680 per adult and AUD $2,340 per child. Police checks, medical examinations, and translation services add AUD $500–$1,500. CMG fees are quoted upfront after free assessment.", category: "Costs & Fees" },
      { question: "What happens if my relationship ends during processing?", answer: "If your relationship breaks down during the 2-year wait between temporary and permanent partner visa stages, you may still be eligible for the permanent visa under family violence, child welfare, or compelling and compassionate provisions. The rules are nuanced - CMG handles these sensitive cases with discretion and provides strategic advice on protecting your immigration status.", category: "Family & Dependents" },
      { question: "How long does a partner visa take in 2025?", answer: "Current processing times: Subclass 820 (onshore temporary) - 75% within 12 months, 90% within 31 months. Subclass 309 (offshore temporary) - 75% within 11 months, 90% within 24 months. Subclass 801/100 permanent stage - assessed 2 years after temporary grant. Processing times improved through 2024–2025 as Home Affairs prioritised partner visa backlog reduction.", category: "Recent Changes" },
      { question: "Are de facto and same-sex partners eligible?", answer: "Yes. Australian partner visa policy treats married, de facto (heterosexual and same-sex), and registered relationships equally. For de facto relationships, you generally must demonstrate 12 months of cohabitation (waived if you've registered the relationship under state law in NSW, Victoria, Queensland, ACT, or Tasmania). The Department applies the same evidentiary tests regardless of relationship type.", category: "Family & Dependents" },
    ],
    cta: {
      headline: "Ready to Be Reunited?",
      body: "Family visa applications are complex and high-stakes. A refused or delayed application can mean years apart. CMG builds thorough, well-evidenced applications that give your family the best chance of success.",
    },
  },

  "student": {
    slug: "student",
    hero: {
      eyebrow: "Subclass 500 · 485 Graduate · Genuine Student",
      headline: "Student & Graduate Visas - 500 & 485",
      subheadline: "Study at a world-class Australian institution and build a pathway to permanent residency. CMG helps international students navigate enrolment, visa applications and post-study work rights.",
      bgImage: "/hero-student.png",
      trustBadges: ["MARA Registered Agents", "Student & Graduate Specialists", "97% Success Rate"],
      gradient: "gradient-hero-warm",
      texture: "noise",
    },
    overview: {
      intro: "The Student visa (subclass 500) allows international students to study full-time in a Temporary Entrant Education (TES) or registered course in Australia. The Genuine Student (GS) requirement replaced the Genuine Temporary Entrant (GTE) requirement in November 2023 - students must demonstrate genuine intent to study and comply with visa conditions. Upon graduation, eligible students can apply for the Temporary Graduate visa (subclass 485) to work in Australia for 2–4 years, building valuable Australian work experience that may count toward a skilled visa.",
      keyFacts: [
        { label: "500 Visa Duration", value: "Duration of course + 1–2 months" },
        { label: "485 Graduate Work Stream", value: "2 years (bachelor) / 4 years (masters/PhD)" },
        { label: "Government Fee (500)", value: "AUD $1,680" },
        { label: "Government Fee (485)", value: "AUD $1,895" },
        { label: "Work Rights (500)", value: "48 hrs/fortnight during semester; unlimited in breaks" },
        { label: "Work Rights (485)", value: "Unlimited" },
      ],
    },
    eligibility: [
      { icon: BookOpen, title: "Enrolment in CRICOS Course", detail: "You must be enrolled in (or accepted for) a full-time course at a registered CRICOS provider. Vocational (TAFE), undergraduate, postgraduate, and English language programs are all eligible.", required: true, accentColor: "red" },
      { icon: Star, title: "Genuine Student Requirement", detail: "You must demonstrate genuine intent to study, comply with visa conditions, and maintain ties to your home country. A personal statement addressing your study choices and future plans is required.", required: true, accentColor: "red" },
      { icon: Globe, title: "English Proficiency", detail: "Minimum IELTS Academic 5.5 (overall) with no band below 5.0, or equivalent. Higher English scores may be required for specific institutions or courses.", required: true, accentColor: "blue" },
      { icon: DollarSign, title: "Financial Capacity", detail: "You must demonstrate sufficient funds: AUD $29,710+ for the first year (tuition + living expenses + return airfare). Evidence through bank statements or scholarship letters.", required: true, accentColor: "blue" },
      { icon: Clock, title: "485 - Australian Study Requirement", detail: "For the 485 Graduate Work stream, you must have completed at least 2 years of study in Australia in a packaged program in an eligible occupation. Post-Graduate Work stream requires a bachelor degree or higher from an Australian institution.", required: false, accentColor: "gold" },
      { icon: FileText, title: "Overseas Student Health Cover (OSHC)", detail: "You must purchase OSHC for the duration of your student visa before lodging your application. OSHC is mandatory and covers hospital and medical expenses during your stay.", required: true, accentColor: "blue" },
    ],
    subclasses: [
      {
        number: "500",
        name: "Student Visa",
        description: "Study full-time at any CRICOS-registered institution in Australia. Includes work rights during semester and unlimited hours during official breaks.",
        keyPoints: [
          "Full-time study at CRICOS provider",
          "48 hrs/fortnight during semester",
          "Unlimited work during course breaks",
          "Family members can accompany",
        ],
        href: "/services/student",
        highlighted: false,
      },
      {
        number: "485",
        name: "Temporary Graduate Visa",
        description: "Post-study work visa for graduates of Australian institutions. Two streams: Graduate Work (2 years) and Post-Study Work (2–4 years depending on qualification level).",
        keyPoints: [
          "Graduate Work: 2 years, eligible occupations only",
          "Post-Study Work: 2–4 years (degree level)",
          "Masters/PhD: 4 years work rights",
          "Strong pathway to skilled migration",
        ],
        href: "/services/student",
        highlighted: true,
      },
      {
        number: "590",
        name: "Student Guardian Visa",
        description: "For parents or relatives who need to accompany a student aged under 18 who is studying in Australia on a subclass 500 visa.",
        keyPoints: [
          "For carers of under-18 students",
          "Must demonstrate relationship to student",
          "No work rights",
          "Valid while student visa is valid",
        ],
        href: "/services/student",
        highlighted: false,
      },
    ],
    steps: [
      { title: "Choose Your Course and Institution", description: "Research CRICOS-registered courses aligned with your career goals and, ideally, your intended skilled migration occupation. CMG can advise on course choices that maximise your PR pathway options." },
      { title: "Receive Confirmation of Enrolment (CoE)", description: "Once you accept an offer from your institution and pay the required deposit, the institution issues a Confirmation of Enrolment (CoE) - the key document for your student visa application." },
      { title: "Purchase OSHC", description: "Purchase Overseas Student Health Cover for the duration of your course. OSHC is mandatory and must be purchased before lodging your visa application." },
      { title: "Prepare Genuine Student Statement", description: "Write a personal statement demonstrating your genuine intent to study in Australia: why this course, why this institution, how it fits your career goals, and your ties to your home country." },
      { title: "Lodge Student Visa Application", description: "Submit your visa application online through ImmiAccount with CoE, financial evidence, English test results, OSHC policy, health and character documents." },
      { title: "Complete Health Examination (if required)", description: "Depending on your country of origin and length of stay, you may be required to complete a health examination at an approved panel physician." },
      { title: "Apply for Graduate Visa (485) Before 500 Expires", description: "After graduating, apply for the 485 visa within 6 months of your course end date. Ensure your 500 visa is still valid or you hold a bridging visa when you apply." },
    ],
    fees: {
      rows: [
        { item: "Student visa (500) - primary applicant", fee: "AUD $1,680", notes: "2025–26 rate" },
        { item: "Secondary applicant (18+)", fee: "AUD $840", notes: "Per adult" },
        { item: "Temporary Graduate visa (485)", fee: "AUD $1,895", notes: "Primary applicant" },
        { item: "OSHC (Overseas Student Health Cover)", fee: "AUD $600–$1,000/year", notes: "Varies by provider" },
        { item: "English test (IELTS Academic)", fee: "AUD $385", notes: "Per sitting" },
        { item: "Health examination", fee: "AUD $300–$450", notes: "If required" },
        { item: "CMG professional service fee", fee: "POA", notes: "Student visa or graduate visa" },
      ],
      total: "AUD $3,000–$5,000 (student + 485)",
      disclaimer: "Tuition fees vary widely by institution and course (AUD $20,000–$45,000/year). The figures above cover immigration costs only.",
    },
    documents: [
      "Valid passport",
      "Confirmation of Enrolment (CoE) from CRICOS-registered institution",
      "OSHC policy certificate",
      "English language test results (IELTS Academic or PTE)",
      "Genuine Student statement (personal statement)",
      "Financial evidence - bank statements or scholarship letters showing sufficient funds",
      "Academic transcripts from previous study",
      "Police clearances (if over 18 and required by country)",
      "Health examination results (if required)",
      "Evidence of return ties to home country (property, family, employment)",
    ],
    faqs: [
      { question: "How many hours can I work on a student visa?", answer: "During the study semester, you can work up to 48 hours per fortnight. During official course breaks (as defined by your institution), there is no restriction on work hours. Your family members on a secondary 500 visa also receive the same work rights.", category: "Eligibility" },
      { question: "What is the Genuine Student (GS) requirement?", answer: "Introduced in November 2023, the Genuine Student requirement replaced GTE. You must show genuine intent to study full-time, comply with visa conditions (including 80% attendance), and maintain ties to your home country. The assessment is holistic - studying in Australia without genuine intent to comply is grounds for refusal.", category: "Eligibility" },
      { question: "Which courses qualify for the 4-year 485 Post-Study Work visa?", answer: "Masters by coursework or research, and PhD graduates from Australian institutions are eligible for a 4-year 485 Post-Study Work stream visa. Bachelor degree graduates receive 2 years. The Graduate Work stream requires your qualification to be in an eligible occupation.", category: "Eligibility" },
      { question: "Can studying in regional Australia give me extra benefits?", answer: "Yes. Students who study and live in regional Australia may receive a 1-year extension on their 485 Graduate Work or Post-Study Work stream visa. Some states also prioritise regional study applicants for nomination under the 190 and 491 skilled visa programs.", category: "Eligibility" },
      { question: "What happens if I change courses while on a student visa?", answer: "You can generally change courses while on a student visa, but you must inform your current provider and obtain a new CoE from the new institution. Changing to a course of shorter duration or different AQF level may affect your 485 eligibility. CMG recommends seeking advice before making course changes.", category: "Eligibility" },
      { question: "How much money do I need to show for a student visa?", answer: "From May 2024, the financial capacity requirement is AUD $29,710 per year for living costs (increased from AUD $24,505), plus full course fees, plus return airfare. For dependents: add AUD $10,394 per partner and AUD $4,449 per child per year. Acceptable evidence includes bank statements (held 3+ months), education loans, government sponsorship, or a parent's annual income above AUD $87,856.", category: "Eligibility" },
      { question: "Is OSHC (Overseas Student Health Cover) mandatory?", answer: "Yes, OSHC is a strict visa condition (8501) for the entire duration of your visa. Standard policies cost AUD $500–$700 per year for a single student, more for couples/families. Several major providers operate in Australia (Allianz, BUPA, Medibank, NIB). Some scholarship programs and student visa holders from Belgium, Norway, Sweden may have alternative arrangements.", category: "Eligibility" },
      { question: "How long does a student visa application take?", answer: "Processing times vary by country of passport, course type, and institution rating. 75% of applications are processed within 8 weeks for major source countries. Streamlined processing applies to applications from low-risk countries studying at low-risk institutions - often decided within 4 weeks. Higher-risk profiles can take 3–6 months. Apply at least 3 months before course start.", category: "Process & Timeline" },
      { question: "Can I extend or apply for a new student visa onshore?", answer: "Yes, you can apply for a new student visa onshore (within Australia) for further study. You must have a valid current visa and a CoE for the new course. Common scenarios: progressing from bachelor's to master's, or starting a PhD after a master's. Onshore applicants on student visas are eligible for Bridging Visa A with full study and work rights during processing.", category: "Work & Travel Rights" },
      { question: "What changed for student visas in 2024–2025?", answer: "Significant changes: financial capacity requirement increased to AUD $29,710 per year (May 2024), Genuine Student replaced GTE (November 2023), English language requirements tightened (IELTS 6.0 minimum for vocational, 6.5 for higher education), work limit retained at 48 hours/fortnight, and a 'Ministerial Direction 107' introduced provider rankings that affect processing priority. Recent reforms also addressed concerns about quality of courses and 'visa shopping' between providers.", category: "Recent Changes" },
      { question: "Can I bring my partner and children on a student visa?", answer: "Yes. Your spouse/de facto partner and dependent children under 18 can be included as secondary 500 visa holders. They must be added to your application (either at lodgement or via subsequent entrant). Partners receive 48 hours/fortnight work rights during semester. Master's and PhD students' partners receive unrestricted work rights. Children can attend school (state school fees apply in most states - NSW and Victoria charge international school fees).", category: "Family & Dependents" },
    ],
    cta: {
      headline: "Start Your Australian Study Journey",
      body: "From course selection to student visa, graduate visa and beyond - CMG guides international students at every step of the Australian study pathway.",
    },
  },

  "business-investor": {
    slug: "business-investor",
    hero: {
      eyebrow: "Subclass 188 · 888 · 132 Business Talent",
      headline: "Business & Investor Visas - 188 & 888",
      subheadline: "Australia welcomes business owners and investors who bring capital, entrepreneurship and global expertise. CMG helps high-net-worth individuals navigate the Business Innovation and Investment Program.",
      bgImage: "/hero-business-investor.png",
      trustBadges: ["MARA Registered Agents", "Business Migration Specialists", "97% Success Rate"],
      gradient: "gradient-hero-deep",
      texture: "grid",
    },
    overview: {
      intro: "The Business Innovation and Investment Program (BIIP) is a state-nominated, points-tested migration pathway for business owners, investors and entrepreneurs. It operates through a two-stage process: a provisional visa (subclass 188) followed by a permanent visa (subclass 888 or 132). Applicants must submit an Expression of Interest (EOI) through SkillSelect and receive a state/territory nomination before being invited to apply. The program has multiple streams designed for different applicant profiles - from established business owners to significant investors placing millions in Australian-complying investments.",
      keyFacts: [
        { label: "188A - Business Innovation", value: "AUD $2M turnover, 51% ownership" },
        { label: "188B - Investor", value: "AUD $1.5M in State/Territory bonds (4 years)" },
        { label: "188C - Significant Investor", value: "AUD $5M in complying investments (4 years)" },
        { label: "188E - Entrepreneur", value: "AUD $200K funding from eligible source" },
        { label: "Provisional Duration", value: "4–5 years (188)" },
        { label: "Permanent Pathway", value: "888 after meeting stream requirements" },
      ],
    },
    eligibility: [
      { icon: DollarSign, title: "Business or Investment Assets", detail: "Depending on the stream: 188A requires AUD $2M business turnover and 51% ownership; 188B requires net assets of AUD $2.25M; 188C requires AUD $5M in net assets. All assets must be legally obtained.", required: true, accentColor: "red" },
      { icon: Star, title: "Points Test (Business Innovation Stream)", detail: "The 188A Business Innovation stream uses a points test covering age, English, business turnover, net assets, business years, and additional factors. A score of 65 is required to submit an EOI.", required: true, accentColor: "red" },
      { icon: Briefcase, title: "Business Ownership & Management", detail: "For the 188A stream, you must have owned and managed an eligible business for at least 2 of the last 4 years. The business must be a legally operating entity with verifiable turnover.", required: true, accentColor: "blue" },
      { icon: Globe, title: "State/Territory Nomination", detail: "All BIIP applicants must receive a state or territory nomination before receiving an invitation. Each state has its own criteria - some prioritise certain industries, regional areas, or minimum investment thresholds above the program minimums.", required: true, accentColor: "blue" },
      { icon: Building2, title: "Complying Investment Framework (188C)", detail: "The 188C Significant Investor stream requires AUD $5M placed in prescribed complying investments: at least 10% in eligible venture capital, at least 30% in eligible emerging companies, and the balance in managed funds or listed securities.", required: false, accentColor: "gold" },
      { icon: Clock, title: "Age Under 55 (Business Innovation)", detail: "Applicants for the 188A stream must generally be under 55 years of age. The 188B and 188C Investor streams do not have an age requirement. Individual states may apply their own criteria.", required: false, accentColor: "gold" },
    ],
    subclasses: [
      {
        number: "188A",
        name: "Business Innovation Stream",
        description: "For established business owners with a proven track record. Requires AUD $2M turnover, 51% ownership, and a genuine intent to own and manage a new or existing business in Australia.",
        keyPoints: [
          "AUD $2M+ business turnover required",
          "Must own 51%+ of the business",
          "Points test: minimum 65",
          "Leads to 888A permanent after 2 years",
        ],
        href: "/services/business-investor",
        highlighted: false,
      },
      {
        number: "188B/888B",
        name: "Investor Stream",
        description: "For established investors. AUD $1.5M must be invested in State/Territory government bonds for 4 years. Net assets of AUD $2.25M required.",
        keyPoints: [
          "AUD $2.25M net assets required",
          "AUD $1.5M in State/Territory bonds",
          "Hold investment for 4 years",
          "Permanent 888B visa after 4 years",
        ],
        href: "/services/business-investor",
        highlighted: false,
      },
      {
        number: "188C",
        name: "Significant Investor Stream",
        description: "Australia's most prestigious business visa. AUD $5M in complying investments with no points test, no age limit, and no English language requirement.",
        keyPoints: [
          "AUD $5M in complying investments",
          "No points test, no age limit",
          "No English language requirement",
          "Leads to 888C PR after 4 years",
        ],
        href: "/services/business-investor",
        highlighted: true,
      },
    ],
    steps: [
      { title: "Assess Eligibility & Stream Selection", description: "CMG reviews your business background, net assets and investment capacity to identify which BIIP stream is most appropriate. Business documentation must be assessed carefully against the relevant stream criteria." },
      { title: "Submit Expression of Interest (EOI) in SkillSelect", description: "Lodge an EOI in SkillSelect indicating your preferred state(s) for nomination. Provide accurate details of your business and financial position - inflated or inaccurate claims can result in refusal." },
      { title: "Receive State/Territory Nomination", description: "A state or territory nominates you based on their priorities and your EOI. Nomination may require a preliminary interview or additional documents demonstrating your business plan and commitment to the state." },
      { title: "Receive Invitation to Apply (ITA)", description: "After nomination, the Department of Home Affairs issues an invitation to apply for the 188 visa. You have 60 days to lodge a complete application." },
      { title: "Lodge 188 Visa Application", description: "Submit all financial evidence, business documents, tax returns, audited financial statements, police clearances and health examination results." },
      { title: "Establish Business or Make Investment in Australia", description: "On your provisional 188 visa, you must actively engage with the program requirements: establish or purchase a business in Australia (188A), or make your complying investment (188B/C)." },
      { title: "Apply for Permanent 888 Visa", description: "After meeting the stream-specific business or investment requirements during the provisional period, lodge the permanent 888 visa application. Requirements include evidence of business activity, financials and compliance with visa conditions." },
    ],
    fees: {
      rows: [
        { item: "188 provisional visa (primary applicant)", fee: "AUD $9,850", notes: "All streams" },
        { item: "888 permanent visa (primary applicant)", fee: "AUD $2,965", notes: "All 888 streams" },
        { item: "Secondary applicant (18+)", fee: "AUD $4,925", notes: "Per adult (188)" },
        { item: "132 Business Talent (primary)", fee: "AUD $9,850", notes: "Direct permanent" },
        { item: "Audited financial statements", fee: "AUD $2,000–$5,000", notes: "Accountant fee" },
        { item: "Business plan (if required)", fee: "AUD $1,000–$3,000", notes: "Professional preparation" },
        { item: "CMG professional service fee", fee: "POA", notes: "Complex - assessed case by case" },
      ],
      total: "AUD $15,000–$25,000+ (primary applicant, excluding investment)",
      disclaimer: "Business and investor visa costs are in addition to the investment capital required by each stream. Figures shown are government fees only. CMG provides detailed cost estimates at consultation.",
    },
    documents: [
      "Valid passport (all family members)",
      "Audited business financial statements (last 4 years)",
      "Tax returns (business and personal)",
      "Evidence of business ownership (company registration, share certificates)",
      "Business activity statements (BAS) and GST records",
      "Evidence of net personal and business assets",
      "State/territory nomination letter",
      "Genuine business plan (for 188A/188E streams)",
      "Investment evidence (for 188B/188C streams)",
      "Police clearances from all relevant countries",
      "Health examination results",
    ],
    faqs: [
      { question: "What is the difference between the 188A and 188C stream?", answer: "The 188A Business Innovation stream is for established business owners who want to run a business in Australia. It requires AUD $2M turnover and uses a points test. The 188C Significant Investor stream is for investors placing AUD $5M in complying investments - it has no points test, no age limit and no English requirement, making it attractive for high-net-worth individuals who don't want to run a business.", category: "Eligibility" },
      { question: "Which states are most likely to nominate under the BIIP?", answer: "Victoria, New South Wales, Queensland and Western Australia have the most active BIIP nomination programs. Each state has different industry priorities and minimum thresholds (often above the program minimums). CMG advises on state-specific requirements and has relationships with state government nomination teams.", category: "Eligibility" },
      { question: "How long does the BIIP visa take from EOI to grant?", answer: "The process is lengthy: EOI submission → state nomination (3–12 months) → invitation → 188 visa lodgement and grant (6–18 months) → establish business → 888 permanent visa (2–4 years after 188 grant). The total timeline from EOI to permanent residency is typically 4–7 years.", category: "Process & Timeline" },
      { question: "Can I include family members in my application?", answer: "Yes. Your spouse or de facto partner and dependent children can be included as secondary applicants. Secondary applicants have the same visa conditions and do not need to meet the financial requirements independently.", category: "Family & Dependents" },
      { question: "What happens if my business in Australia does not succeed?", answer: "Business risk is inherent in the BIIP program. If your business fails and you cannot meet the visa conditions, you may not be eligible for the 888 permanent visa. CMG works closely with 188 visa holders throughout their provisional period to document business activity and ensure compliance with visa conditions.", category: "Eligibility" },
      { question: "What is the difference between 188 and 888?", answer: "The 188 Business Innovation and Investment visa is a 5-year provisional visa that lets you establish your business or investments in Australia. The 888 Permanent Business Innovation and Investment visa is granted after you complete the requirements of your 188 (typically holding the 188 for 2–4 years, meeting turnover/investment/business activity tests). The 888 is the permanent residency outcome of the BIIP pathway.", category: "Eligibility" },
      { question: "What are the 188B Investor and 188E Entrepreneur streams?", answer: "188B Investor stream: requires AUD $2.5M designated investment in state/territory bonds for 4 years, no business operation required, max age 55 (waivers possible). 188E Entrepreneur stream: for those with funding agreement from approved state body for a complying innovation idea, no minimum investment specified but typically AUD $200,000+. CMG advises which stream best matches your circumstances and capital.", category: "Eligibility" },
      { question: "Is BIIP still open in 2025?", answer: "The federal government paused new BIIP applications from July 2024 pending program reform. The Australian Government's Migration Strategy proposes a new National Innovation visa with a clearer investor-talent focus. Existing 188 visa holders can still apply for 888 permanent residency. CMG monitors policy reform closely - book a consultation to understand current pathways including state-specific business migration alternatives.", category: "Recent Changes" },
      { question: "Are there age restrictions for BIIP?", answer: "Yes. 188A and 188B require applicants under 55 (states may waive if you demonstrate exceptional economic benefit). 188C (Significant Investor) and 188E (Entrepreneur) have no age limit. The 132 Business Talent visa stream - now closed to new applicants - also had no age limit. Age waivers from state governments require strong evidence of unique economic contribution to that state.", category: "Eligibility" },
      { question: "How long must I hold the 188 visa before applying for the 888?", answer: "Minimum periods vary by stream: 188A Business Innovation - operate the business for at least 2 years before applying for 888A. 188B Investor - hold the AUD $2.5M designated investment for the full 4 years before applying for 888B. 188C Significant Investor - hold complying investments for 4 years before 888C. You must also meet residency requirements (varies by stream, typically 40–730 days in Australia).", category: "Process & Timeline" },
      { question: "What documentation is needed for business applications?", answer: "Comprehensive evidence including: business activity statements (BAS), tax returns, financial statements (audited preferred), bank statements showing capital, business registration documents (ASIC), employer payroll evidence, shareholder agreements, evidence of ownership structure, and source-of-funds documentation. For investors: portfolio statements, fund manager confirmations, and designated investment evidence. CMG provides a comprehensive document checklist tailored to your stream.", category: "Documents" },
    ],
    cta: {
      headline: "Ready to Bring Your Business Vision to Australia?",
      body: "The BIIP pathway requires careful preparation, strong documentation and strategic state nomination. CMG's business migration specialists provide end-to-end support from EOI through to permanent residency.",
    },
  },
}
