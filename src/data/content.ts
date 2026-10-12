// ALL site copy and links live here. Components render this — they never contain copy.
// Source: Toby Qin - approved Common App and resume refresh (2026-10-11).

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
    role: 'State President; previously Triad Vice President',
    period: 'Mar 2025 – Present',
    bullets: [
      'Serving 14,000+ members statewide',
      'Launched NC DECA Blueprint, a 16-module professional-skills course with 2,000+ users, and a volunteer mentorship hub with 300+ users',
      'Developed the official NC DECA competition-selection app, serving 3,000+ users',
    ],
  },
  {
    org: 'Building Financial Futures of America',
    role: 'President & Co-Founder',
    period: 'Jul 2025 – Present',
    bullets: [
      'Co-founded an international 501(c)(3) that has taught financial literacy to 10,000+ K-12 students through 100+ chapters in 20 states',
      'Impacted 10,000+ students, generated 1,200,000+ social media impressions, and donated 43,000+ essential items to local families through community drives',
      'Advocating for earlier personal-finance instruction through a legislative proposal with Allen Buansi, planned for introduction in 2027',
    ],
  },
  {
    org: 'UC Santa Cruz Science Internship Program',
    role: 'Three-time Summer Research Intern',
    period: 'Jul 2024 – Aug 2026',
    bullets: [
      'Selected as 1 of 300 from 4,000+ applicants (7.5%) and received $30,000+ across three summers conducting econometrics research at UC Santa Cruz',
      'Continued working with mentor Sajad Tahavori after SIP and first-authored the FAFSA paper published in Applied Economics Letters',
    ],
  },
  {
    org: 'Cornell Nolan School of Hotel Administration',
    role: 'Research Intern',
    period: 'Apr 2026 – Present',
    bullets: [
      "Working with research mentor Michael Lynn, Cornell's Michael D. Johnson and Family Professor of Services Marketing Emeritus, on behavioral economics research about tipping",
      'Co-first-authored a paper using 14,000+ point-of-sale transactions to study automatic gratuities and server pay, accepted for presentation at the 12th International Tourism and Hospitality Management Congress',
    ],
  },
  {
    org: 'North Carolina Young Scientist Society',
    role: 'Four-time Student Researcher',
    period: 'Mar 2024 – Present',
    bullets: [
      'Selected as 1 of 30 students statewide and awarded $750 for independent microbiology research',
      'Used linear mixed-effects models to study the association between impervious cover and culture-based morphotype diversity in runoff collected from 25 storms',
      'Presented at the North Carolina Museum of Natural Sciences and published the sole-author research in Microbiology Spectrum',
    ],
  },
]

export const works: WorkItem[] = [
  {
    title: 'Universal FAFSA Mandates and the Activation of Student Aid',
    kind: 'paper',
    description:
      'With Sajad Tahavori, I examine whether universal FAFSA-completion mandates lead more students to claim financial aid, not just submit the form.',
    venue: 'Published in Applied Economics Letters (2026), advance online publication · Accepted for presentation at the 1st International Conference on Social Sciences',
    paperUrl: 'https://doi.org/10.1080/13504851.2026.2745637',
  },
  {
    title:
      'Does automatic gratuity help or hurt servers? An examination of a casual restaurant’s POS data',
    kind: 'paper',
    description:
      'With Vrund Gurjar and research mentor Michael Lynn, I use 14,000+ point-of-sale transactions from a casual restaurant to study how automatic gratuities affect tipping and server pay.',
    venue: 'Co-first-author preprint, SocArXiv (2026) · Accepted for presentation at the 12th International Tourism and Hospitality Management Congress',
    paperUrl: 'https://doi.org/10.31235/osf.io/d2k4z_v1',
  },
  {
    title: 'Rounding and the Bill-Size Gradient in Restaurant Tipping',
    kind: 'paper',
    description:
      'First-author paper examining how rounding relates to the bill-size gradient in restaurant tipping.',
    venue: 'Published in Journal of Economics and Social Dynamics (2026)',
    paperUrl: 'https://doi.org/10.63721/26JESD0172',
  },
  {
    title: 'Impervious cover is associated with culture-based morphotype diversity in urban stormwater runoff',
    kind: 'paper',
    description:
      'Sole-author paper examining the association between impervious cover and culture-based morphotype diversity in urban stormwater runoff.',
    venue: 'Published in Microbiology Spectrum (2026), advance online publication',
    paperUrl: 'https://doi.org/10.1128/spectrum.04051-25',
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
      'The NC DECA app serves 3,000+ users as a competition-prep tool, helping members compare events, choose the right event at different levels of competition, and prepare for each stage.',
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
