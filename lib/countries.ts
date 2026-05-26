/**
 * Country-of-origin landing page content.
 *
 * Each entry powers a dynamic route at /from/[slug] and is structured for
 * top-of-funnel SEO targeting searches like "migrate to Australia from India".
 *
 * Content is intentionally detail-rich (real ANZSCO codes, real attestation
 * authorities, realistic processing nuances) - these pages compete for high
 * organic search volume and benefit from substantive, expert content.
 */

export interface CountrySnapshot {
  label: string
  value: string
}

export interface CountryReason {
  title: string
  body: string
}

export interface CountryPathway {
  number: string
  name: string
  href: string
  whyPopular: string
}

export interface CountryOccupation {
  name: string
  anzsco: string
  pathway: string
}

export interface CountryTestimonial {
  initials: string
  age: number
  occupation: string
  city: string
  visa: string
  body: string
  timeline?: string
}

export interface CountryFaq {
  question: string
  answer: string
  category?: string
}

export interface CountryContent {
  slug: string
  /* SEO + display */
  countryName: string
  countryShort: string         // e.g. "UAE" not "United Arab Emirates"
  flagEmoji: string
  demonym: string              // "Emirati", "Indian", "Filipino" etc.
  cardBlurb: string            // short pitch for /from index card
  /* SEO metadata */
  metaTitle: string            // ≤ 60ch
  metaDescription: string      // ≤ 155ch
  keywords: string[]
  /* Hero */
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    bgImage: string
    gradient: string
    texture: "diagonal" | "dots" | "grid" | "noise"
    trustBadges: string[]
  }
  /* Country snapshot strip (4 icon cards) */
  snapshot: CountrySnapshot[]
  /* "Why migrants from X choose Australia" - 4–6 reasons */
  whyAustralia: CountryReason[]
  /* Top visa pathways (3–4 cards, link to existing service pages) */
  pathways: CountryPathway[]
  /* Country-specific considerations */
  considerations: { title: string; detail: string }[]
  /* Common occupations with ANZSCO codes */
  occupations: CountryOccupation[]
  /* 1–2 testimonials */
  testimonials: CountryTestimonial[]
  /* Country-specific FAQs */
  faqs: CountryFaq[]
  /* CTA copy */
  cta: { headline: string; body: string }
}

/* ------------------------------------------------------------------ */
/* COUNTRIES                                                          */
/* ------------------------------------------------------------------ */

