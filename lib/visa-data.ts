/* ─── Points Test Weights (Section 7.1) ───────────────────────────────── */

export interface PointsCategory {
  label: string
  key: string
  options: { label: string; value: number }[]
}

export const pointsCategories: PointsCategory[] = [
  {
    label: "Age",
    key: "age",
    options: [
      { label: "18–24 years", value: 25 },
      { label: "25–32 years", value: 30 },
      { label: "33–39 years", value: 25 },
      { label: "40–44 years", value: 15 },
      { label: "45+ years", value: 0 },
    ],
  },
  {
    label: "English Language Ability",
    key: "english",
    options: [
      { label: "Competent (IELTS 6.0 each)", value: 0 },
      { label: "Proficient (IELTS 7.0 each)", value: 10 },
      { label: "Superior (IELTS 8.0 each)", value: 20 },
    ],
  },
  {
    label: "Overseas Skilled Employment (last 10 yrs)",
    key: "overseasWork",
    options: [
      { label: "Less than 1 year", value: 0 },
      { label: "1–2 years", value: 5 },
      { label: "3–4 years", value: 10 },
      { label: "5–7 years", value: 15 },
      { label: "8–10 years", value: 20 },
    ],
  },
  {
    label: "Australian Skilled Employment (last 10 yrs)",
    key: "australianWork",
    options: [
      { label: "Less than 1 year", value: 0 },
      { label: "1–2 years", value: 5 },
      { label: "3–4 years", value: 10 },
      { label: "5–7 years", value: 15 },
      { label: "8–10 years", value: 20 },
    ],
  },
  {
    label: "Educational Qualifications",
    key: "education",
    options: [
      { label: "Doctorate", value: 20 },
      { label: "Bachelor / Masters degree", value: 15 },
      { label: "Diploma / Trade Certificate III", value: 10 },
      { label: "No post-secondary qualification", value: 0 },
    ],
  },
]

export interface PointsBonus {
  label: string
  key: string
  points: number
  description: string
}

export const pointsBonuses: PointsBonus[] = [
  {
    label: "Australian Study Requirement",
    key: "australianStudy",
    points: 5,
    description: "At least 1 × 2-year award-level course in Australia",
  },
  {
    label: "Study in Regional Australia",
    key: "regionalStudy",
    points: 5,
    description: "Principal course studied in regional Australia",
  },
  {
    label: "Specialist Education Qualification (STEM etc.)",
    key: "specialistEdu",
    points: 10,
    description: "Doctorate/Master by research in a STEM field or designated area",
  },
  {
    label: "Partner Skills & English",
    key: "partnerSkills",
    points: 10,
    description: "Partner meets skills/English requirements (or applicant is single = 10 pts)",
  },
  {
    label: "State Nomination (subclass 190)",
    key: "stateNom",
    points: 5,
    description: "Nominated by an Australian state/territory for 190",
  },
  {
    label: "Regional Nomination (subclass 491)",
    key: "regionalNom",
    points: 15,
    description: "Nominated for a regional 491 visa",
  },
  {
    label: "NAATI Community Language",
    key: "naati",
    points: 5,
    description: "Credentialed community language qualification",
  },
  {
    label: "Professional Year",
    key: "professionalYear",
    points: 5,
    description: "Completed Professional Year program in Australia",
  },
]

export const pointsThresholds = {
  "189": { label: "Subclass 189 (Skilled Independent)", minimum: 65, typical: 85 },
  "190": { label: "Subclass 190 (Skilled Nominated)", minimum: 65, typical: 75 },
  "491": { label: "Subclass 491 (Regional Provisional)", minimum: 65, typical: 65 },
}

/* ─── Fee Estimator (Section 7.2) ──────────────────────────────────────── */

export interface VisaFee {
  subclass: string
  name: string
  primaryApplicant: number
  secondApplicant: number | null
  child: number | null
  notes: string
}

export const visaFees: VisaFee[] = [
  { subclass: "189", name: "Skilled Independent",         primaryApplicant: 4640, secondApplicant: 2320, child: 1160, notes: "Biometrics extra" },
  { subclass: "190", name: "Skilled Nominated",           primaryApplicant: 4640, secondApplicant: 2320, child: 1160, notes: "" },
  { subclass: "491", name: "Skilled Work Regional",       primaryApplicant: 4640, secondApplicant: 2320, child: 1160, notes: "" },
  { subclass: "482", name: "Temporary Skill Shortage",    primaryApplicant: 3115, secondApplicant: null, child: null, notes: "Employer may pay" },
  { subclass: "186", name: "Employer Nomination Scheme",  primaryApplicant: 4640, secondApplicant: 2320, child: 1160, notes: "" },
  { subclass: "820/801", name: "Partner Visa",            primaryApplicant: 8850, secondApplicant: null, child: null, notes: "Single combined application fee" },
  { subclass: "500", name: "Student Visa",                primaryApplicant: 710,  secondApplicant: null, child: 710,  notes: "Per student applicant" },
  { subclass: "485", name: "Temporary Graduate",          primaryApplicant: 1895, secondApplicant: 945, child: 475,  notes: "" },
  { subclass: "188A", name: "Business Innovation (Provisional)", primaryApplicant: 7240, secondApplicant: 3620, child: 1815, notes: "" },
  { subclass: "888", name: "Business Innovation (Permanent)", primaryApplicant: 4640, secondApplicant: 2320, child: 1160, notes: "" },
]

export const additionalCosts = [
  { label: "Health examination (per person)", low: 300, high: 400 },
  { label: "Skills assessment", low: 500, high: 900 },
  { label: "Police check (per country, per adult)", low: 50, high: 100 },
  { label: "English language test (IELTS/PTE)", low: 380, high: 420 },
]

/* ─── Processing Times (Section 7.3) ──────────────────────────────────── */

export interface ProcessingTime {
  visa: string
  stream: string
  seventyFive: string
  ninety: string
}

export const processingTimes: ProcessingTime[] = [
  { visa: "189",     stream: "All",          seventyFive: "6 months",  ninety: "18 months" },
  { visa: "190",     stream: "All",          seventyFive: "7 months",  ninety: "20 months" },
  { visa: "491",     stream: "All",          seventyFive: "8 months",  ninety: "22 months" },
  { visa: "482",     stream: "Short-term",   seventyFive: "3 months",  ninety: "5 months"  },
  { visa: "482",     stream: "Medium-term",  seventyFive: "4 months",  ninety: "7 months"  },
  { visa: "186",     stream: "TRT",          seventyFive: "9 months",  ninety: "22 months" },
  { visa: "186",     stream: "Direct Entry", seventyFive: "9 months",  ninety: "22 months" },
  { visa: "820/801", stream: "Onshore",      seventyFive: "22 months", ninety: "28 months" },
  { visa: "500",     stream: "Student",      seventyFive: "1 month",   ninety: "2 months"  },
  { visa: "485",     stream: "Graduate",     seventyFive: "5 months",  ninety: "10 months" },
  { visa: "188A",    stream: "Business",     seventyFive: "22 months", ninety: "35 months" },
]
