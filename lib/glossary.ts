export interface GlossaryTerm {
  term: string
  abbr?: string
  category: "Skilled Migration" | "Family & Partner" | "Student" | "Employer" | "Business" | "General" | "Process" | "Documents"
  definition: string
  relatedTerms?: string[]
  externalLink?: { label: string; href: string }
}

export const glossary: GlossaryTerm[] = [
  // ─── General & Authority ───────────────────────────────────────────────
  {
    term: "MARA",
    abbr: "Migration Agents Registration Authority",
    category: "General",
    definition:
      "The Australian government body that registers and regulates migration agents. Only MARA-authorised agents can legally provide immigration assistance for a fee in Australia. Now incorporated into the Department of Home Affairs as OMARA.",
  },
  {
    term: "OMARA",
    abbr: "Office of the Migration Agents Registration Authority",
    category: "General",
    definition:
      "The current name for the body that regulates registered migration agents in Australia. OMARA enforces the Code of Conduct, processes complaints, and maintains the public Register of Migration Agents.",
  },
  {
    term: "Home Affairs",
    abbr: "Department of Home Affairs",
    category: "General",
    definition:
      "The Australian federal department responsible for immigration, citizenship, border control and migration policy. All visa applications are decided by Home Affairs case officers.",
  },
  {
    term: "MARN",
    abbr: "Migration Agent Registration Number",
    category: "General",
    definition:
      "The 7-digit number assigned to each registered migration agent by OMARA. You can verify any agent's credentials at mara.gov.au using their MARN.",
  },
  {
    term: "ART",
    abbr: "Administrative Review Tribunal",
    category: "General",
    definition:
      "The body that reviews refused visa decisions on merit. ART replaced the Administrative Appeals Tribunal (AAT) in October 2024. You typically have 21 days to lodge an appeal after a visa refusal.",
  },

  // ─── Skilled Migration ─────────────────────────────────────────────────
  {
    term: "SkillSelect",
    category: "Skilled Migration",
    definition:
      "Australia's online expression of interest system. Skilled migration candidates submit an EOI through SkillSelect and the Department issues invitations to apply (ITAs) to the highest-scoring candidates in periodic rounds.",
    relatedTerms: ["EOI", "ITA"],
  },
  {
    term: "EOI",
    abbr: "Expression of Interest",
    category: "Skilled Migration",
    definition:
      "Your formal expression of interest for skilled migration submitted through SkillSelect. An EOI is not a visa application — it's a claim of your circumstances. You must be invited before you can apply.",
    relatedTerms: ["SkillSelect", "ITA"],
  },
  {
    term: "ITA",
    abbr: "Invitation to Apply",
    category: "Skilled Migration",
    definition:
      "The formal invitation issued by Home Affairs after a SkillSelect round, allowing you 60 days to lodge a visa application. ITAs are issued to candidates with the highest points scores in each round.",
    relatedTerms: ["SkillSelect", "EOI"],
  },
  {
    term: "MLTSSL",
    abbr: "Medium and Long-Term Strategic Skills List",
    category: "Skilled Migration",
    definition:
      "The list of occupations eligible for the subclass 189 (Independent), subclass 186 (Direct Entry), and most regional skilled pathways. Roles on the MLTSSL are considered to have long-term demand in Australia.",
  },
  {
    term: "STSOL",
    abbr: "Short-Term Skilled Occupation List",
    category: "Skilled Migration",
    definition:
      "List of occupations available for shorter-term sponsored visas like the 482 (Short-term stream). Some 190 and 491 state nominations also draw from the STSOL.",
  },
  {
    term: "ANZSCO",
    abbr: "Australian and New Zealand Standard Classification of Occupations",
    category: "Skilled Migration",
    definition:
      "The official occupation classification system used for Australian skilled migration. Every nominated occupation has a 6-digit ANZSCO code (e.g., 261313 for Software Engineer).",
  },
  {
    term: "Points Test",
    category: "Skilled Migration",
    definition:
      "The 130-point assessment used to rank skilled migration applicants. Points are awarded across age, English, education, work experience, study in Australia, regional study, partner skills, professional year, and Australian sponsorship. Minimum 65 points to lodge an EOI; competitive scores are usually 85–105.",
  },
  {
    term: "Skills Assessment",
    category: "Skilled Migration",
    definition:
      "A formal evaluation of your qualifications and experience by an assessing authority (e.g., Engineers Australia, ACS, VETASSESS) for your nominated occupation. A positive skills assessment is mandatory before lodging most skilled visas.",
  },
  {
    term: "CDR",
    abbr: "Competency Demonstration Report",
    category: "Documents",
    definition:
      "A detailed engineering portfolio required by Engineers Australia for migration skills assessment. Includes Career Episodes, Summary Statement, and CPD record. Must demonstrate engineering competency against the relevant Stage 1 standards.",
  },
  {
    term: "State Nomination",
    category: "Skilled Migration",
    definition:
      "Approval from an Australian state or territory government to support your skilled visa application. Required for subclasses 190 and 491. Adds 5 (190) or 15 (491) points to your score. Each state has its own occupation list and nomination criteria.",
  },

  // ─── Visa Subclasses ───────────────────────────────────────────────────
  {
    term: "Subclass 189",
    category: "Skilled Migration",
    definition:
      "Skilled Independent visa. Permanent residency for skilled workers who are not sponsored by an employer, state, or family member. Points-tested. No work-location restrictions.",
  },
  {
    term: "Subclass 190",
    category: "Skilled Migration",
    definition:
      "Skilled Nominated visa. Permanent residency requiring state or territory nomination. Provides a 5-point bonus and access to broader occupation lists. Holders commit to live and work in the nominating state for 2 years.",
  },
  {
    term: "Subclass 491",
    category: "Skilled Migration",
    definition:
      "Skilled Work Regional (Provisional) visa. 5-year provisional visa for regional Australia, leading to permanent residency (191) after 3 years of regional living and meeting taxable income requirements. 15-point bonus.",
  },
  {
    term: "Subclass 191",
    category: "Skilled Migration",
    definition:
      "Permanent Residence (Skilled Regional) visa. The PR pathway for 491 visa holders who complete 3 years of regional residency and meet taxable income thresholds. Available from 16 November 2022.",
  },
  {
    term: "Subclass 482",
    category: "Employer",
    definition:
      "Temporary Skill Shortage (TSS) visa. Employer-sponsored work visa with three streams: Short-term (up to 4 years), Medium-term (up to 4 years, MLTSSL), and Labour Agreement. From late 2024, replaced by the new Skills in Demand visa with three corresponding streams.",
  },
  {
    term: "Subclass 186",
    category: "Employer",
    definition:
      "Employer Nomination Scheme (ENS) visa. Permanent residency for skilled workers nominated by an Australian employer. Three streams: Direct Entry, Temporary Residence Transition, and Labour Agreement.",
  },
  {
    term: "Subclass 500",
    category: "Student",
    definition:
      "Student visa. Allows international students to undertake full-time study in Australia. Must hold a Confirmation of Enrolment (CoE), demonstrate financial capacity, meet English requirements, and satisfy the Genuine Student test.",
  },
  {
    term: "Subclass 485",
    category: "Student",
    definition:
      "Temporary Graduate visa. Allows recent graduates to live, study, and work in Australia for 2–6 years depending on qualification and study location. Two streams: Graduate Work and Post-Study Work.",
  },
  {
    term: "Subclass 820/801",
    category: "Family & Partner",
    definition:
      "Partner visa applied onshore. The 820 is a temporary visa granted first; the 801 is the permanent stage assessed approximately 2 years later. Same fee covers both stages.",
  },
  {
    term: "Subclass 309/100",
    category: "Family & Partner",
    definition:
      "Partner visa applied offshore. The 309 is the temporary stage; the 100 is the permanent stage. Must be outside Australia at time of application.",
  },
  {
    term: "Subclass 300",
    category: "Family & Partner",
    definition:
      "Prospective Marriage (Fiancé(e)) visa. For people engaged to marry an Australian citizen, PR, or eligible NZ citizen. Must marry within 9 months of visa grant, then apply for partner visa.",
  },
  {
    term: "Subclass 143",
    category: "Family & Partner",
    definition:
      "Contributory Parent visa (permanent). For parents of Australian citizens, PRs, or eligible NZ citizens. Substantial second visa application charge (approx. AUD $48,495) plus assurance of support. Processing 6–10 years.",
  },
  {
    term: "Subclass 600",
    category: "General",
    definition:
      "Visitor visa for tourism, business visits, or visiting family. Several streams including Tourist, Business Visitor, Sponsored Family, and Frequent Traveller (10-year multiple-entry).",
  },
  {
    term: "Subclass 858",
    category: "General",
    definition:
      "Global Talent visa. Permanent residency for exceptionally talented individuals with internationally recognised achievements in target sectors (tech, fintech, healthcare, engineering, agritech, etc.).",
  },
  {
    term: "Subclass 188",
    category: "Business",
    definition:
      "Business Innovation and Investment (Provisional) visa. Multiple streams (188A Business Innovation, 188B Investor, 188C Significant Investor, 188E Entrepreneur). Pathway to permanent 888 visa.",
  },
  {
    term: "Subclass 888",
    category: "Business",
    definition:
      "Business Innovation and Investment (Permanent) visa. Permanent residency outcome for eligible 188 visa holders who meet investment, business activity, and residency requirements.",
  },

  // ─── Process & Documents ───────────────────────────────────────────────
  {
    term: "Genuine Student",
    abbr: "GS",
    category: "Student",
    definition:
      "The November 2023 replacement for the Genuine Temporary Entrant (GTE) test. Applicants must demonstrate genuine intent to study full-time, comply with visa conditions including 80% attendance, and maintain ties to home country.",
  },
  {
    term: "GTE",
    abbr: "Genuine Temporary Entrant",
    category: "Student",
    definition:
      "Former student visa criterion (replaced by Genuine Student in November 2023). Required applicants to demonstrate their intention to stay temporarily for the purpose of study.",
  },
  {
    term: "CoE",
    abbr: "Confirmation of Enrolment",
    category: "Student",
    definition:
      "An official electronic document issued by an Australian education provider confirming a student has accepted a place in a registered course. Required to apply for a student visa.",
  },
  {
    term: "OSHC",
    abbr: "Overseas Student Health Cover",
    category: "Student",
    definition:
      "Health insurance required as a visa condition (8501) for all student visa holders, covering the entire duration of the visa. Costs typically AUD $500–700/year for single students.",
  },
  {
    term: "Bridging Visa A",
    abbr: "BVA",
    category: "Process",
    definition:
      "A visa granted automatically when you lodge a new substantive visa application onshore while holding a valid visa. Allows you to remain in Australia lawfully until your application is decided.",
  },
  {
    term: "Bridging Visa B",
    abbr: "BVB",
    category: "Process",
    definition:
      "A travel-enabled bridging visa allowing the holder to leave and re-enter Australia while their substantive visa application is being processed. Must be applied for separately and approved before travel.",
  },
  {
    term: "Section 48 Bar",
    category: "Process",
    definition:
      "A legislative bar that prevents an applicant from lodging certain visa applications onshore if they've previously had a visa refused or cancelled while in Australia. Critical to identify early as it limits options.",
  },
  {
    term: "Health Examination",
    category: "Documents",
    definition:
      "Mandatory medical assessment for most visa applications, conducted by Department-approved panel physicians. Includes general examination, chest X-ray (16+), and HIV test for permanent visas (15+).",
  },
  {
    term: "Police Clearance",
    category: "Documents",
    definition:
      "Character certificate required from every country you've lived in for 12 months or more in the last 10 years. Examples: NBI (Philippines), PCC (India), MOI (UAE), AFP (Australia).",
  },
  {
    term: "Apostille",
    category: "Documents",
    definition:
      "An international certification under the Hague Convention validating documents for use abroad. Required for many UAE-issued documents (e.g., marriage certificates, degrees) before submission to Australian authorities.",
  },
  {
    term: "Form 80 / Form 1221",
    category: "Documents",
    definition:
      "Detailed personal particulars forms. Form 80 is required for most permanent residency applicants over 18; Form 1221 may be requested for additional personal information including residential and employment history.",
  },
  {
    term: "Sponsorship",
    category: "Employer",
    definition:
      "Approval for an Australian employer to nominate overseas workers for sponsored visas. Standard Business Sponsorship lasts 5 years. Requires demonstrating a lawfully operating business with genuine need.",
  },
  {
    term: "Nomination",
    category: "Employer",
    definition:
      "The employer's formal application to the Department to nominate a specific overseas worker to fill a specific position. Required before the visa application can be assessed. Different from the visa application itself.",
  },
  {
    term: "Labour Market Testing",
    abbr: "LMT",
    category: "Employer",
    definition:
      "Evidence that an Australian employer has genuinely attempted to recruit Australian citizens or PRs before sponsoring an overseas worker. Must be conducted within 4 months of lodging the nomination.",
  },
  {
    term: "SAF Levy",
    abbr: "Skilling Australians Fund",
    category: "Employer",
    definition:
      "A levy paid by employers when nominating workers under the 482 or 186 visa. Funds Australian apprenticeships. AUD $1,200/year for small business and AUD $1,800/year for large business per 482 worker; AUD $3,000 or $5,000 lump sum for 186.",
  },
  {
    term: "TSMIT / CSIT",
    abbr: "Temporary Skilled Migration Income Threshold / Core Skills Income Threshold",
    category: "Employer",
    definition:
      "Minimum salary required for employer-sponsored visas. CSIT replaced TSMIT in July 2024. Currently AUD $73,150 per year for the Core Skills stream of the Skills in Demand visa. Employers must pay actual market salary, not just the threshold.",
  },
  {
    term: "AHPRA",
    abbr: "Australian Health Practitioner Regulation Agency",
    category: "Skilled Migration",
    definition:
      "The national body regulating registered health practitioners in Australia (doctors, nurses, pharmacists, dentists, allied health). Foreign-trained health professionals must achieve AHPRA registration for skill assessment and practice.",
  },
  {
    term: "ACS",
    abbr: "Australian Computer Society",
    category: "Skilled Migration",
    definition:
      "The skills assessing authority for IT and ICT occupations in Australia. Assesses overseas qualifications and experience against ANZSCO standards for migration purposes. Processing typically 4–6 weeks.",
  },
  {
    term: "VETASSESS",
    abbr: "Vocational Education and Training Assessment Services",
    category: "Skilled Migration",
    definition:
      "Skills assessing authority for professional and trade occupations not covered by other specialist assessors. Handles 350+ occupations including managers, marketers, designers, and some trades.",
  },
  {
    term: "TRA",
    abbr: "Trades Recognition Australia",
    category: "Skilled Migration",
    definition:
      "Skills assessing authority for traditional trade occupations such as electricians, plumbers, carpenters, chefs, hairdressers, and welders. Most pathways require a practical assessment.",
  },
  {
    term: "ANMAC",
    abbr: "Australian Nursing and Midwifery Accreditation Council",
    category: "Skilled Migration",
    definition:
      "Skills assessing authority for nurses and midwives migrating to Australia. Works closely with AHPRA. International nurses typically need IELTS 7 in each band plus credential assessment.",
  },
  {
    term: "Health Surcharge",
    category: "Process",
    definition:
      "Charge for accessing the Department's Health Assessment process. Different from the cost of the medical examination itself. Paid as part of the visa application charge for most visa subclasses.",
  },
  {
    term: "Second VAC",
    abbr: "Second Visa Application Charge",
    category: "Process",
    definition:
      "Additional government fee paid for certain visa subclasses (e.g., 143, some 870 contributions). For the Contributory Parent visa, the Second VAC is approximately AUD $48,495 per applicant.",
  },
  {
    term: "Functional English",
    category: "Process",
    definition:
      "The lowest English language requirement for some Australian visas. Achieved through IELTS overall band 4.5, or evidence of a passport from an English-speaking country, or 5+ years secondary/tertiary education in English.",
  },
  {
    term: "Competent English",
    category: "Process",
    definition:
      "IELTS 6.0 in each of the four bands (or equivalent in PTE, TOEFL, OET, CAE). The minimum English requirement for most skilled migration visas.",
  },
  {
    term: "Proficient English",
    category: "Process",
    definition:
      "IELTS 7.0 in each band (or equivalent). Earns 10 bonus points on the points test for skilled migration.",
  },
  {
    term: "Superior English",
    category: "Process",
    definition:
      "IELTS 8.0 in each band (or equivalent). The highest English level recognised for points-test bonuses, worth 20 points.",
  },
]