export const countries: Record<string, CountryContent> = {
  /* ============================================================== */
  /* UAE - CMG's home market                                         */
  /* ============================================================== */
  uae: {
    slug: "uae",
    countryName: "United Arab Emirates",
    countryShort: "UAE",
    flagEmoji: "🇦🇪",
    demonym: "UAE resident",
    cardBlurb:
      "CMG's home market. Dubai-based agents who understand expat life, MOFA attestation and the realities of leaving the GCC for Sydney, Melbourne or Brisbane.",
    metaTitle: "Migrate to Australia from UAE - Dubai's CMG Migration Agents",
    metaDescription:
      "MARA-registered Dubai migration agents helping UAE residents secure Australian PR, skilled, family and employer-sponsored visas. Free consultation.",
    keywords: [
      "migrate to Australia from UAE",
      "Australia visa from Dubai",
      "Australian PR from UAE",
      "Dubai migration agent",
      "Australia 189 visa UAE",
      "MARA agent Dubai",
      "Australia migration from Abu Dhabi",
    ],
    hero: {
      eyebrow: "From UAE to Australia",
      headline: "Migrate to Australia from the UAE",
      subheadline:
        "From Dubai's skyline to Sydney Harbour - CMG is the only MARA-registered consultancy headquartered in the UAE. We've guided hundreds of Emirati residents through subclass 189, 190, 482 and 186 visa pathways, with deep knowledge of MOFA attestation, UAE police clearance and how to convert GCC work experience into Australian skilled points.",
      bgImage:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
      gradient: "gradient-hero-deep",
      texture: "grid",
      trustBadges: ["MARA-Authorised", "Dubai-Based", "GCC Specialists"],
    },
    snapshot: [
      {
        label: "Most chosen visa types",
        value: "Subclass 189, 190 & 482 (employer-sponsored)",
      },
      {
        label: "Typical applicants per year",
        value: "~3,500 UAE residents (ABS PR grants, 2023–24)",
      },
      {
        label: "Top occupations",
        value: "Software Engineer, Accountant, Civil Engineer",
      },
      {
        label: "Document nuance",
        value: "MOFA attestation + Apostille required for UAE-issued docs",
      },
    ],
    whyAustralia: [
      {
        title: "A clear pathway to citizenship",
        body: "The UAE does not offer permanent residency or citizenship to expats - even after 30 years. Australia grants permanent residency from day one on subclass 189/190, and full citizenship after just 4 years of residence.",
      },
      {
        title: "Family roots and a real home",
        body: "Your children can grow up Australian - not on rolling 3-year residency permits. Free public schooling, world-class universities (G8) and Medicare for the whole family.",
      },
      {
        title: "Earnings that translate well",
        body: "Tax-free Dubai salaries are competitive, but Australian total compensation (super, leave loading, public healthcare, pension) often exceeds equivalent Dubai packages for engineers, accountants and IT professionals on a like-for-like basis.",
      },
      {
        title: "A large, established GCC community",
        body: "Sydney's Lakemba and Auburn, Melbourne's Dandenong and Brisbane's Sunnybank host thriving Arab, South Asian and Filipino communities - the cultural transition from Dubai is one of the easiest in the world.",
      },
      {
        title: "Climate and lifestyle balance",
        body: "Beaches, parks, hiking, surf - all without 50°C summers. Sydney and Perth offer a coastal lifestyle that mirrors what many residents already enjoy in the UAE, but with cooler weather and outdoor evenings year-round.",
      },
      {
        title: "Strong investor and entrepreneur pathway",
        body: "UAE business owners with established companies (free zone or mainland) are well-placed for the upcoming National Innovation visa and the 188C significant investor program. Audited UAE financials are accepted by state nomination panels.",
      },
    ],
    pathways: [
      {
        number: "189",
        name: "Skilled Independent",
        href: "/services/skilled-migration",
        whyPopular:
          "The single most popular pathway for UAE-based engineers, accountants and IT professionals. No state restriction - live anywhere from Sydney to Perth.",
      },
      {
        number: "190",
        name: "Skilled Nominated",
        href: "/services/skilled-migration",
        whyPopular:
          "A 5-point boost for UAE residents who don't quite reach 189 invitation scores. NSW, Victoria and Queensland actively nominate IT, finance and healthcare professionals working in Dubai.",
      },
      {
        number: "482",
        name: "TSS Employer-Sponsored",
        href: "/services/employer-sponsored",
        whyPopular:
          "Many Dubai expats secure Australian employer sponsorship through professional networks. 482 leads to subclass 186 PR after 3 years in an MLTSSL occupation.",
      },
      {
        number: "186",
        name: "Employer Nomination Scheme",
        href: "/services/employer-sponsored",
        whyPopular:
          "Direct Entry stream for senior professionals (CFOs, project directors, IT architects) recruited directly from Dubai. Permanent residency from grant.",
      },
    ],
    considerations: [
      {
        title: "MOFA attestation is mandatory",
        detail:
          "All UAE-issued documents (degrees, marriage certificates, employment letters, salary certificates) must be attested by the UAE Ministry of Foreign Affairs and International Cooperation (MoFAIC) before Australian authorities will accept them. Allow 5–10 working days and AED 150 per document.",
      },
      {
        title: "Apostille for documents from your home country",
        detail:
          "Indian, Pakistani or Egyptian-issued documents that pass through the UAE must first be attested by the country of origin (HRD/MEA for India, MOFA for Pakistan), then by the UAE embassy, then re-attested by MoFAIC in Dubai or Abu Dhabi.",
      },
      {
        title: "UAE Police Clearance Certificate (Good Conduct Certificate)",
        detail:
          "Issued by the UAE Ministry of Interior (MoI) via the ICP app or in person at GDRFA centres. Valid for 3 months from issue. Cost: AED 100. Required for anyone aged 16+ who has lived in the UAE for 12+ months in the last 10 years.",
      },
      {
        title: "IELTS / PTE test centres",
        detail:
          "IELTS is delivered at the British Council (Knowledge Village, Dubai), IDP Education (DIFC) and Abu Dhabi locations. PTE Academic operates at Pearson VUE in Dubai Internet City and Abu Dhabi. Slots fill 3–4 weeks ahead - book early.",
      },
      {
        title: "Employment evidence - the salary certificate trap",
        detail:
          "UAE salary certificates and labour contracts from MoHRE are not enough on their own. Australian case officers expect detailed reference letters on company letterhead, signed by HR, stating duties, hours per week, start/end dates and full salary breakdown. We help structure these to ANZSCO standards.",
      },
      {
        title: "Common refusal triggers from UAE applicants",
        detail:
          "Mismatched job title vs ANZSCO duties (e.g. 'Business Development Manager' that actually covers Sales 225311), missing MOFA attestation, expired police clearance at decision date, and undeclared visit visas from third countries. CMG audits every file before lodgement.",
      },
    ],
    occupations: [
      { name: "Software Engineer", anzsco: "261313", pathway: "189 / 190 (ACS skills assessment)" },
      { name: "Accountant (General)", anzsco: "221111", pathway: "189 / 190 (CPA Australia or CA ANZ)" },
      { name: "External Auditor", anzsco: "221213", pathway: "189 / 190 (CPA Australia)" },
      { name: "Civil Engineer", anzsco: "233211", pathway: "189 / 190 (Engineers Australia CDR)" },
      { name: "Mechanical Engineer", anzsco: "233512", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Electrical Engineer", anzsco: "233311", pathway: "189 / 190 (Engineers Australia)" },
      { name: "ICT Business Analyst", anzsco: "261111", pathway: "189 / 190 (ACS)" },
      { name: "Project Manager (Construction)", anzsco: "133111", pathway: "190 / 491 (VETASSESS)" },
      { name: "Registered Nurse", anzsco: "254423", pathway: "189 / 190 (ANMAC)" },
      { name: "Financial Analyst", anzsco: "222311", pathway: "189 / 190 (CPA Australia)" },
      { name: "Marketing Specialist", anzsco: "225113", pathway: "190 / 491 (VETASSESS)" },
      { name: "Chef", anzsco: "351311", pathway: "482 / 494 (Trades Recognition Australia)" },
    ],
    testimonials: [
      {
        initials: "R.A.",
        age: 34,
        occupation: "Senior Software Engineer",
        city: "Dubai",
        visa: "189",
        body: "Lived in Dubai for 9 years before CMG. They walked me through ACS, IELTS Academic, MOFA attestation and EOI - the whole thing took 14 months from skills assessment to visa grant. My final points score was 95.",
        timeline: "Skills assessment to grant: 14 months",
      },
      {
        initials: "M.H.",
        age: 41,
        occupation: "Finance Manager",
        city: "Abu Dhabi",
        visa: "186 (Direct Entry)",
        body: "An Australian fintech approached me after a conference in Singapore. CMG handled the sponsor approval, my 186 nomination and my family's visas in parallel. We landed in Melbourne 8 months later. Permanent residents on day one.",
        timeline: "Job offer to PR grant: 8 months",
      },
    ],
    faqs: [
      {
        question: "Can I count my UAE work experience toward Australian skilled migration points?",
        answer:
          "Yes - overseas work experience earns up to 15 points (5 points for 3 years, 10 for 5 years, 15 for 8+ years) provided it's in your nominated ANZSCO occupation and supported by detailed reference letters on company letterhead. CMG specifically structures UAE reference letters and salary certificates so they meet the documentation standards of ACS, Engineers Australia, CPA Australia and VETASSESS.",
        category: "Eligibility & Skills",
      },
      {
        question: "What documents need MOFA attestation for an Australian visa application from the UAE?",
        answer:
          "Educational degrees and transcripts, marriage certificates issued in the UAE, employment letters, salary certificates, and any commercial documents (for business visa applicants). The chain is: home-country attestation → UAE embassy in home country → UAE MoFAIC in Dubai or Abu Dhabi. Documents from your home country that have not transited through the UAE typically need Apostille or HRD attestation in that country instead.",
        category: "Documents",
      },
      {
        question: "Do I have to leave my UAE job before applying for Australian PR?",
        answer:
          "No. The 189, 190 and 491 visa applications are all lodged online via ImmiAccount and you continue working in the UAE throughout processing (typically 6–18 months). You only need to make the move once your visa is granted, and most subclasses allow 12 months from grant to enter Australia for the first time (the 'initial entry date').",
        category: "General",
      },
      {
        question: "Is my engineering degree from outside the UAE recognised in Australia?",
        answer:
          "Engineers Australia recognises accredited engineering degrees from the Washington Accord countries (USA, UK, India, Pakistan, etc.) and assesses others via the Competency Demonstration Report (CDR) pathway. Indian and Pakistani engineering graduates working in the UAE typically pursue a CDR - three career episodes plus a summary statement. CMG provides full CDR mentoring as part of our skilled migration service.",
        category: "Eligibility & Skills",
      },
      {
        question: "How do I get my UAE police clearance for an Australian visa?",
        answer:
          "Apply through the ICP smart services app or visit a GDRFA service centre. You'll need your Emirates ID and a passport-size photo. The certificate (Good Conduct Certificate) is issued in 1–3 working days, costs AED 100, and is valid for 3 months. Apply close to your expected visa decision date to avoid expiry. We coordinate the timing precisely.",
        category: "Documents",
      },
      {
        question: "Can my UAE-born children migrate to Australia with me?",
        answer:
          "Yes. Dependent children (under 18, or 18–22 if financially dependent) are included as secondary applicants on the same skilled or employer-sponsored visa. Their UAE birth certificates need MoFAIC attestation and a certified English translation if originally in Arabic. CMG arranges NAATI-certified translations in Dubai.",
        category: "Family & Dependents",
      },
      {
        question: "Do Dubai-based business owners qualify for Australian investor visas?",
        answer:
          "Many UAE-based business owners - particularly those with mainland LLCs or established free zone companies - qualify for the BIIP streams (188A Business Innovation, 188C Significant Investor) or the upcoming National Innovation visa. Audited financials, immigration cards and UAE shareholder documents are routinely accepted by Australian state nomination panels. CMG works closely with Dubai accountants to prepare nomination submissions.",
        category: "General",
      },
      {
        question: "Is CMG actually based in Dubai, or does it just have an address?",
        answer:
          "CMG operates a full office in Dubai with MARA-registered agents available for in-person consultations. We're not a virtual presence - clients walk into our office, hand over original documents, and meet face-to-face. This is unusual: most agencies servicing the UAE are headquartered in Australia and rely on phone calls.",
        category: "General",
      },
    ],
    cta: {
      headline: "Ready to leave Dubai for Sydney?",
      body: "Book a free 30-minute consultation at CMG's Dubai office or by video call. We'll assess your points score, your UAE document position, and map out a realistic 12–18 month plan to your Australian visa grant.",
    },
  },

  /* ============================================================== */
  /* INDIA - largest applicant pool globally                          */
  /* ============================================================== */
  india: {
    slug: "india",
    countryName: "India",
    countryShort: "India",
    flagEmoji: "🇮🇳",
    demonym: "Indian",
    cardBlurb:
      "Australia's largest skilled migration source country. CMG handles HRD attestation, ECA-compliant CDRs, AHPRA bridging programs and India-specific PCC issues every week.",
    metaTitle: "Migrate to Australia from India - MARA Agents | CMG",
    metaDescription:
      "Indian nationals secure Australian PR, skilled and student visas with CMG's MARA-registered agents. CDR, ACS, AHPRA & HRD attestation guidance.",
    keywords: [
      "migrate to Australia from India",
      "Australia PR for Indian nationals",
      "189 visa from India",
      "skilled migration India to Australia",
      "ACS skills assessment India",
      "Engineers Australia CDR India",
      "Indian engineers Australia",
    ],
    hero: {
      eyebrow: "From India to Australia",
      headline: "Migrate to Australia from India",
      subheadline:
        "Indian nationals are now the single largest source of skilled migration to Australia - overtaking the UK. CMG guides engineers, IT professionals, accountants and nurses from Bangalore, Hyderabad, Mumbai and Delhi through subclass 189, 190 and 482 visas. We know exactly what ACS, Engineers Australia and AHPRA expect from Indian qualifications.",
      bgImage:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80",
      gradient: "gradient-hero-warm",
      texture: "noise",
      trustBadges: ["MARA-Authorised", "Dubai-Based", "South Asia Specialists"],
    },
    snapshot: [
      {
        label: "Most chosen visa types",
        value: "Subclass 189, 190, 500 (student) & 482",
      },
      {
        label: "Typical applicants per year",
        value: "~48,000 Indian nationals (PR grants, ABS 2023–24)",
      },
      {
        label: "Top occupations",
        value: "Software Engineer, Accountant, Registered Nurse",
      },
      {
        label: "Document nuance",
        value: "HRD or MEA Apostille required; PCC from PSK in passport state",
      },
    ],
    whyAustralia: [
      {
        title: "A genuine pathway to citizenship",
        body: "Unlike the US (decades-long green card backlog) or UK (5+ years to ILR), Australia grants PR from day one on subclass 189/190 and full citizenship after just 4 years.",
      },
      {
        title: "Earnings 2.5–4× Indian software salaries",
        body: "A mid-level software engineer in Bangalore earns ₹18–25 LPA. The equivalent role in Sydney pays AUD $110,000–$140,000 (₹60–80 LPA) - and that includes 11% superannuation, 4 weeks paid leave and Medicare.",
      },
      {
        title: "A massive, established Indian community",
        body: "Australia now has 970,000+ people of Indian origin. Sydney's Parramatta, Melbourne's Tarneit and Wyndham Vale, and Perth's Canning Vale have full Indian grocery, temples (BAPS, ISKCON, Murugan), Telugu/Tamil/Hindi schools and Bollywood cinemas.",
      },
      {
        title: "World-class universities - without the US debt",
        body: "Eight of the world's top 100 universities are Australian (Melbourne, Sydney, ANU, UNSW, Monash, UQ, UWA, Adelaide). Indian students get post-study work rights of 2–4 years on subclass 485 - a direct route to PR via 190/491.",
      },
      {
        title: "Medicare - universal healthcare from day one",
        body: "Australian PRs and citizens receive Medicare covering GP visits, public hospital admission, surgery and most diagnostics. No surprise medical bills, no parent corporate insurance gaps, no ICU rate cards.",
      },
      {
        title: "Bringing your family with you",
        body: "Spouse and children are included on the same skilled visa application. Parents qualify for subclass 143 (Contributory Parent) - long processing but a permanent outcome. CMG handles Indian marriage certificates, HRD-attested birth certificates and PCCs end-to-end.",
      },
    ],
    pathways: [
      {
        number: "189",
        name: "Skilled Independent",
        href: "/services/skilled-migration",
        whyPopular:
          "The dominant pathway for Indian IT professionals - typically chosen by software engineers, business analysts and ICT security specialists with ACS skills assessment and IELTS 8+.",
      },
      {
        number: "190",
        name: "Skilled Nominated",
        href: "/services/skilled-migration",
        whyPopular:
          "5-point state nomination boost. NSW, Victoria and Queensland actively nominate Indian accountants, nurses, civil engineers and ICT professionals when current 189 cut-offs are out of reach.",
      },
      {
        number: "485",
        name: "Temporary Graduate Visa",
        href: "/services/student",
        whyPopular:
          "Indian masters and PhD graduates from Australian universities get 2–4 years of unrestricted post-study work rights - the most common bridge from student to PR via 189/190.",
      },
      {
        number: "482",
        name: "TSS Employer-Sponsored",
        href: "/services/employer-sponsored",
        whyPopular:
          "Australian companies actively recruit Indian engineers and IT specialists. 482 (Medium-Term stream) leads to 186 PR after 3 years working for the same sponsor in an MLTSSL occupation.",
      },
    ],
    considerations: [
      {
        title: "HRD attestation or MEA Apostille - choose carefully",
        detail:
          "Educational documents (degrees, transcripts, mark sheets) must be authenticated by the State HRD or attested by India's Ministry of External Affairs (MEA) via Apostille. India is a Hague Apostille signatory, so Apostille via the MEA is the cleaner route for Australian visa applications. Allow 7–15 working days.",
      },
      {
        title: "PCC from the Passport Seva Kendra (PSK)",
        detail:
          "Police Clearance Certificates must come from the PSK where your passport was issued (or the regional PSK matching your current address as per Aadhaar). Online appointment via passportindia.gov.in, fee ₹500, valid for 6 months. Recent address changes complicate this - apply for PCC at the address listed on your Aadhaar.",
      },
      {
        title: "Engineering qualifications - CDR vs Washington Accord",
        detail:
          "Graduates from NBA-accredited engineering programs after 2014 are typically eligible for the Washington Accord stream at Engineers Australia (faster, fewer documents). Graduates from non-accredited programs or older years need a Competency Demonstration Report (CDR) with three career episodes plus a summary statement.",
      },
      {
        title: "IELTS / PTE test centres in India",
        detail:
          "IELTS Academic is delivered by British Council and IDP across 50+ Indian cities (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Chandigarh, Cochin). PTE Academic operates at Pearson VUE centres in 40+ cities. Most candidates prefer PTE for its quicker turnaround (results in 2 working days vs 13 for IELTS).",
      },
      {
        title: "MBBS / nursing - AHPRA registration is the hurdle",
        detail:
          "Indian doctors must complete the AMC MCQ + clinical exams or qualify for competent authority pathways (rare for Indian graduates). Indian nurses pursue ANMAC skills assessment followed by AHPRA registration - typically a 12–24 month process. CMG works with AHPRA-experienced advisors throughout.",
      },
      {
        title: "Common refusal reasons specific to Indian applicants",
        detail:
          "Inflated work experience claims that don't match payslips/PF statements, missing HRD attestation on degrees, undisclosed visit visas to high-risk countries, mark sheets not matching transcript dates, and inconsistencies between ACS RPL submission and employer reference letters. Genuineness checks on Indian applicants are intense - every claim must be evidenced.",
      },
    ],
    occupations: [
      { name: "Software Engineer", anzsco: "261313", pathway: "189 / 190 (ACS)" },
      { name: "ICT Business Analyst", anzsco: "261111", pathway: "189 / 190 (ACS)" },
      { name: "Developer Programmer", anzsco: "261312", pathway: "189 / 190 (ACS)" },
      { name: "Civil Engineer", anzsco: "233211", pathway: "189 / 190 (Engineers Australia CDR)" },
      { name: "Mechanical Engineer", anzsco: "233512", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Accountant (General)", anzsco: "221111", pathway: "189 / 190 (CPA Australia / CA ANZ)" },
      { name: "Registered Nurse (Medical)", anzsco: "254423", pathway: "189 / 190 (ANMAC + AHPRA)" },
      { name: "GP / Medical Practitioner", anzsco: "253111", pathway: "189 / 482 (AMC + AHPRA)" },
      { name: "Pharmacist (Hospital)", anzsco: "251513", pathway: "189 / 190 (APC)" },
      { name: "Chef", anzsco: "351311", pathway: "482 / 494 (TRA)" },
      { name: "Electrical Engineer", anzsco: "233311", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Telecommunications Engineer", anzsco: "263311", pathway: "189 / 190 (Engineers Australia)" },
    ],
    testimonials: [
      {
        initials: "P.S.",
        age: 31,
        occupation: "Software Engineer",
        city: "Bangalore",
        visa: "189",
        body: "TCS background, 7 years experience. CMG handled my ACS RPL because my degree wasn't ICT-major - they restructured my employment references to show 67% of my work was ANZSCO 261313. Final points: 95. Granted in 11 months.",
        timeline: "EOI to grant: 11 months",
      },
      {
        initials: "A.K.",
        age: 28,
        occupation: "Registered Nurse",
        city: "Kochi",
        visa: "190 (Victoria nomination)",
        body: "Did BSc Nursing at MG University, worked 4 years at Apollo Chennai. The ANMAC + AHPRA process took 14 months but Victoria nominated me with 85 points. Now working at Royal Melbourne Hospital.",
        timeline: "ANMAC start to grant: 22 months",
      },
    ],
    faqs: [
      {
        question: "Will my Indian engineering degree be recognised in Australia?",
        answer:
          "Yes, in two ways. If your degree is from an NBA-accredited program completed under the Washington Accord (typically post-2014 graduates from IITs, NITs and accredited private universities), Engineers Australia provides a streamlined assessment with no CDR required. Otherwise, you submit a Competency Demonstration Report (CDR) - three career episodes plus a summary statement mapping your experience to the relevant ANZSCO occupation. CMG provides full CDR mentoring and turnaround typically takes 6–8 weeks at Engineers Australia.",
        category: "Eligibility & Skills",
      },
      {
        question: "How long does the entire migration process take from India?",
        answer:
          "End-to-end you should expect 14–22 months. Breakdown: skills assessment (ACS 4–6 weeks, Engineers Australia 6–10 weeks), IELTS/PTE (1 month), EOI submission, wait for invitation (1–8 months depending on points and occupation), visa lodgement to grant (75% of subclass 189 cases are decided within 12 months). Higher points scores (95+) get invited in the first or second round after lodgement.",
        category: "Process & Timeline",
      },
      {
        question: "What documents from India need HRD attestation or Apostille for Australia?",
        answer:
          "Educational documents (degrees, mark sheets, transcripts), birth certificates, marriage certificates and any document used in your visa application. India is a Hague Apostille signatory, so Apostille from the Ministry of External Affairs (MEA) via authorised agencies is the standard route - typically 7–15 working days. Employment letters from Indian companies generally don't need Apostille but must be on letterhead with signature, designation and contact details.",
        category: "Documents",
      },
      {
        question: "I have 7 years of TCS / Infosys / Wipro experience. Do I qualify for skilled migration?",
        answer:
          "Almost certainly yes for ANZSCO 261313 (Software Engineer) or 261312 (Developer Programmer), provided your role descriptions match. ACS deducts 2 years from non-ICT bachelor degrees and 4 years from non-ICT diploma holders before counting experience. Strong reference letters showing the technical depth of your work - not just team management - are critical. CMG specifically restructures Indian IT services reference letters to meet ACS criteria.",
        category: "Eligibility & Skills",
      },
      {
        question: "Can my parents migrate with me from India?",
        answer:
          "Parents need their own visa - they cannot be dependents on your skilled visa. The subclass 143 Contributory Parent visa costs around AUD $48,000 per parent (one-off) and has a 4–6 year queue, but results in permanent residency. The subclass 870 Sponsored Parent (Temporary) allows up to 5 years stay (renewable to 10) with no PR pathway. Most families pursue 143 once the child is established in Australia.",
        category: "General",
      },
      {
        question: "What's the cheapest English test I can take in India for Australia?",
        answer:
          "PTE Academic costs ₹15,900 in India and results come in 2 working days. IELTS Academic costs ₹17,000 with results in 13 days. Both are accepted by all Australian visa subclasses. PTE is generally easier for Indian test-takers due to its computerised, accent-neutral scoring. Aim for at least 79+ in PTE (Proficient English = 10 points) or 65+ (Superior English = 20 points) on each band.",
        category: "Eligibility & Skills",
      },
      {
        question: "Are CA Inter or CMA qualifications enough for accountant migration?",
        answer:
          "No - CA Australia / CA ANZ and CPA Australia require a full Indian CA or B.Com / M.Com qualification plus their professional year or competency assessment program. ICAI CA is well-regarded but not directly recognised. The typical pathway is B.Com + post-study Australian masters in accounting + Professional Year + CPA Australia membership. ANZSCO 221111 (Accountant General) is on the MLTSSL - strong PR pathway.",
        category: "Eligibility & Skills",
      },
      {
        question: "Can I apply from India or do I need to be in Australia first?",
        answer:
          "All three skilled subclasses (189, 190, 491) can be lodged offshore from India. You stay in India throughout processing, and only travel to Australia once your visa is granted. Most subclasses give you 12 months from grant to make your 'first entry' to validate the visa. Many of our Indian clients travel to Sydney or Melbourne for 2 weeks to activate the visa, then return to wind up affairs before the final move.",
        category: "General",
      },
    ],
    cta: {
      headline: "Your Indian career, your Australian future",
      body: "Whether you're a software engineer in Bangalore, an accountant in Mumbai or a nurse in Kerala - CMG's MARA-registered agents will assess your points, identify the right ANZSCO code and build your file to Australian Department standards. Free 30-minute consultation by video.",
    },
  },

  /* ============================================================== */
  /* PAKISTAN                                                         */
  /* ============================================================== */
  pakistan: {
    slug: "pakistan",
    countryName: "Pakistan",
    countryShort: "Pakistan",
    flagEmoji: "🇵🇰",
    demonym: "Pakistani",
    cardBlurb:
      "Engineers, doctors and IT professionals from Karachi, Lahore and Islamabad. CMG navigates NACES verification, PSV clearances and the realities of Pakistani document authentication.",
    metaTitle: "Migrate to Australia from Pakistan - CMG MARA Agents",
    metaDescription:
      "Pakistani engineers, doctors and IT professionals secure Australian PR with CMG. PSV, NACES, HEC attestation and IELTS guidance from MARA-registered agents.",
    keywords: [
      "migrate to Australia from Pakistan",
      "Australia PR for Pakistani nationals",
      "189 visa from Pakistan",
      "skilled migration Pakistan to Australia",
      "Engineers Australia CDR Pakistan",
      "HEC attestation Australia",
      "Australia visa from Karachi",
    ],
    hero: {
      eyebrow: "From Pakistan to Australia",
      headline: "Migrate to Australia from Pakistan",
      subheadline:
        "Pakistani engineers, doctors, IT professionals and accountants form one of Australia's fastest-growing professional communities. CMG's MARA-registered agents guide applicants from Karachi, Lahore and Islamabad through subclass 189, 190, 482 and student pathways - with deep knowledge of HEC attestation, PSV clearances and Engineers Australia CDR for Pakistani graduates.",
      bgImage:
        "https://images.unsplash.com/photo-1604871082903-5458d164167a?w=1920&q=80",
      gradient: "gradient-hero-warm",
      texture: "diagonal",
      trustBadges: ["MARA-Authorised", "Dubai-Based", "South Asia Specialists"],
    },
    snapshot: [
      {
        label: "Most chosen visa types",
        value: "Subclass 189, 190, 482 & 500 (student)",
      },
      {
        label: "Typical applicants per year",
        value: "~4,200 Pakistani nationals (PR grants, ABS 2023–24)",
      },
      {
        label: "Top occupations",
        value: "Mechanical Engineer, GP, ICT Security Specialist",
      },
      {
        label: "Document nuance",
        value: "HEC attestation for degrees; PSV clearance via PSCA / NADRA",
      },
    ],
    whyAustralia: [
      {
        title: "A stable, prosperous future for your family",
        body: "Australia offers economic stability, political certainty and personal safety - backed by world-class education, universal healthcare and PR-to-citizenship in 4 years.",
      },
      {
        title: "Salary uplift for Pakistani engineers and IT professionals",
        body: "A senior mechanical engineer earning PKR 250,000/month in Karachi can earn AUD $120,000+ in Perth or Brisbane - a 4–5× increase even after cost of living. Plus 11% super, paid leave and Medicare.",
      },
      {
        title: "A growing Pakistani-Australian community",
        body: "Australia has 90,000+ Pakistani-born residents concentrated in Sydney (Lakemba, Rockdale), Melbourne (Truganina, Tarneit) and Perth (Canning Vale). Mosques, halal supermarkets, Urdu Saturday schools and biryani houses everywhere.",
      },
      {
        title: "Pathway for medical professionals",
        body: "Pakistani MBBS graduates can pursue the AMC pathway, then AHPRA registration and eventually PR via subclass 189 or 482. We work with AMC-prep tutors and have placed Pakistani GPs in regional Victoria and rural Queensland.",
      },
      {
        title: "Education for children - public schools and G8 universities",
        body: "Free public schooling (often co-ed but quality varies - we advise on suburb-by-suburb). Australian permanent residents pay domestic university fees (1/3 of international rates) for tier-1 G8 universities like UNSW, Melbourne and ANU.",
      },
      {
        title: "Halal lifestyle, prayer infrastructure, family-friendly",
        body: "Sydney has 100+ mosques. Halal meat, halal pizza chains and even halal McDonald's options are mainstream. Australian workplaces routinely accommodate prayer breaks and Eid leave.",
      },
    ],
    pathways: [
      {
        number: "189",
        name: "Skilled Independent",
        href: "/services/skilled-migration",
        whyPopular:
          "Strongest pathway for Pakistani engineers and IT professionals with high IELTS / PTE scores. No state restriction - you can live in Sydney, Melbourne or Perth.",
      },
      {
        number: "190",
        name: "Skilled Nominated",
        href: "/services/skilled-migration",
        whyPopular:
          "Victoria and South Australia actively nominate Pakistani mechanical engineers, ICT business analysts and accountants. 5 extra points often bridges the invitation gap.",
      },
      {
        number: "482",
        name: "TSS Employer-Sponsored",
        href: "/services/employer-sponsored",
        whyPopular:
          "Pakistani professionals with strong English and Gulf or UK experience are competitive for Australian employer sponsorship - particularly in mining engineering, IT security and healthcare.",
      },
      {
        number: "500",
        name: "Student Visa",
        href: "/services/student",
        whyPopular:
          "A 2-year masters at Deakin, Monash or UNSW followed by a 485 Graduate visa is one of the most reliable PR pathways for Pakistani applicants who can't reach 189 cut-offs directly.",
      },
    ],
    considerations: [
      {
        title: "HEC attestation is mandatory for Pakistani degrees",
        detail:
          "The Higher Education Commission of Pakistan must attest every educational degree (matric, intermediate, bachelor, masters) before submission to Australian assessing authorities. HEC verifies the institution, then attests - usually 2–4 weeks. The original degree, attested transcript, and HEC stamp are all required.",
      },
      {
        title: "PSV (Police Clearance) via PSCA, NADRA or local Special Branch",
        detail:
          "Police Verification certificates for Australian visa applications can come from the Punjab Safe Cities Authority (PSCA - Lahore, Faisalabad, Multan), NADRA-issued PSV, or the District Special Branch in your home district. Cost: PKR 1,200–2,500. Valid 6 months. Sindh and KP applicants typically use district SB or NADRA.",
      },
      {
        title: "NACES verification for medical and IT qualifications",
        detail:
          "ACS often requires Pakistani IT degrees to be verified via NACES if the institution isn't on its trusted list. Engineers Australia requires PEC (Pakistan Engineering Council) registration for accredited engineering recognition. Allow extra time.",
      },
      {
        title: "IELTS / PTE test centres in Pakistan",
        detail:
          "British Council (Karachi, Lahore, Islamabad, Faisalabad) and IDP Education for IELTS. PTE Academic at Pearson VUE in Karachi, Lahore and Islamabad. Pakistani applicants typically achieve highest scores in writing - PTE often easier for spoken module.",
      },
      {
        title: "Engineers Australia - CDR is the default for Pakistani graduates",
        detail:
          "Pakistan is not a Washington Accord signatory, so Pakistani engineering graduates submit a full Competency Demonstration Report (CDR) regardless of university. Three career episodes plus a summary statement. CMG provides full CDR drafting and mentoring.",
      },
      {
        title: "Common refusal reasons for Pakistani applicants",
        detail:
          "Missing HEC attestation on degrees, fabricated employment references (Pakistan is on the Department's enhanced verification list), inconsistencies between PEC registration and claimed experience years, and undeclared travel to Iran or Afghanistan within character periods. Every document must be verifiable.",
      },
    ],
    occupations: [
      { name: "Mechanical Engineer", anzsco: "233512", pathway: "189 / 190 (Engineers Australia CDR)" },
      { name: "Electrical Engineer", anzsco: "233311", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Civil Engineer", anzsco: "233211", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Software Engineer", anzsco: "261313", pathway: "189 / 190 (ACS)" },
      { name: "ICT Security Specialist", anzsco: "262112", pathway: "189 / 190 (ACS)" },
      { name: "Accountant (General)", anzsco: "221111", pathway: "189 / 190 (CPA Australia)" },
      { name: "GP / Medical Practitioner", anzsco: "253111", pathway: "189 / 482 (AMC + AHPRA)" },
      { name: "Registered Nurse", anzsco: "254423", pathway: "189 / 190 (ANMAC)" },
      { name: "Mining Engineer (excl. Petroleum)", anzsco: "233611", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Petroleum Engineer", anzsco: "233612", pathway: "189 / 190 (Engineers Australia)" },
      { name: "ICT Business Analyst", anzsco: "261111", pathway: "189 / 190 (ACS)" },
      { name: "Pharmacist", anzsco: "251513", pathway: "189 / 190 (APC)" },
    ],
    testimonials: [
      {
        initials: "U.M.",
        age: 33,
        occupation: "Mechanical Engineer",
        city: "Lahore",
        visa: "190 (Victoria)",
        body: "UET Lahore graduate, 8 years experience at Atlas Group. CMG handled my HEC attestation, PEC verification and Engineers Australia CDR. Victoria nominated me at 85 points. Granted in 13 months, settled in Geelong.",
        timeline: "Skills assessment to grant: 13 months",
      },
      {
        initials: "S.K.",
        age: 38,
        occupation: "General Practitioner",
        city: "Karachi",
        visa: "482 → 186",
        body: "Cleared AMC MCQ in 2023, did clinical exam in Sydney. CMG matched me with a regional Queensland clinic that sponsored my 482. Three years later we converted to 186 PR. The whole family is now Australian.",
        timeline: "AMC clearance to PR: 4 years",
      },
    ],
    faqs: [
      {
        question: "Do Pakistani engineering degrees need a CDR for Engineers Australia?",
        answer:
          "Yes - Pakistan is not a signatory to the Washington Accord, so Pakistani engineering degrees (even from UET, NUST, GIKI or other PEC-accredited institutions) require a Competency Demonstration Report (CDR) for Engineers Australia assessment. The CDR involves three career episodes, a summary statement, continuing professional development records and your PEC registration. CMG provides comprehensive CDR drafting, mentoring and review services - our CDRs have a >97% acceptance rate.",
        category: "General",
      },
      {
        question: "How do I get my HEC attestation for an Australian visa application?",
        answer:
          "Submit your original degree and transcripts to HEC headquarters in Islamabad or HEC regional offices (Karachi, Lahore, Peshawar, Quetta). Fee: PKR 800 per document. Processing: 7–14 working days. HEC verifies your institution and applies a tamper-evident attestation stamp. You then submit HEC-attested documents to Engineers Australia, ACS, CPA Australia or whichever assessing body applies. For Australian visa lodgement, no further attestation is needed - but HEC is the prerequisite for assessment.",
        category: "Documents",
      },
      {
        question: "What's the best police clearance to submit for an Australian visa from Pakistan?",
        answer:
          "Three options are widely accepted: (1) PSCA Police Character Certificate (Punjab Safe Cities Authority - fastest, available online, PKR 1,200), (2) NADRA-issued Police Clearance Certificate (recently introduced, available via NADRA centres), or (3) District Special Branch certificate (older route, used in Sindh and KP). All three are accepted by Australian Home Affairs. We typically recommend PSCA for Punjab residents (3-day turnaround) and NADRA for Sindh and KP residents. Valid 6 months from issue.",
        category: "Documents",
      },
      {
        question: "Can I migrate to Australia from Pakistan as a doctor?",
        answer:
          "Yes, via the AMC (Australian Medical Council) pathway. Pakistani MBBS graduates: (1) verify your degree via PMC and have it ECFMG-certified, (2) sit AMC MCQ exam (offered globally including Karachi and Islamabad), (3) sit AMC clinical exam (offered only in Australia - usually Sydney or Melbourne), (4) apply for AHPRA registration and (5) secure a supervised position. Total timeline: 2–4 years. Alternatively, GPs with UK/Ireland/Canada specialist registration can use the Competent Authority Pathway (faster). CMG works with AMC-prep providers in Pakistan and Australia.",
        category: "General",
      },
      {
        question: "How much money do I need to migrate from Pakistan to Australia?",
        answer:
          "Government fees alone: AUD $4,770 for 189/190 primary, AUD $2,385 per adult dependent, AUD $1,195 per child. Skills assessment AUD $500–$900. IELTS/PTE AUD $385. Translations and attestations PKR 50,000–100,000 total. Settlement funds (officially recommended): AUD $40,000–$60,000 for a family of 4 to cover 3–6 months of Australian living costs. CMG professional fees are quoted on assessment - typically AUD $4,000–$7,000 for end-to-end skilled migration support.",
        category: "General",
      },
      {
        question: "Can my wife and children migrate with me from Pakistan?",
        answer:
          "Yes - your spouse and dependent children (under 18, or 18–22 if financially dependent and studying full-time) are included as secondary applicants on your same visa application. Wife's nikah-nama and children's birth certificates must be translated by a NAATI-certified translator and submitted with HEC attestation (where applicable). Spouse can claim 10 partner points if they have a positive skills assessment and Competent English. CMG manages family file structuring routinely.",
        category: "Family & Dependents",
      },
      {
        question: "Is it easier to migrate from Pakistan via student visa or directly via 189?",
        answer:
          "Direct via 189/190 is faster, cheaper and the preferred route for high-scoring engineers, IT specialists and doctors. The student pathway (Subclass 500 → 485 Graduate → 190/491) is the right choice if (a) your points score is below 80, (b) you want Australian work experience to earn 5–20 additional points, or (c) you're under 30 and can absorb the 2-year study cost. The student route typically costs AUD $60,000–$90,000 total but builds a much stronger PR application. CMG runs a free Pakistan-specific assessment to recommend the right path.",
        category: "General",
      },
      {
        question: "What jobs are most in demand from Pakistani applicants right now?",
        answer:
          "Mechanical, electrical and civil engineers (especially with oil & gas or mining experience), GPs and specialist doctors, registered nurses, ICT security specialists, software engineers and accountants. The 2024 Core Skills Occupation List confirmed strong long-term demand in healthcare, construction, IT security and engineering. Demand for mining engineers is particularly strong in WA and Queensland.",
        category: "General",
      },
    ],
    cta: {
      headline: "From Lahore to Sydney - your Australian visa starts here",
      body: "CMG's MARA-registered agents have guided hundreds of Pakistani engineers, doctors and IT professionals to Australian PR. Book a free consultation - we'll assess your points, your HEC documents and your realistic timeline to a visa grant.",
    },
  },

  /* ============================================================== */
  /* PHILIPPINES                                                      */
  /* ============================================================== */
  philippines: {
    slug: "philippines",
    countryName: "Philippines",
    countryShort: "Philippines",
    flagEmoji: "🇵🇭",
    demonym: "Filipino",
    cardBlurb:
      "Nurses, aged care workers, tradespeople and seafarers from Manila, Cebu and Davao. CMG handles AHPRA registration, NBI clearance and POEA-PSA red-ribbon authentication.",
    metaTitle: "Migrate to Australia from the Philippines - CMG MARA",
    metaDescription:
      "Filipino nurses, carers and tradespeople secure Australian PR with CMG. AHPRA, NBI clearance, PSA and red-ribbon document guidance from Dubai-based MARA agents.",
    keywords: [
      "migrate to Australia from Philippines",
      "Australia visa for Filipino nurses",
      "AHPRA registration Philippines",
      "189 visa from Manila",
      "PSA red ribbon authentication",
      "NBI clearance Australia visa",
      "Filipino skilled migration",
    ],
    hero: {
      eyebrow: "From the Philippines to Australia",
      headline: "Migrate to Australia from the Philippines",
      subheadline:
        "Filipino nurses, aged care workers, tradespeople and seafarers form one of Australia's most valued migrant communities. CMG guides applicants from Manila, Cebu, Davao and beyond through AHPRA registration, ANMAC skills assessment, PSA red-ribbon authentication and the realities of NBI clearance. We've placed nurses in NSW Health, Victorian aged care and Queensland regional hospitals.",
      bgImage:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920&q=80",
      gradient: "gradient-hero-blue",
      texture: "dots",
      trustBadges: ["MARA-Authorised", "Healthcare Specialists", "Dubai-Based"],
    },
    snapshot: [
      {
        label: "Most chosen visa types",
        value: "Subclass 482, 190, 491 & 186 (ENS)",
      },
      {
        label: "Typical applicants per year",
        value: "~10,500 Filipino nationals (PR grants, ABS 2023–24)",
      },
      {
        label: "Top occupations",
        value: "Registered Nurse, Aged Care Worker, Welder",
      },
      {
        label: "Document nuance",
        value: "PSA red ribbon + DFA Apostille; NBI clearance valid 6 months",
      },
    ],
    whyAustralia: [
      {
        title: "Massive Filipino community across Australia",
        body: "Australia hosts 320,000+ Filipino-born residents. Sydney's Blacktown and Mount Druitt, Melbourne's Cranbourne, and Perth's Beckenham have full Filipino grocery, sari-sari stores, Catholic churches with Tagalog mass and Jollibee outlets.",
      },
      {
        title: "Healthcare workforce desperately needed",
        body: "Australian healthcare faces a chronic shortage of nurses, aged care workers and disability support workers. Aged Care Worker (ANZSCO 423111) is on the priority migration list - many Filipino applicants secure 482 sponsorship within 6 months.",
      },
      {
        title: "Higher pay, better conditions than KSA / UAE nursing contracts",
        body: "A registered nurse in Australia earns AUD $75,000–$110,000 + super + penalty rates. Compare to PHP 50,000–80,000/month in Manila or AED 6,000–12,000 in the UAE. Plus paid leave, weekends off and zero contract servitude.",
      },
      {
        title: "Path to citizenship in 4 years",
        body: "Unlike Filipino domestic workers in Hong Kong or Singapore (no PR pathway), Australia grants PR from day one on most skilled visas and citizenship in 4 years. Children born in Australia after 4 years can be Australian citizens by birth.",
      },
      {
        title: "Family reunion is real",
        body: "Australian PRs can sponsor partners (subclass 309/820), children, and parents (subclass 143). Many Filipino families bring their parents through Contributory Parent visas once they've settled and bought a home.",
      },
      {
        title: "Catholic culture, English-speaking, easy cultural fit",
        body: "Filipinos integrate faster than almost any other migrant group thanks to English fluency, Catholic faith (Australia has 5M+ Catholics) and a similar service-oriented professional culture.",
      },
    ],
    pathways: [
      {
        number: "482",
        name: "TSS Employer-Sponsored",
        href: "/services/employer-sponsored",
        whyPopular:
          "The fastest pathway for Filipino nurses and aged care workers. Australian aged care providers (Bupa, Regis, Estia, RFBI) sponsor hundreds of Filipino healthcare workers every year via 482.",
      },
      {
        number: "190",
        name: "Skilled Nominated",
        href: "/services/skilled-migration",
        whyPopular:
          "Victoria, NSW and Tasmania actively nominate Filipino registered nurses, midwives and welders with positive AHPRA / TRA assessment. Strong PR pathway with state nomination boost.",
      },
      {
        number: "491",
        name: "Skilled Work Regional (Provisional)",
        href: "/services/skilled-migration",
        whyPopular:
          "Regional state nomination opens doors for Filipino nurses willing to work in Tasmania, regional Victoria, NT or SA. 15-point boost and pathway to 191 PR after 3 years.",
      },
      {
        number: "186",
        name: "Employer Nomination Scheme (PR)",
        href: "/services/employer-sponsored",
        whyPopular:
          "Filipino nurses on 482 visas convert to 186 PR via the Temporary Residence Transition stream after 3 years with the same sponsor - a well-trodden path.",
      },
    ],
    considerations: [
      {
        title: "PSA documents must come with the red ribbon",
        detail:
          "Birth certificates, marriage certificates and CENOMAR (Certificate of No Marriage) issued by the Philippine Statistics Authority (PSA) must be on PSA security paper. The 'red ribbon' authentication by DFA has been replaced by the Apostille (Philippines joined the Hague Convention in 2019) - PSA documents are now Apostilled by the Department of Foreign Affairs.",
      },
      {
        title: "NBI Clearance - valid for 6 months, available online",
        detail:
          "The National Bureau of Investigation Clearance is your police certificate. Apply at nbi-clearance.com or visit any NBI satellite office (SM Malls, Robinsons). Fee: PHP 175. Issued in 1–3 days; valid 6 months. Australian Home Affairs accepts NBI Clearance for residents and former residents of the Philippines.",
      },
      {
        title: "AHPRA registration for nurses - the 3 main routes",
        detail:
          "Filipino RNs typically pursue one of three routes: (1) Outcomes-Based Assessment (OBA) - knowledge test plus an OSCE in Adelaide, (2) the new Modified Pathway introduced March 2024 for nurses with 1,800+ hours of equivalent practice, or (3) full Bachelor of Nursing top-up at an Australian university. AHPRA registration is the prerequisite for ANMAC skills assessment, which feeds into the 189/190/491 application.",
      },
      {
        title: "IELTS / PTE / OET - OET is often best for nurses",
        detail:
          "Nurses, midwives and doctors can use the Occupational English Test (OET) instead of IELTS Academic. OET is healthcare-specific and Filipino RNs often score higher on it. Test centres in Manila, Cebu and Davao. Required: Grade B (350+) in each section for AHPRA registration.",
      },
      {
        title: "Migration agent fraud is rampant - verify MARA status",
        detail:
          "Many illegal 'recruiters' in the Philippines charge huge upfront fees for fake job offers. Always verify your migration agent's MARA registration at mara.gov.au. CMG is fully MARA-authorised and never charges fees against future jobs - we charge transparent professional fees for migration services only.",
      },
      {
        title: "POEA / Department of Migrant Workers compliance",
        detail:
          "Filipino workers travelling abroad on employment contracts must be processed by the Department of Migrant Workers (formerly POEA) via an accredited Philippine recruitment agency. Australian employer-sponsored visa holders (subclass 482, 186) must hold an OEC (Overseas Employment Certificate) for exit. CMG works with DMW-licensed local partners.",
      },
    ],
    occupations: [
      { name: "Registered Nurse (Aged Care)", anzsco: "254412", pathway: "190 / 491 / 482 (ANMAC + AHPRA)" },
      { name: "Registered Nurse (Medical)", anzsco: "254423", pathway: "189 / 190 (ANMAC + AHPRA)" },
      { name: "Registered Nurse (Critical Care)", anzsco: "254415", pathway: "189 / 190 (ANMAC + AHPRA)" },
      { name: "Aged or Disabled Carer", anzsco: "423111", pathway: "482 / 494 (TRA)" },
      { name: "Welder (First Class)", anzsco: "322313", pathway: "189 / 190 / 491 (TRA)" },
      { name: "Cook", anzsco: "351411", pathway: "482 / 494 (TRA)" },
      { name: "Carpenter", anzsco: "331212", pathway: "482 / 491 (TRA)" },
      { name: "Childcare Worker (Early Childhood)", anzsco: "421111", pathway: "482 / 494 (ACECQA)" },
      { name: "Hairdresser", anzsco: "391111", pathway: "491 / 494 (TRA)" },
      { name: "Motor Mechanic", anzsco: "321211", pathway: "189 / 491 (TRA)" },
      { name: "Civil Engineer", anzsco: "233211", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Software Engineer", anzsco: "261313", pathway: "189 / 190 (ACS)" },
    ],
    testimonials: [
      {
        initials: "M.D.",
        age: 29,
        occupation: "Registered Nurse",
        city: "Manila",
        visa: "190 (Victoria)",
        body: "BSN graduate from UST, 4 years at St. Luke's Quezon City. CMG guided me through OET, the Modified Pathway with AHPRA and ANMAC. Victoria nominated me at 80 points. Now an RN at The Royal Melbourne Hospital.",
        timeline: "AHPRA application to grant: 17 months",
      },
      {
        initials: "J.R.",
        age: 35,
        occupation: "Welder",
        city: "Cebu",
        visa: "491 (Tasmania) → 191 PR",
        body: "Mig and stick welding background, 10 years offshore in Saudi. TRA skills assessment plus Tasmania nomination at 75 points. Three years in Launceston and we just got our 191 PR. Worth every step.",
        timeline: "Skills assessment to 191 PR: 4 years",
      },
    ],
    faqs: [
      {
        question: "How do I get AHPRA registration as a Filipino nurse?",
        answer:
          "Three pathways are available: (1) Outcomes-Based Assessment (OBA) - a multiple-choice cognitive exam plus an OSCE (Objective Structured Clinical Examination) held in Adelaide; (2) Modified Pathway (introduced March 2024) - for nurses with substantial recent practice equivalent to Australian standards, no OSCE required; or (3) Bridging program - a 6-month nursing top-up course at an Australian university for nurses needing additional clinical training. You also need OET Grade B (350+) or IELTS 7.0 each band. CMG works with all three routes and AMC-AHPRA prep providers.",
        category: "General",
      },
      {
        question: "What's the difference between an employer-sponsored (482) and skilled (189/190) visa for Filipino nurses?",
        answer:
          "Subclass 482 (TSS) is sponsor-dependent - you must work for the sponsoring employer, typically a hospital or aged care provider, for 3 years before you can apply for 186 PR. It's faster to obtain (3–6 months) but ties you to one employer. Subclass 189/190 is independent skilled migration - you can work for any employer anywhere in Australia from day one as a permanent resident, but it requires a higher points score (typically 80+) and takes 14–22 months. CMG recommends 482 for nurses who want a fast start, 190 for those with strong English and points.",
        category: "General",
      },
      {
        question: "Do I need PSA red-ribbon documents or Apostille for an Australian visa?",
        answer:
          "Apostille has replaced red ribbon since the Philippines joined the Hague Convention in 2019. Your PSA-issued documents (birth certificate, marriage certificate, CENOMAR) must be Apostilled by the DFA Office of Consular Affairs (Aseana) or any DFA Consular Office (Cebu, Davao, Bacolod, etc.). Apostille fee: PHP 200. Processing: 1–3 working days. PSA documents printed within 6 months of submission are required.",
        category: "Documents",
      },
      {
        question: "How do Filipino aged care workers get sponsored to Australia?",
        answer:
          "Aged Care Worker (ANZSCO 423111) is on the Core Skills Occupation List for the 482 visa. Australian aged care providers (Regis, Estia, Bupa, RFBI, Uniting) actively sponsor Filipino workers with a Certificate III in Individual Support or equivalent Philippine qualifications. Pathway: TRA skills assessment, IELTS 5.0 each band minimum, 482 visa for 4 years, then 186 ENS PR via the TRT stream. CMG matches qualified candidates with accredited Australian sponsors.",
        category: "General",
      },
      {
        question: "Can my family migrate with me from the Philippines?",
        answer:
          "Yes - your spouse and dependent children (under 18, or 18–22 if dependent and studying) are included as secondary applicants. PSA-issued marriage certificate and children's birth certificates (Apostilled) are required. Children must meet health requirements. If your spouse has a separate skills assessment, they can claim 10 partner points to boost your EOI score. CMG manages family files end-to-end.",
        category: "Family & Dependents",
      },
      {
        question: "Is it true that Filipino welders, carpenters and tradespeople are in demand in Australia?",
        answer:
          "Yes - Welder, Carpenter, Plumber, Electrician and Bricklayer are all on the Core Skills Occupation List with strong long-term demand. The trades pathway typically goes via TRA (Trades Recognition Australia) skills assessment, which involves a paper-based qualification review plus a technical interview or practical assessment. Filipino tradespeople with 5+ years of equivalent experience and OEC-compliant employment records have strong PR pathways via subclass 189, 190 and 491.",
        category: "General",
      },
      {
        question: "How much will the migration process cost me from the Philippines?",
        answer:
          "Government fees: AUD $4,770 for 189/190 primary, AUD $2,385 per adult dependent. Skills assessment AUD $500–$900. AHPRA registration AUD $1,500–$3,000 (nurses). IELTS/OET AUD $385. Total settlement funds recommended: AUD $25,000–$40,000 for a family of 4. CMG professional fees are quoted transparently after free assessment - typically AUD $4,000–$7,000 for end-to-end skilled migration support. Never pay a 'recruiter' upfront for a job offer.",
        category: "Costs & Fees",
      },
      {
        question: "Can I bring my parents from the Philippines once I'm in Australia?",
        answer:
          "Yes - once you're an Australian permanent resident or citizen, you can sponsor your parents via the Contributory Parent visa (subclass 143). Fee: ~AUD $48,000 per parent (one-off). Processing: 4–6 years. The Sponsored Parent Temporary visa (subclass 870) is a non-PR option allowing 5–10 years of stay. Many Filipino families pursue 143 once their children are established and they've bought a home in Australia.",
        category: "General",
      },
    ],
    cta: {
      headline: "From Manila to Melbourne - let CMG handle your visa",
      body: "Whether you're a registered nurse from St. Luke's, a welder from Cebu or an aged care worker from Davao - CMG's MARA-registered agents have placed Filipino professionals in NSW Health, Victorian aged care and Tasmanian regional employers. Book a free consultation.",
    },
  },

  /* ============================================================== */
  /* EGYPT                                                            */
  /* ============================================================== */
  egypt: {
    slug: "egypt",
    countryName: "Egypt",
    countryShort: "Egypt",
    flagEmoji: "🇪🇬",
    demonym: "Egyptian",
    cardBlurb:
      "Engineers, doctors and teachers from Cairo, Alexandria and Giza. CMG navigates Ministry of Foreign Affairs attestation, Egyptian police clearance and Arabic document translation.",
    metaTitle: "Migrate to Australia from Egypt - CMG MARA Agents",
    metaDescription:
      "Egyptian engineers, doctors and IT professionals migrate to Australia with CMG. MOFA attestation, Arabic translation and MARA agent guidance from Dubai.",
    keywords: [
      "migrate to Australia from Egypt",
      "Australia PR for Egyptian nationals",
      "189 visa from Cairo",
      "Egypt skilled migration Australia",
      "Egyptian engineers Australia",
      "MOFA attestation Egypt Australia",
      "Australia visa from Alexandria",
    ],
    hero: {
      eyebrow: "From Egypt to Australia",
      headline: "Migrate to Australia from Egypt",
      subheadline:
        "Egyptian engineers, doctors, teachers and IT professionals are increasingly choosing Australia for its stability, salary uplift and clear pathway to citizenship. CMG's MARA-registered agents guide applicants from Cairo, Alexandria and Giza through subclass 189, 190 and 482 visas - with expertise in Egyptian Ministry of Foreign Affairs attestation, Arabic NAATI translation and engineering qualification recognition.",
      bgImage:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&q=80",
      gradient: "gradient-hero-warm",
      texture: "diagonal",
      trustBadges: ["MARA-Authorised", "Dubai-Based", "Middle East Specialists"],
    },
    snapshot: [
      {
        label: "Most chosen visa types",
        value: "Subclass 189, 190, 482 & 500 (student)",
      },
      {
        label: "Typical applicants per year",
        value: "~1,800 Egyptian nationals (PR grants, ABS 2023–24)",
      },
      {
        label: "Top occupations",
        value: "Civil Engineer, Petroleum Engineer, GP",
      },
      {
        label: "Document nuance",
        value: "Egyptian MOFA attestation + NAATI Arabic translation required",
      },
    ],
    whyAustralia: [
      {
        title: "Stability and a future for your children",
        body: "Australia offers political stability, a strong currency and decades of consistent economic growth. Egyptian families consistently cite their children's future as the #1 driver for migration - Australian PR delivers exactly that.",
      },
      {
        title: "Massive salary uplift in engineering and medicine",
        body: "A senior petroleum engineer in Egypt earns USD $25,000–$40,000/year. The equivalent role in Perth or Brisbane pays AUD $140,000–$200,000 (USD $90K–$130K) plus super, paid leave and Medicare.",
      },
      {
        title: "A growing Egyptian Coptic and Muslim community",
        body: "Sydney's Eastlakes, Melbourne's Coburg and Brisbane's Logan host established Egyptian communities with Coptic Orthodox churches, halal grocers, koshary restaurants and Arabic-speaking dental and medical clinics.",
      },
      {
        title: "Recognised engineering qualifications",
        body: "Egyptian engineering degrees from accredited universities (Cairo University, Ain Shams, AUC, Alexandria) are well-regarded by Engineers Australia via the CDR pathway. Petroleum and chemical engineers are in particularly high demand in WA and Queensland.",
      },
      {
        title: "World-class medical AHPRA pathway",
        body: "Egyptian MBBS graduates pursue the AMC pathway: AMC MCQ in Cairo or Dubai, AMC clinical exam in Sydney/Melbourne, then AHPRA registration. Around 200+ Egyptian doctors complete this every year.",
      },
      {
        title: "English-language fluency advantage",
        body: "AUC and many Cairo private schools deliver English-medium education. Egyptian applicants typically score higher on IELTS/PTE than other Middle Eastern source countries, earning them 10–20 bonus English points.",
      },
    ],
    pathways: [
      {
        number: "189",
        name: "Skilled Independent",
        href: "/services/skilled-migration",
        whyPopular:
          "Strongest pathway for Egyptian petroleum, chemical and civil engineers with high English scores. No state restriction - you can settle anywhere from Sydney to Perth.",
      },
      {
        number: "190",
        name: "Skilled Nominated",
        href: "/services/skilled-migration",
        whyPopular:
          "WA actively nominates Egyptian mining and petroleum engineers; Victoria nominates civil engineers and IT professionals. 5 extra points often bridges the invitation gap.",
      },
      {
        number: "482",
        name: "TSS Employer-Sponsored",
        href: "/services/employer-sponsored",
        whyPopular:
          "Egyptian engineers with Gulf experience (Saudi Aramco, ADNOC, Kuwait Oil) are actively recruited by Australian mining and energy companies - particularly in WA's Pilbara and Queensland's Surat Basin.",
      },
      {
        number: "186",
        name: "Employer Nomination Scheme (PR)",
        href: "/services/employer-sponsored",
        whyPopular:
          "Direct Entry stream for Egyptian doctors and senior engineers recruited from outside Australia. Permanent residency from grant.",
      },
    ],
    considerations: [
      {
        title: "Egyptian Ministry of Foreign Affairs attestation",
        detail:
          "Educational documents (university degrees, transcripts) must be attested by: (1) the Egyptian Supreme Council of Universities first (for public university degrees), (2) the Egyptian Ministry of Foreign Affairs in Cairo, and (3) re-attested by the Australian Embassy in Cairo if needed. Allow 10–20 working days total. Cost: EGP 200–800 per document.",
      },
      {
        title: "Police Clearance from Egyptian Ministry of Interior",
        detail:
          "Egyptian Police Clearance (شهادة عدم محكومية / Certificate of Non-Conviction) is issued by the Ministry of Interior's Criminal Status Department in Abbasia, Cairo. Cost: EGP 70. Processing: 5–10 working days. Valid 3 months from issue. Authentication by the Egyptian MOFA is then required.",
      },
      {
        title: "NAATI-certified Arabic translation is essential",
        detail:
          "All Arabic-language documents (birth certificates, marriage certificates, military service records, police certificates) must be translated by NAATI-certified translators. CMG works with NAATI-accredited Arabic translators in Dubai and Australia. Allow 5–7 working days; cost AUD $50–$120 per document.",
      },
      {
        title: "Engineering qualifications - CDR via Engineers Australia",
        detail:
          "Egypt is not a Washington Accord signatory, so Egyptian engineering graduates submit a full Competency Demonstration Report (CDR). Three career episodes plus a summary statement mapping experience to ANZSCO. CMG provides full CDR drafting and review services.",
      },
      {
        title: "IELTS / PTE test centres in Egypt",
        detail:
          "British Council and IDP Education deliver IELTS in Cairo (Maadi, Dokki) and Alexandria. PTE Academic at Pearson VUE in Cairo. Egyptian candidates often choose PTE due to its faster turnaround (results in 2 working days vs 13 days for IELTS). AUC alumni typically score IELTS 7.5+ without issue.",
      },
      {
        title: "Military service - declaration is mandatory",
        detail:
          "Egyptian male applicants must declare their military service status (completed, exempted, or deferred) in their visa application. Military service exemption certificates (نموذج 6) issued by the Egyptian Ministry of Defence must be translated, MOFA-attested and submitted. Omitting this is a common cause of refusal.",
      },
    ],
    occupations: [
      { name: "Civil Engineer", anzsco: "233211", pathway: "189 / 190 (Engineers Australia CDR)" },
      { name: "Petroleum Engineer", anzsco: "233612", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Chemical Engineer", anzsco: "233111", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Mechanical Engineer", anzsco: "233512", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Electrical Engineer", anzsco: "233311", pathway: "189 / 190 (Engineers Australia)" },
      { name: "GP / Medical Practitioner", anzsco: "253111", pathway: "189 / 482 (AMC + AHPRA)" },
      { name: "Dentist", anzsco: "252312", pathway: "189 / 190 (ADC)" },
      { name: "Pharmacist (Retail)", anzsco: "251513", pathway: "189 / 190 (APC)" },
      { name: "Secondary School Teacher", anzsco: "241411", pathway: "190 / 491 (AITSL)" },
      { name: "Software Engineer", anzsco: "261313", pathway: "189 / 190 (ACS)" },
      { name: "Accountant (General)", anzsco: "221111", pathway: "189 / 190 (CPA Australia)" },
      { name: "Architect", anzsco: "232111", pathway: "190 / 491 (AACA)" },
    ],
    testimonials: [
      {
        initials: "A.M.",
        age: 36,
        occupation: "Petroleum Engineer",
        city: "Cairo",
        visa: "190 (Western Australia)",
        body: "Cairo University 2008 graduate, 12 years with Schlumberger across Egypt, Saudi and Kuwait. CMG built my CDR and managed WA nomination at 90 points. Now working onshore in Karratha.",
        timeline: "Skills assessment to grant: 15 months",
      },
      {
        initials: "H.G.",
        age: 32,
        occupation: "General Practitioner",
        city: "Alexandria",
        visa: "482 → 186",
        body: "Cleared AMC MCQ in 2022, clinical in Sydney in 2023. CMG matched me with a regional NSW practice that sponsored my 482. Three years on, we just got 186 PR. The whole family loves life in Tamworth.",
        timeline: "AMC clearance to PR: 4 years",
      },
    ],
    faqs: [
      {
        question: "How do I get my Egyptian engineering degree recognised in Australia?",
        answer:
          "Via a Competency Demonstration Report (CDR) submitted to Engineers Australia. Egypt is not a Washington Accord signatory, so even degrees from Cairo University, Ain Shams, AUC and Alexandria require a CDR. The CDR includes three career episodes (detailed engineering project narratives), a summary statement mapping your experience to ANZSCO competency elements, and CPD records. Processing at Engineers Australia takes 6–10 weeks; CMG provides full CDR drafting and mentoring with a >97% acceptance rate.",
        category: "Eligibility & Skills",
      },
      {
        question: "What documents need attestation from Egypt for an Australian visa?",
        answer:
          "Educational degrees, transcripts, birth certificates, marriage certificates, military service certificates and police clearance certificates. The attestation chain is: (1) issuing authority (e.g., Egyptian Supreme Council of Universities for degrees), (2) Egyptian Ministry of Foreign Affairs (MOFA), and optionally (3) the Australian Embassy in Cairo. All Arabic documents must then be NAATI-translated for visa lodgement. CMG manages the full chain - typically 4–6 weeks for a complete document set.",
        category: "Documents",
      },
      {
        question: "Can Egyptian doctors practise medicine in Australia?",
        answer:
          "Yes, via the AMC (Australian Medical Council) pathway. Steps: (1) verify your Egyptian MBBS degree via the Egyptian Medical Syndicate and have it ECFMG-certified, (2) sit the AMC MCQ exam in Cairo or Dubai, (3) sit the AMC clinical exam in Australia (Sydney/Melbourne/Adelaide), (4) apply for AHPRA registration and (5) secure a supervised position. Total timeline: 2–4 years. Alternatively, GPs with UK, Ireland, Canada or New Zealand specialist registration can use the Competent Authority Pathway (much faster). CMG works with AMC-prep providers in Cairo and Australia.",
        category: "General",
      },
      {
        question: "Do I need to provide my Egyptian military service record?",
        answer:
          "Yes - Egyptian male applicants must declare their military service status. You'll need to provide either: (a) military service completion certificate (شهادة أداء الخدمة), (b) exemption certificate (نموذج 6 - exemption form), or (c) deferral evidence (if still studying or working abroad). Documents must be MOFA-attested and NAATI-translated. Failing to declare or providing inconsistent military service information is a common cause of visa refusal.",
        category: "General",
      },
      {
        question: "How long does the Australian visa process take from Egypt?",
        answer:
          "Realistically 14–22 months end-to-end: skills assessment (CDR 6–10 weeks for engineers, AMC 12–24 months for doctors), IELTS/PTE preparation (1–3 months), EOI submission, wait for invitation (typically 3–8 months for engineers at 85+ points), visa lodgement to grant (75% of 189 cases decided within 12 months). Higher points scores get invited faster. Egyptian applicants typically achieve strong English scores, which significantly speeds up the invitation process.",
        category: "Process & Timeline",
      },
      {
        question: "Can my family migrate with me from Egypt?",
        answer:
          "Yes - your spouse and dependent children (under 18, or 18–22 if financially dependent) are included as secondary applicants on the same visa application. Marriage certificate and children's birth certificates require MOFA attestation and NAATI Arabic translation. Spouse can earn 10 partner points with a positive skills assessment and Competent English. Spouse and children inherit all visa work and study rights upon grant.",
        category: "Family & Dependents",
      },
      {
        question: "How much will the migration process cost from Egypt?",
        answer:
          "Government fees: AUD $4,770 for 189/190 primary applicant, AUD $2,385 per adult dependent, AUD $1,195 per child. Engineers Australia CDR: AUD $850. IELTS/PTE: AUD $385. MOFA attestations and NAATI translations: EGP 8,000–15,000 (approx AUD $400–$700). Recommended settlement funds: AUD $30,000–$50,000 for a family of 4. CMG professional fees are quoted transparently after free consultation - typically AUD $4,000–$7,000 for full end-to-end skilled migration support.",
        category: "Costs & Fees",
      },
      {
        question: "Are Egyptian Coptic Christian families well-supported in Australia?",
        answer:
          "Yes - Australia has an established Coptic Orthodox community of 80,000+ members concentrated in Sydney (Glenwood, Donvale), Melbourne (Coburg, Knoxfield) and Brisbane. Multiple Coptic Orthodox churches, Coptic schools (e.g., St Mark's Coptic Orthodox College in Wattle Grove), Coptic festivals and Arabic-Coptic Sunday schools provide a strong cultural home for Egyptian Christian families.",
        category: "General",
      },
    ],
    cta: {
      headline: "From Cairo to Sydney - your Australian future awaits",
      body: "Whether you're an engineer at Schlumberger, a GP in Alexandria or a teacher at AUC - CMG's MARA-registered agents have placed Egyptian professionals across Australia. Book a free consultation and we'll map your realistic 12–18 month path to PR.",
    },
  },

  /* ============================================================== */
  /* SAUDI ARABIA                                                     */
  /* ============================================================== */
  "saudi-arabia": {
    slug: "saudi-arabia",
    countryName: "Saudi Arabia",
    countryShort: "Saudi Arabia",
    flagEmoji: "🇸🇦",
    demonym: "Saudi resident",
    cardBlurb:
      "Expat engineers, doctors, IT and finance professionals in Riyadh, Jeddah and Dammam. CMG handles Saudi MOFA authentication, Absher clearance and Iqama-based document verification.",
    metaTitle: "Migrate to Australia from Saudi Arabia - CMG MARA",
    metaDescription:
      "Saudi residents - Saudi nationals and expat workers - secure Australian PR with CMG. MOFA attestation, Iqama-based documents and MARA agent guidance.",
    keywords: [
      "migrate to Australia from Saudi Arabia",
      "Australia visa from Riyadh",
      "Australian PR for Saudi expats",
      "189 visa from Saudi",
      "MARA agent Saudi Arabia",
      "Australia migration from Jeddah",
      "Aramco Australia migration",
    ],
    hero: {
      eyebrow: "From Saudi Arabia to Australia",
      headline: "Migrate to Australia from Saudi Arabia",
      subheadline:
        "Whether you're a Saudi national, an expat engineer at Aramco, or a healthcare professional working in Riyadh - Australia offers what Saudi residency cannot: permanent settlement, citizenship in 4 years and a future built for your family. CMG's MARA-registered agents handle Saudi MOFA attestation, Absher clearance, Iqama-based document verification and the realities of leaving the Kingdom.",
      bgImage:
        "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1920&q=80",
      gradient: "gradient-hero-deep",
      texture: "grid",
      trustBadges: ["MARA-Authorised", "Dubai-Based", "GCC Specialists"],
    },
    snapshot: [
      {
        label: "Most chosen visa types",
        value: "Subclass 189, 190, 482 & 186 (ENS)",
      },
      {
        label: "Typical applicants per year",
        value: "~2,400 Saudi-resident applicants (PR grants, ABS 2023–24)",
      },
      {
        label: "Top occupations",
        value: "Petroleum Engineer, Software Engineer, Accountant",
      },
      {
        label: "Document nuance",
        value: "Saudi MOFA attestation + home-country authentication chain",
      },
    ],
    whyAustralia: [
      {
        title: "Permanent settlement vs perpetual Iqama renewal",
        body: "Saudi Iqama-based residency is conditional on employment and renewable every 1–3 years. Saudi Premium Residency exists but is expensive and limited. Australia grants permanent residency from day one - no employer dependency, no renewal anxiety.",
      },
      {
        title: "Children grow up with citizenship rights",
        body: "Children born in Saudi Arabia to expat parents do not get Saudi citizenship. Children born in Australia to permanent residents are typically Australian citizens by birth after 10 years residency, or at age 10 if both parents are PRs.",
      },
      {
        title: "Salaries that retain purchasing power",
        body: "Saudi packages are competitive but increasingly include Saudization quotas and reduced expat benefits. Australian total compensation (super, leave loading, Medicare) compares well with Aramco / Sabic / Saudi Aramco packages on a like-for-like basis for senior engineers.",
      },
      {
        title: "Established Arab and South Asian communities",
        body: "Sydney's Lakemba, Auburn and Bankstown; Melbourne's Brunswick, Coburg and Dandenong host major Arab Muslim communities. Halal infrastructure is mainstream and prayer accommodation in workplaces is normal.",
      },
      {
        title: "Lifestyle for families",
        body: "Free-mixing public life, beaches, cinema, music - for many Saudi-resident families, particularly those with daughters, Australia delivers the everyday freedoms that Saudi residency cannot. Plus world-class public schools and universities.",
      },
      {
        title: "Pathway for high-net-worth Saudi nationals",
        body: "Saudi business owners and senior executives with global wealth qualify for the upcoming National Innovation visa and subclass 188C Significant Investor stream (AUD $5M in complying investments). Saudi-issued financial statements are accepted by Australian state nomination panels.",
      },
    ],
    pathways: [
      {
        number: "189",
        name: "Skilled Independent",
        href: "/services/skilled-migration",
        whyPopular:
          "The dominant pathway for Saudi-based expat engineers, IT professionals and accountants with high points scores. No state restriction - settle anywhere in Australia.",
      },
      {
        number: "190",
        name: "Skilled Nominated",
        href: "/services/skilled-migration",
        whyPopular:
          "WA actively nominates petroleum and mining engineers from Saudi Aramco, Sabic and similar. NSW and Victoria nominate IT, finance and healthcare professionals.",
      },
      {
        number: "482",
        name: "TSS Employer-Sponsored",
        href: "/services/employer-sponsored",
        whyPopular:
          "Saudi-based engineers with mining and energy experience are actively recruited by Australian resource companies in WA's Pilbara and Queensland's Bowen Basin.",
      },
      {
        number: "186",
        name: "Employer Nomination Scheme (PR)",
        href: "/services/employer-sponsored",
        whyPopular:
          "Direct Entry stream for senior executives, project directors and specialist engineers recruited directly from Saudi roles. Permanent residency from grant.",
      },
    ],
    considerations: [
      {
        title: "Saudi MOFA attestation for Iqama-based documents",
        detail:
          "Documents issued in Saudi Arabia (employment letters, salary certificates from your KSA employer, marriage certificates if married in KSA) need attestation by the Saudi Ministry of Foreign Affairs. The chain is: employer / Chamber of Commerce → Saudi MOFA → Australian Embassy in Riyadh (if needed). Allow 1–3 weeks. Cost: SAR 60–200 per document.",
      },
      {
        title: "Home-country document authentication remains separate",
        detail:
          "Documents from your home country (Indian degrees, Pakistani degrees, Egyptian degrees, etc.) must be authenticated in that country (HRD/MEA Apostille, HEC attestation, Egyptian MOFA) - they cannot be authenticated via Saudi MOFA. You'll need either a return trip or a power of attorney for someone in your home country.",
      },
      {
        title: "Absher / Police clearance from Saudi Ministry of Interior",
        detail:
          "Saudi Police Clearance is requested via the Absher portal (absher.sa) or through the Ministry of Interior service centres. Available to Iqama holders who have lived in KSA for 12+ months. Issued in Arabic; requires NAATI Arabic translation. Valid 6 months.",
      },
      {
        title: "IELTS / PTE test centres in Saudi Arabia",
        detail:
          "IELTS Academic is delivered by the British Council (Riyadh, Jeddah, Khobar, Al Khobar) and IDP Education. PTE Academic operates at Pearson VUE in Riyadh, Jeddah and Dammam. Both genders welcome at all centres post-2019 reforms. Slots typically book 2–3 weeks ahead.",
      },
      {
        title: "Aramco employment evidence - special handling",
        detail:
          "Saudi Aramco, Sabic and similar major employers issue employment letters in specific formats. Australian assessors (Engineers Australia, ACS, CPA Australia) sometimes need supplementary detail on roles and responsibilities. CMG knows exactly how to structure Aramco reference letters for ANZSCO mapping.",
      },
      {
        title: "Exit visa considerations for expat workers",
        detail:
          "Expat workers in Saudi Arabia historically required exit/re-entry visas via their employer. The 2021 labour reforms removed this for most workers, but some industries still apply restrictions. CMG advises on timing your KSA exit relative to your Australian visa grant to avoid contract breach penalties.",
      },
    ],
    occupations: [
      { name: "Petroleum Engineer", anzsco: "233612", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Mining Engineer (excl. Petroleum)", anzsco: "233611", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Chemical Engineer", anzsco: "233111", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Civil Engineer", anzsco: "233211", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Mechanical Engineer", anzsco: "233512", pathway: "189 / 190 (Engineers Australia)" },
      { name: "Software Engineer", anzsco: "261313", pathway: "189 / 190 (ACS)" },
      { name: "ICT Security Specialist", anzsco: "262112", pathway: "189 / 190 (ACS)" },
      { name: "Accountant (General)", anzsco: "221111", pathway: "189 / 190 (CPA Australia)" },
      { name: "External Auditor", anzsco: "221213", pathway: "189 / 190 (CPA Australia)" },
      { name: "GP / Medical Practitioner", anzsco: "253111", pathway: "189 / 482 (AMC + AHPRA)" },
      { name: "Registered Nurse", anzsco: "254423", pathway: "189 / 190 (ANMAC)" },
      { name: "Project Manager (Construction)", anzsco: "133111", pathway: "190 / 491 (VETASSESS)" },
    ],
    testimonials: [
      {
        initials: "F.A.",
        age: 39,
        occupation: "Petroleum Engineer",
        city: "Dhahran",
        visa: "189",
        body: "Aramco for 11 years before CMG. They handled my Engineers Australia CDR, the MOFA chain for my Saudi employment letters and family file. Final score 95. Granted in 12 months and now in Perth with my family.",
        timeline: "EOI to grant: 12 months",
      },
      {
        initials: "N.B.",
        age: 35,
        occupation: "Senior Software Engineer",
        city: "Riyadh",
        visa: "190 (NSW)",
        body: "Indian national working in Riyadh for 7 years. CMG navigated both Saudi MOFA attestation for my KSA employer letters AND Indian HRD attestation for my degree from BITS Pilani. NSW nominated me at 85. Sydney since 2024.",
        timeline: "Skills assessment to grant: 15 months",
      },
    ],
    faqs: [
      {
        question: "Can I count my Saudi Arabia work experience toward Australian skilled migration points?",
        answer:
          "Yes - overseas work experience earns up to 15 points (5 points for 3 years, 10 for 5 years, 15 for 8+ years) provided it's in your nominated ANZSCO occupation. Saudi-based expat workers at Aramco, Sabic, SAGIA companies and similar all qualify, provided you have detailed reference letters on company letterhead with dates, salary, duties and full-time/part-time confirmation. CMG specifically structures Saudi employment evidence for ACS, Engineers Australia and CPA Australia standards.",
        category: "Costs & Fees",
      },
      {
        question: "What documents from Saudi Arabia need MOFA attestation for Australia?",
        answer:
          "Documents issued in Saudi Arabia: employment letters from your KSA employer, salary certificates, marriage certificates issued by Saudi authorities, and any commercial documents (for business visa applicants). The chain is: employer or Chamber of Commerce → Saudi Ministry of Foreign Affairs in Riyadh → optionally the Australian Embassy. Documents issued in your home country (degrees, your birth certificate, your home-country marriage certificate) need authentication in that country - Saudi MOFA cannot certify them.",
        category: "Costs & Fees",
      },
      {
        question: "I'm a Saudi national - can I get Australian PR?",
        answer:
          "Yes. Saudi nationals qualify for all Australian visa subclasses on the same terms as any other applicant. Saudi citizenship is not a barrier to Australian PR or citizenship - Australia recognises dual citizenship, though Saudi Arabia generally does not (you'll need to consult Saudi authorities on your domestic position). High-net-worth Saudi nationals may also qualify for the upcoming National Innovation visa and subclass 188C Significant Investor stream.",
        category: "Costs & Fees",
      },
      {
        question: "Can I migrate from Saudi Arabia without going back to my home country first?",
        answer:
          "Generally yes - but it requires careful planning. Home-country documents (your degree, your birth certificate) need authentication in your home country, which can be done via a Power of Attorney. Your Saudi MOFA attestation is done locally. Police clearances are required from every country you've lived in for 12+ months in the last 10 years - typically that means Saudi (via Absher) and your home country. CMG manages the parallel attestation chains and PCC timing routinely.",
        category: "Costs & Fees",
      },
      {
        question: "How do I get my Saudi police clearance for an Australian visa?",
        answer:
          "Apply via the Absher portal (absher.sa) - log in with your Iqama, request a Criminal Record Certificate / Police Clearance, and pay SAR 80–200. Document is issued in Arabic, typically within 1–3 working days. You'll then need it MOFA-attested and NAATI-translated to English for submission to Australia. The certificate is valid 6 months from issue. If you're no longer in Saudi Arabia, you can request via the Saudi Embassy in your current country.",
        category: "Costs & Fees",
      },
      {
        question: "I work for Aramco - does CMG handle my visa?",
        answer:
          "Yes. CMG has guided many Saudi Aramco engineers, IT professionals and finance staff through Australian visa applications. Aramco employment letters need specific structuring to map to ANZSCO competency standards for Engineers Australia, ACS or CPA Australia - we know exactly how. We also advise on the timing of your Aramco exit relative to your Australian visa grant to avoid contract breach penalties or repatriation flight obligations.",
        category: "General",
      },
      {
        question: "How long does the Australian visa process take from Saudi Arabia?",
        answer:
          "Realistically 14–20 months end-to-end. Breakdown: skills assessment (6–10 weeks for engineers via CDR, 4–6 weeks for ACS), IELTS/PTE (1 month), parallel MOFA chains for Saudi and home-country documents (3–4 weeks), EOI submission, wait for invitation (1–8 months depending on points), visa lodgement to grant (typically 8–14 months for 189/190 at 85+ points). Saudi-based applicants with strong English scores and clear ANZSCO mapping tend to be invited in the first or second SkillSelect round.",
        category: "Costs & Fees",
      },
      {
        question: "Can my family migrate from Saudi Arabia with me?",
        answer:
          "Yes. Your spouse and dependent children (under 18, or 18–22 if financially dependent) are included as secondary applicants on the same visa application. Marriage certificate and children's birth certificates may need authentication from either Saudi MOFA (if issued in KSA) or your home country (if issued there). All Arabic documents need NAATI-certified English translation. Spouses with their own skills assessment can earn 10 partner points to boost your EOI score. Children inherit all study and Medicare rights on grant.",
        category: "Costs & Fees",
      },
    ],
    cta: {
      headline: "From the Kingdom to your Australian future",
      body: "Whether you're an Aramco engineer, a Sabic professional, a Riyadh-based GP or a Saudi business owner - CMG's MARA-registered agents will assess your points, map your dual-country document chain and build your file to Australian Department standards. Free 30-minute consultation by video or in person at our Dubai office.",
    },
  },
}

/* Convenience exports */
export const countrySlugs: string[] = Object.keys(countries)

export function getCountry(slug: string): CountryContent | undefined {
  return countries[slug]
}
