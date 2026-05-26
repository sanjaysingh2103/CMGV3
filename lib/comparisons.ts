/**
 * Visa comparison content — bottom-of-funnel SEO pages.
 * Each comparison targets a specific high-intent search query
 * (e.g. "189 vs 190") where users are choosing between two pathways.
 */

export interface ComparisonSpec {
  /** Label for the spec row (e.g. "Visa Type", "Points Required") */
  label: string
  /** Value for visa A. May be marked as a "key difference" via diff flag. */
  a: string
  /** Value for visa B. */
  b: string
  /** When true, this row is highlighted as a key differentiator. */
  diff?: boolean
}

export interface ComparisonPersona {
  /** Short persona name (e.g. "Priya — Software Engineer") */
  name: string
  /** Demographic snapshot: age, qualification, points, location */
  profile: string
  /** Brief story of their situation */
  story: string
  /** Which visa they should choose */
  bestFit: string
  /** Reason for the recommendation */
  reason: string
}

export interface ComparisonChoiceCard {
  /** Visa subclass (e.g. "189") */
  subclass: string
  /** Heading shown on the card (e.g. "Choose 189 if…") */
  heading: string
  /** 4–5 bullets — the situations that point to this visa */
  bullets: string[]
  /** Accent color for the top-border + headline */
  accent: "blue" | "red"
}

export interface ComparisonFaq {
  question: string
  answer: string
}

export interface ComparisonContent {
  /** URL slug, e.g. "189-vs-190" */
  slug: string
  /** Visas being compared, in human-readable form */
  visaA: string
  visaB: string
  /** Index-card description (2 lines, used on /compare landing) */
  shortDescription: string
  /** SEO metadata */
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
  }
  /** Quick verdict: the 2-sentence summary at the top of the page */
  verdict: string
  /** Side-by-side table */
  comparisonTable: {
    columnA: string
    columnB: string
    rows: ComparisonSpec[]
  }
  /** "Choose X if…" decision cards */
  choiceCards: [ComparisonChoiceCard, ComparisonChoiceCard]
  /** 3 real-world personas */
  personas: ComparisonPersona[]
  /** Mistakes applicants commonly make when choosing between these visas */
  mistakes: string[]
  faqs: ComparisonFaq[]
}

/* ────────────────────────────────────────────────────────────────
   1. Subclass 189 vs 190 — Skilled Independent vs Skilled Nominated
   ──────────────────────────────────────────────────────────────── */

