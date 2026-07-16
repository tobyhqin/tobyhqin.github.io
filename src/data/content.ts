// ALL site copy and links live here. Components render this — they never contain copy.
// Source: Toby Qin - Common App activities (2026-07-16).

export type ExperienceItem = {
  org: string
  role: string
  period: string
  bullets: string[]
}

export type WorkItem = {
  title: string
  kind: 'project' | 'paper'
  description: string
  venue?: string
  paperUrl?: string
}

export type ContactLink = {
  label: string
  url: string
}

export const bio = {
  name: 'Toby Qin',
  tagline:
    'Welcome to my portfolio! Scroll down to see a little more about me and what I do.',
  about: [
    `I'm currently a senior at East Chapel Hill HS in North Carolina. I'm also an
     online student at the NC School of Science and Mathematics.`,
    `I serve as the State President for NC DECA, President and Co-Founder of BFF of
     America, and spend my summers doing research at UC Santa Cruz. Outside of academics,
     I enjoy spending time with my dog Misty and going to the gym.`,
  ],
}

export const experience: ExperienceItem[] = [
  {
    org: 'North Carolina DECA',
    role: 'State President & Vice President',
    period: 'Mar 2025 – Present',
    bullets: [
      'Serving 14,000+ members statewide',
      'Launched NC DECA Blueprint, a 16-module professional-skills course with 500+ users, and a volunteer mentorship hub with 300+ users',
      'Revamped the NC DECA app around competition prep for a planned statewide rollout',
    ],
  },
  {
    org: 'Building Financial Futures of America',
    role: 'President & Co-Founder',
    period: 'Jul 2025 – Present',
    bullets: [
      'Co-founded an international 501(c)(3) that has taught financial literacy to 1,700+ K-12 students through 40+ chapters in 15 states',
      'Impacted 10,000+ students, generated 500,000+ social media impressions, and collected 5,000+ items through community drives',
      'Advocating for earlier personal-finance instruction through a legislative proposal with Allen Buansi, planned for introduction next year',
    ],
  },
  {
    org: 'UC Santa Cruz Science Internship Program',
    role: 'Three-time Summer Research Intern',
    period: 'Summer 2024 – Present',
    bullets: [
      'Selected as 1 of 300 from 4,000+ applicants (7.5%) and spent three summers conducting econometrics research at UC Santa Cruz',
      'Continued working with mentor Sajad Tahavori after SIP and co-authored the FAFSA preprint below',
    ],
  },
  {
    org: 'Cornell SC Johnson College of Business',
    role: 'Research Intern',
    period: '2026 – Present',
    bullets: [
      "Working with Michael Lynn, Cornell's Michael D. Johnson and Family Professor of Services Marketing Emeritus, on behavioral economics research about tipping",
      "Co-authoring a paper using a casual restaurant's POS data to study whether automatic gratuities help or hurt servers",
    ],
  },
  {
    org: 'North Carolina Young Scientist Society',
    role: 'Student Researcher',
    period: 'Mar 2024 – Present',
    bullets: [
      'Selected as 1 of 30 students statewide and awarded $500 for independent microbiology research',
      'Used linear mixed-effects models to predict alpha-diversity measures in stormwater runoff',
      'Presented at the North Carolina Museum of Natural Sciences and submitted a 29-page manuscript to Microbiology Spectrum',
    ],
  },
]

export const works: WorkItem[] = [
  {
    title: 'Universal FAFSA Mandates and the Activation of Student Aid',
    kind: 'paper',
    description:
      'With Sajad Tahavori, I examine whether universal FAFSA-completion mandates lead more students to claim financial aid, not just submit the form.',
    venue: 'Preprint, SSRN (2026)',
    paperUrl: 'https://ssrn.com/abstract=7046179',
  },
  {
    title:
      'Does automatic gratuity help or hurt servers? An examination of a casual restaurant’s POS data',
    kind: 'paper',
    description:
      'With Michael Lynn, Cornell’s Michael D. Johnson and Family Professor of Services Marketing Emeritus, I use a casual restaurant’s point-of-sale data to test how automatic gratuities affect server earnings.',
    venue: 'Working paper, Cornell SC Johnson College of Business',
  },
  {
    title: 'Stormwater microbiome modeling',
    kind: 'paper',
    description:
      'I use linear mixed-effects models to predict alpha-diversity measures in stormwater runoff and present the findings in a 29-page manuscript.',
    venue: 'Submitted to Microbiology Spectrum',
  },
  {
    title: 'ICE IGSA facility expansion study',
    kind: 'paper',
    description:
      'With Sajad Tahavori, I examine the relationship between ICE IGSA detention-facility expansion and local demographic and employment outcomes.',
    venue: 'Working paper, UC Santa Cruz',
  },
  {
    title: 'NC DECA app',
    kind: 'project',
    description:
      'The NC DECA app serves 2,000+ users as a competition-prep tool, helping members compare events, choose the right event at different levels of competition, and prepare for each stage.',
  },
]

export const ui = {
  contactIntro: 'Find me here:',
  contactEmail: 'toby@bffofamerica.org',
  paperTag: 'Paper',
  projectTag: 'Project',
  readPaper: 'Read the paper',
}

export const links: ContactLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tobyq/' },
  { label: 'GitHub', url: 'https://github.com/tobyhqin' },
  { label: 'Instagram', url: 'https://instagram.com/toby.qin' },
]