const comparison189vs190: ComparisonContent = {
  slug: "189-vs-190",
  visaA: "Subclass 189",
  visaB: "Subclass 190",
  shortDescription:
    "Skilled Independent (189) vs Skilled Nominated (190) — the two main permanent residency pathways under Australia's points-tested skilled program.",
  seo: {
    title: "189 vs 190 Visa: Side-by-Side Comparison (2026) | CMG",
    description:
      "Subclass 189 vs 190 compared — points, processing time, state nomination, work rights and PR. Choose the right Australian skilled visa with MARA-registered advice.",
    keywords: [
      "189 vs 190",
      "subclass 189 vs 190",
      "skilled independent vs skilled nominated",
      "Australian skilled visa comparison",
      "190 state nomination",
      "189 visa points",
      "PR Australia",
      "skilled migration Australia",
    ],
  },
  hero: {
    eyebrow: "Visa Comparison",
    headline: "Subclass 189 vs 190 — Which Skilled Visa Wins?",
    subheadline:
      "Both lead to permanent residency, but only one requires state nomination — and one demands materially higher points. Here's how to choose.",
  },
  verdict:
    "Subclass 189 is the cleaner pathway — no state ties, work anywhere in Australia, but invitation scores have climbed to 90+ points for most occupations. Subclass 190 trades a 2-year obligation to live in your nominating state for an extra 5 points and access to occupations not available on the 189 list — often the only realistic route at 75–85 points.",
  comparisonTable: {
    columnA: "Subclass 189 — Skilled Independent",
    columnB: "Subclass 190 — Skilled Nominated",
    rows: [
      { label: "Visa Type", a: "Permanent Residency (from grant)", b: "Permanent Residency (from grant)" },
      { label: "Sponsorship", a: "None — fully independent", b: "State or territory nomination required", diff: true },
      { label: "Minimum EOI Points", a: "65 points (rarely invited at this score)", b: "65 points + 5 nomination bonus = 70", diff: true },
      { label: "Typical Invitation Score", a: "90–105 points (occupation-dependent)", b: "75–90 points (state criteria-dependent)", diff: true },
      { label: "Occupation List", a: "MLTSSL only (Medium & Long-Term Strategic Skills List)", b: "MLTSSL + STSOL (state-specific lists)", diff: true },
      { label: "Government Fee (primary)", a: "AUD $4,770", b: "AUD $4,770 + nominating state fee ($200–$300)" },
      { label: "Processing Time (75%)", a: "12–24 months from invitation", b: "12–18 months from invitation" },
      { label: "Work Rights", a: "Unrestricted — work anywhere", b: "Moral commitment to nominating state for 2 yrs", diff: true },
      { label: "Geographic Restrictions", a: "None", b: "Live & work in nominating state initially", diff: true },
      { label: "Family Inclusion", a: "Partner, dependent children, eligible relatives", b: "Partner, dependent children, eligible relatives" },
      { label: "Path to Citizenship", a: "4 years from PR + 1 year continuous residence", b: "4 years from PR + 1 year continuous residence" },
      { label: "Travel Facility", a: "5 years from grant, renewable via RRV", b: "5 years from grant, renewable via RRV" },
    ],
  },
  choiceCards: [
    {
      subclass: "189",
      heading: "Choose 189 if…",
      accent: "blue",
      bullets: [
        "You score 90+ points and your occupation is on the MLTSSL.",
        "You want complete freedom to live and work anywhere in Australia.",
        "Your occupation is in high demand nationally (engineers, IT, medical).",
        "You don't want to be tied to a single state for 2 years.",
        "You can wait through occupation-ceiling rounds (some occupations cap quickly).",
      ],
    },
    {
      subclass: "190",
      heading: "Choose 190 if…",
      accent: "red",
      bullets: [
        "You score 75–89 points and need the +5 nomination bonus to compete.",
        "Your occupation is on a state's nomination list but not the MLTSSL.",
        "You have a genuine connection to a state (family, study, work offer).",
        "You're comfortable committing to live and work in one state for 2 years.",
        "Your occupation is over-subscribed under 189 (accounting, business analyst).",
      ],
    },
  ],
  personas: [
    {
      name: "Priya — Senior Software Engineer",
      profile: "Age 30 · 7 yrs ICT experience · IELTS 8.0 · 95 points",
      story:
        "Priya works for a global tech firm in Bangalore and wants to move to Sydney. She holds Superior English, a positive ACS skills assessment for ANZSCO 261313 (Software Engineer), and 8 years of overseas experience.",
      bestFit: "Subclass 189",
      reason:
        "At 95 points with a high-demand MLTSSL occupation, Priya will be invited in the next 189 round. No state commitment means she can take the highest offer from Sydney, Melbourne or Brisbane.",
    },
    {
      name: "Maria — Registered Nurse",
      profile: "Age 34 · ANMAC-assessed RN · IELTS 7.5 · 80 points",
      story:
        "Maria has 6 years of nursing experience in the Philippines and a positive ANMAC assessment. At 80 points her 189 prospects are weak — invitations for ANZSCO 254418 routinely require 85+.",
      bestFit: "Subclass 190",
      reason:
        "Queensland and Victoria both nominate Registered Nurses under 190. The +5 bonus lifts Maria to 85, and Queensland Health actively recruits internationally. She commits to QLD for 2 years and gets PR on grant.",
    },
    {
      name: "James — External Auditor",
      profile: "Age 32 · CPA · IELTS 7.0 · 75 points",
      story:
        "James is an accountant looking at Australia. Accounting (ANZSCO 221111) is severely over-subscribed under 189 — invitation scores have hit 100+ — but multiple states still nominate it under 190 with conditions.",
      bestFit: "Subclass 190",
      reason:
        "James pivots to a 491-then-191 pathway or pursues 190 in NSW with proof of 12 months work experience in a regional area. The state route is realistically his only PR option at this score.",
    },
  ],
  mistakes: [
    "Assuming 190 is 'easier' — every state has its own checklist (committed work offers, regional residence, English thresholds). Some are stricter than 189.",
    "Lodging a 190 EOI without checking the state's nomination list — your occupation may be available federally but not in any state.",
    "Treating the 2-year moral commitment as legally binding — it isn't enforceable in court, but breaking it can trigger PIC 4020 issues for future visas.",
    "Submitting parallel EOIs for both 189 and 190 with different occupations — DOHA flags inconsistency and may invite under the weaker claim.",
    "Forgetting that state nomination is awarded separately from invitation — you must accept the nomination within 14 days or it lapses.",
    "Counting Australian study points twice (under both Australian Study Requirement and Regional Study) — only one applies.",
  ],
  faqs: [
    {
      question: "Can I apply for both 189 and 190 at the same time?",
      answer:
        "Yes — your SkillSelect EOI can target multiple visa subclasses simultaneously. Most candidates lodge for both 189 and 190 (and often 491) to maximise their chance of any invitation. The invitation you receive first is the one you act on.",
    },
    {
      question: "Is the 2-year state commitment under 190 enforceable?",
      answer:
        "It's a moral obligation rather than a strict visa condition — there's no condition 8539 attached to 190 like there is to 491. However, breaking it can damage your character assessment under PIC 4020 if you later apply for citizenship or another visa, and some states share data with DOHA.",
    },
    {
      question: "Which has faster processing — 189 or 190?",
      answer:
        "Median processing for both is similar (12–18 months for 75% of applications). The 190 has an added 2–4 month state nomination step before lodgement, but post-invitation timelines are comparable.",
    },
    {
      question: "Do I lose the 5 nomination points if I move states later?",
      answer:
        "No — once your 190 is granted, the 5 points are baked in. They were used to issue the invitation; they don't 'unwind' if you relocate. But moving early can affect future visa applications (e.g. partner sponsorship character checks).",
    },
    {
      question: "Can I switch from 190 to 189 after grant?",
      answer:
        "There's no need to — both are permanent residency. You hold the same residence and work rights either way. The only practical difference is the state association on your visa record, which has no operational effect on your daily rights.",
    },
    {
      question: "What happens to my 190 if my nominating state withdraws?",
      answer:
        "If withdrawal happens before grant, your invitation lapses. After grant, the visa remains valid — states cannot revoke a granted permanent visa. Withdrawal pre-grant typically only occurs if fraud is detected.",
    },
    {
      question: "Does 190 require a job offer?",
      answer:
        "Generally no — most states nominate based on occupation list, points, English and commitment to settle. However, NSW, WA and ACT increasingly require evidence of employability (CV, contract, or 6+ months of relevant Australian experience) for competitive occupations.",
    },
  ],
}

/* ────────────────────────────────────────────────────────────────
   2. Subclass 189 vs 491 — Permanent vs Regional Provisional
   ──────────────────────────────────────────────────────────────── */

const comparison189vs491: ComparisonContent = {
  slug: "189-vs-491",
  visaA: "Subclass 189",
  visaB: "Subclass 491",
  shortDescription:
    "Skilled Independent (189) permanent residency vs Skilled Work Regional (491) 5-year provisional — when regional living is the smarter strategic move.",
  seo: {
    title: "189 vs 491 Visa: PR vs Regional Provisional Compared (2026)",
    description:
      "189 (permanent) vs 491 (5-year regional provisional with 191 PR pathway). Compare points, processing, regional zones and the 3-year PR transition step.",
    keywords: [
      "189 vs 491",
      "subclass 189 vs 491",
      "skilled regional visa Australia",
      "491 to 191 pathway",
      "regional Australia visa",
      "skilled independent vs regional",
      "PR via 491",
    ],
  },
  hero: {
    eyebrow: "Visa Comparison",
    headline: "Subclass 189 vs 491 — Direct PR or the Regional Route?",
    subheadline:
      "189 grants permanent residency immediately. 491 grants 5-year provisional residency in regional Australia, with PR via the 191 visa after three years of regional living.",
  },
  verdict:
    "If you have 90+ points and a high-demand occupation, go straight for 189 — the regional detour costs you years. If your score is 75–89 points or your occupation is over-subscribed federally, 491 offers the most generous bonus (15 points) and access to nearly every postcode in Australia outside Sydney, Melbourne and Brisbane. Three years of regional residence then unlocks the 191 PR.",
  comparisonTable: {
    columnA: "Subclass 189 — Skilled Independent",
    columnB: "Subclass 491 — Skilled Work Regional (Provisional)",
    rows: [
      { label: "Visa Type", a: "Permanent Residency (immediate)", b: "Provisional — 5 years, with 191 PR pathway", diff: true },
      { label: "Sponsorship", a: "None", b: "State nomination OR eligible regional family sponsor", diff: true },
      { label: "Minimum EOI Points", a: "65 (effective floor 85+)", b: "65 + 15 regional bonus = 80", diff: true },
      { label: "Typical Invitation Score", a: "90–105 points", b: "65–80 points after the +15 bonus", diff: true },
      { label: "Occupation List", a: "MLTSSL", b: "MLTSSL + ROL (Regional Occupation List) — much broader", diff: true },
      { label: "Government Fee (primary)", a: "AUD $4,770", b: "AUD $4,770 + state fee" },
      { label: "Processing Time (75%)", a: "12–24 months", b: "9–18 months (often faster than 189)" },
      { label: "Where You Can Live", a: "Anywhere in Australia", b: "Designated regional area only — condition 8579", diff: true },
      { label: "Where You Can Work", a: "Anywhere in Australia", b: "Designated regional area only", diff: true },
      { label: "Path to Permanent Residency", a: "Immediate on grant", b: "Subclass 191 after 3 years regional living + taxable income", diff: true },
      { label: "Family Inclusion", a: "Partner, dependent children", b: "Partner, dependent children (subject to same conditions)" },
      { label: "Medicare Access", a: "Yes — from grant", b: "Yes — from grant (provisional visas with PR pathway qualify)" },
    ],
  },
  choiceCards: [
    {
      subclass: "189",
      heading: "Choose 189 if…",
      accent: "blue",
      bullets: [
        "You score 90+ points and your occupation is on the MLTSSL.",
        "You want permanent residency immediately — no waiting period.",
        "You need access to Sydney, Melbourne or Brisbane for work.",
        "You're targeting big-city employment in finance, tech or law.",
        "You can wait out competitive 189 rounds for your occupation.",
      ],
    },
    {
      subclass: "491",
      heading: "Choose 491 if…",
      accent: "red",
      bullets: [
        "Your points sit at 75–89 and 189 invitations are out of reach.",
        "You're open to living in regional Australia — Adelaide, Hobart, Newcastle, Geelong all qualify.",
        "Your occupation appears on the Regional Occupation List but not the MLTSSL.",
        "You can commit to 3 years of regional residence to unlock 191 PR.",
        "You have a regional family member who can sponsor you.",
      ],
    },
  ],
  personas: [
    {
      name: "Daniel — Civil Engineer",
      profile: "Age 35 · CivE · IELTS 7.5 · 90 points",
      story:
        "Daniel has 10 years of infrastructure experience in Brazil and wants to settle in Melbourne or Sydney. Civil Engineering is on the MLTSSL with healthy invitation rounds at 90 points.",
      bestFit: "Subclass 189",
      reason:
        "Daniel can compete in 189 rounds at 90 points. Going regional means giving up city career options and adding 3 years before PR — unnecessary when his profile is already strong.",
    },
    {
      name: "Aisha — Early Childhood Teacher",
      profile: "Age 29 · MA(Ed) · IELTS 7.0 · 80 points",
      story:
        "Aisha is an Early Childhood Teacher (ANZSCO 241111) with 4 years of UK experience. At 80 points she's well below recent 189 ECT invitation thresholds (95+), but the occupation is in critical shortage regionally.",
      bestFit: "Subclass 491",
      reason:
        "South Australia and Tasmania nominate ECTs aggressively under 491. The +15 bonus puts Aisha at 95, well above invitation thresholds, and she can live anywhere in SA outside metro Adelaide. After 3 years she transitions to 191 PR.",
    },
    {
      name: "Carlos — Diesel Mechanic",
      profile: "Age 38 · Trade Cert (TRA) · IELTS 6.5 · 70 points",
      story:
        "Carlos has 15 years as a heavy diesel mechanic in Argentina and a positive Trades Recognition Australia (TRA) assessment. Mining and agricultural regions desperately need his skills.",
      bestFit: "Subclass 491",
      reason:
        "Carlos's score of 70 plus the 15-point 491 bonus gets him to 85 — competitive in mining states (WA, NT). The Regional Occupation List explicitly includes Diesel Motor Mechanic. He moves to Kalgoorlie, transitions to 191 in 3 years.",
    },
  ],
  mistakes: [
    "Believing 491 only covers 'remote outback' areas — in reality, nearly all of Australia outside Sydney, Melbourne and Brisbane (including Adelaide, Hobart, Perth, Canberra, Newcastle, Wollongong, Geelong and the Gold Coast) is a designated regional area.",
    "Underestimating the 191 income test — you must demonstrate 3 income years above the Skilled Regional taxable income threshold (AUD $53,900 for 2025–26). Casual or under-the-table work doesn't qualify.",
    "Living outside the designated regional zone during the 491 — even a temporary move to a non-regional postcode resets your 191 clock and breaches condition 8579.",
    "Confusing the 491 with the old 489 — the 489 closed to new applicants in 2019. 491 is a separate visa with different conditions and a different PR pathway (191, not 887).",
    "Assuming your spouse's regional work counts toward 191 — only the primary applicant's residence and taxable income are assessed.",
    "Forgetting that 491 holders cannot enrol children in some state-based public schools at resident rates — check your destination state's policy.",
  ],
  faqs: [
    {
      question: "Is 491 worth the 3-year wait for permanent residency?",
      answer:
        "For most candidates at 75–85 points it's the only realistic PR pathway. The 15-point regional bonus is the largest single boost in the points test. Three years of regional residence then unlocks 191 PR with full rights — a worthwhile trade-off when 189 invitations are out of reach.",
    },
    {
      question: "What is a 'designated regional area'?",
      answer:
        "Under the current definition, all of Australia is designated regional EXCEPT the metropolitan zones of Sydney, Melbourne and Brisbane. That means Adelaide, Perth, Hobart, Canberra, Darwin, plus all of regional NSW, VIC and QLD qualify. The full postcode list is in the Migration Regulations.",
    },
    {
      question: "What are the 191 PR requirements?",
      answer:
        "To transition from 491 to 191 you need: (1) held the 491 for at least 3 years, (2) lived in a designated regional area for that whole period, (3) earned at least the Skilled Regional taxable income threshold for 3 income years, (4) complied with all 491 conditions including 8579.",
    },
    {
      question: "Can I work in Sydney or Melbourne under 491?",
      answer:
        "No. Condition 8579 requires you to live AND work in a designated regional area. A short business trip to Sydney for a meeting is fine; commuting from regional NSW to a Sydney CBD job is not.",
    },
    {
      question: "Does my partner need to live regionally too?",
      answer:
        "Your partner's visa carries the same 8579 condition, but for 191 purposes only the primary applicant's residence and income are assessed. Practically, families live together — but the 191 doesn't penalise a partner who relocates for work, provided you remain regional.",
    },
    {
      question: "What if my income falls below the threshold one year?",
      answer:
        "You need 3 income years above the threshold during the 5-year provisional period. Missing one year is recoverable if you have 3 qualifying years out of 5. Two missed years usually means re-applying for another provisional visa.",
    },
    {
      question: "Can I be sponsored by a regional family member instead of a state?",
      answer:
        "Yes. The 491 has a Family-Sponsored stream where an eligible relative (Australian citizen, PR or eligible NZ citizen) living in a designated regional area sponsors you. The relative must meet residence and age requirements, and provide an Assurance of Support in some cases.",
    },
  ],
}

/* ────────────────────────────────────────────────────────────────
   3. Subclass 482 vs 186 — TSS Work Visa vs ENS Permanent Residency
   ──────────────────────────────────────────────────────────────── */

const comparison482vs186: ComparisonContent = {
  slug: "482-vs-186",
  visaA: "Subclass 482",
  visaB: "Subclass 186",
  shortDescription:
    "TSS 482 (2- or 4-year temporary work visa) vs ENS 186 (permanent employer sponsorship) — when to sign on temporarily and when to go straight for PR.",
  seo: {
    title: "482 vs 186 Visa: TSS vs ENS Employer Sponsored Compared",
    description:
      "Subclass 482 TSS vs 186 ENS — costs, processing, work rights, the 3-year TRT pathway and Direct Entry. Which employer-sponsored visa to choose in 2026.",
    keywords: [
      "482 vs 186",
      "TSS vs ENS",
      "employer sponsored visa Australia",
      "subclass 482 to 186",
      "Direct Entry stream",
      "Temporary Residence Transition",
      "SAF levy",
    ],
  },
  hero: {
    eyebrow: "Visa Comparison",
    headline: "Subclass 482 vs 186 — Temporary First or Straight to PR?",
    subheadline:
      "Both are employer-sponsored. The 482 is a 2- or 4-year temporary work visa; the 186 is permanent residency. Most pathways start with one and end with the other.",
  },
  verdict:
    "Choose the 482 if you're new to your sponsor — it's faster to grant, less onerous for the employer, and serves as a stepping-stone. Choose the 186 directly if you have 3+ years working full-time for the same sponsor (Temporary Residence Transition stream) or if you meet the Direct Entry skills assessment and 3-year overseas work experience requirement.",
  comparisonTable: {
    columnA: "Subclass 482 — Skills in Demand (TSS)",
    columnB: "Subclass 186 — Employer Nomination Scheme (ENS)",
    rows: [
      { label: "Visa Type", a: "Temporary — 2 or 4 years", b: "Permanent Residency (from grant)", diff: true },
      { label: "Streams", a: "Core Skills · Specialist Skills · Essential Skills", b: "Direct Entry · Temporary Residence Transition · Labour Agreement", diff: true },
      { label: "Occupation List", a: "Core Skills Occupation List (CSOL)", b: "Direct Entry: CSOL · TRT: any nominated occupation", diff: true },
      { label: "Employer Requirements", a: "SBS sponsorship + nomination + position", b: "SBS sponsorship + nomination of a permanent role", diff: true },
      { label: "Work Experience Required", a: "2 years post-qualification (occupation-relevant)", b: "Direct Entry: 3 years · TRT: 2 yrs on 482 with sponsor" },
      { label: "Skills Assessment", a: "Mandatory for many occupations", b: "Direct Entry: mandatory · TRT: not required for most", diff: true },
      { label: "English Requirement", a: "IELTS 5.0 each band (Core); 6.0 (Specialist)", b: "IELTS 6.0 each band (or equivalent)" },
      { label: "Government Fee (primary)", a: "AUD $1,495 (short-term) / $3,115 (medium-term)", b: "AUD $4,770" },
      { label: "SAF Levy (employer)", a: "$1,200/yr (small biz) or $1,800/yr (large)", b: "$3,000 (small biz) or $5,000 (large) — one-off", diff: true },
      { label: "Processing Time (75%)", a: "50–70 days", b: "Direct Entry: 9–14 months · TRT: 6–12 months" },
      { label: "Work Rights", a: "Sponsoring employer only (28-day rule for changes)", b: "Unrestricted — work for any employer", diff: true },
      { label: "Path to Permanent Residency", a: "Via 186 TRT after 2 years (Core/Specialist Skills)", b: "Immediate PR on grant", diff: true },
      { label: "Family Inclusion", a: "Partner + dependent children, full work/study rights", b: "Partner + dependent children, full work/study rights" },
    ],
  },
  choiceCards: [
    {
      subclass: "482",
      heading: "Choose 482 if…",
      accent: "blue",
      bullets: [
        "You're new to your sponsoring employer or haven't worked for them yet.",
        "Your employer wants to test the relationship before committing to PR sponsorship.",
        "You need to be in Australia quickly — 482 processing is materially faster.",
        "You'd prefer lower upfront fees (482 is roughly 1/3 the cost of 186).",
        "You expect to switch employers within the first 2 years and don't want PR ties.",
      ],
    },
    {
      subclass: "186",
      heading: "Choose 186 if…",
      accent: "red",
      bullets: [
        "You've held a 482 with the same sponsor for 2+ years (Temporary Residence Transition).",
        "You have 3+ years post-qualification overseas experience and a positive skills assessment (Direct Entry).",
        "You want permanent residency immediately — no provisional waiting period.",
        "You want freedom to change employers in future without re-applying.",
        "You're ready to commit to the sponsor long-term and want full PR benefits.",
      ],
    },
  ],
  personas: [
    {
      name: "Ben — New Hire, UK Architect",
      profile: "Age 32 · 7 yrs experience · just received Sydney job offer",
      story:
        "Ben has been offered a position at a Sydney architectural firm. He hasn't worked for them yet and the firm wants to start him quickly. Architect is on the CSOL with a 4-year 482 stream.",
      bestFit: "Subclass 482",
      reason:
        "Direct 186 isn't realistic — the employer wants to evaluate Ben before committing to permanent sponsorship, and processing would delay his start by 9+ months. 482 gets him in within 8 weeks. After 2 years he transitions to 186 via TRT.",
    },
    {
      name: "Sara — 3-Year 482 Holder",
      profile: "Age 35 · Mechanical Engineer · 3 yrs at current sponsor",
      story:
        "Sara has been on a 482 with her engineering firm since 2023 and has consistently worked full-time. Her sponsor wants to retain her permanently and she meets the income threshold.",
      bestFit: "Subclass 186 (TRT)",
      reason:
        "The Temporary Residence Transition stream is purpose-built for Sara. After 2 years on her 482 with the same sponsor, she qualifies — no skills re-assessment needed for most occupations, and she gets PR with full work rights.",
    },
    {
      name: "Raj — Senior Career Mover",
      profile: "Age 40 · IT Manager · 12 yrs overseas experience · Australian job offer",
      story:
        "Raj has been an IT manager in Singapore for 12 years. A Melbourne fintech wants to hire him for a senior role. He's senior enough that the employer is prepared to sponsor him for PR directly.",
      bestFit: "Subclass 186 (Direct Entry)",
      reason:
        "Raj has the 3+ years of post-qualification experience and a positive ACS skills assessment. Direct Entry gives him PR on arrival — no 2-year 482 detour. The employer pays the larger SAF levy but gains a permanent senior hire.",
    },
  ],
  mistakes: [
    "Switching employers on a 482 without lodging a new nomination within 60 days — your visa is cancelled and any PR progress on the TRT pathway is reset.",
    "Underestimating the SAF levy — for the Direct Entry 186 it's $3,000–$5,000 paid as a one-off. Some employers expect the candidate to reimburse it (this is unlawful but happens).",
    "Assuming TRT requires 4 years of 482 — the threshold dropped to 2 years in 2024. Many applicants still wait unnecessarily.",
    "Using the 482 short-term stream when long-term PR is the goal — short-term 482 has no direct TRT pathway; you must transition to a Medium-Term position first.",
    "Failing the Direct Entry English requirement — IELTS 6.0 in each band is strict. Many engineers and IT pros score 6.5 average but 5.5 in writing, which disqualifies.",
    "Letting the sponsor lapse during 482 holding — if the employer loses Standard Business Sponsor status, your 482 work rights are jeopardised and TRT eligibility may be affected.",
  ],
  faqs: [
    {
      question: "How long must I hold a 482 before applying for 186?",
      answer:
        "Under the current Temporary Residence Transition (TRT) rules, you need to have worked full-time for the same sponsoring employer in the nominated occupation for at least 2 years out of the 3 years immediately before applying. This dropped from 3 years in November 2024.",
    },
    {
      question: "Can I switch sponsors while on a 482?",
      answer:
        "Yes, but you have 60 days from ceasing work with your current sponsor to either lodge a new nomination or depart Australia. The new sponsor must be an approved Standard Business Sponsor and lodge a fresh nomination for your role.",
    },
    {
      question: "Is Direct Entry 186 harder than going via 482 then TRT?",
      answer:
        "Direct Entry has stricter front-end requirements: positive skills assessment, 3 years post-qualification experience, IELTS 6.0 each band. TRT skips most of these because you've already proven yourself in the Australian workplace. For most candidates, 482→TRT is the easier route — but it takes 2+ years.",
    },
    {
      question: "What is the SAF levy and who pays it?",
      answer:
        "The Skilling Australians Fund (SAF) levy is paid by the sponsoring employer (not the visa applicant) when they lodge a nomination. For 482 it's $1,200/yr (small business) or $1,800/yr (large business) up-front for the full visa period. For 186 it's $3,000 or $5,000 as a one-off. Employers cannot lawfully pass this cost to the visa applicant.",
    },
    {
      question: "Can I bring my family on the 482?",
      answer:
        "Yes. Partners and dependent children can be included as secondary applicants. Partners have full work rights with no employer restriction, and children can study at school (some states charge international fees for public schools — check your destination).",
    },
    {
      question: "Does time on the 482 count toward Australian citizenship?",
      answer:
        "Time on the 482 counts toward the 4-year residence requirement for citizenship, BUT you must have at least 1 year as a permanent resident immediately before applying. So time on 482 + time on 186 = total residence, with the final year as PR mandatory.",
    },
    {
      question: "What if my employer's business closes while I'm on a 482?",
      answer:
        "You enter the 60-day cessation window from your last working day. During this period you can lodge a new 482 nomination with a different sponsor (visa stays valid), or depart Australia. The Department also has a Skilling Australians Fund refund process for sponsors in some circumstances.",
    },
  ],
}

/* ──────────────────────────────────────────────────────────────── */

export const comparisons: Record<string, ComparisonContent> = {
  "189-vs-190": comparison189vs190,
  "189-vs-491": comparison189vs491,
  "482-vs-186": comparison482vs186,
}

export const comparisonSlugs = Object.keys(comparisons)

/** Index-page summary for /compare landing page */
export interface ComparisonSummary {
  slug: string
  visaA: string
  visaB: string
  shortDescription: string
  accent: "blue" | "red" | "gold"
}

export const comparisonSummaries: ComparisonSummary[] = [
  {
    slug: "189-vs-190",
    visaA: "189",
    visaB: "190",
    shortDescription: comparisons["189-vs-190"].shortDescription,
    accent: "blue",
  },
  {
    slug: "189-vs-491",
    visaA: "189",
    visaB: "491",
    shortDescription: comparisons["189-vs-491"].shortDescription,
    accent: "red",
  },
  {
    slug: "482-vs-186",
    visaA: "482",
    visaB: "186",
    shortDescription: comparisons["482-vs-186"].shortDescription,
    accent: "gold",
  },
]
