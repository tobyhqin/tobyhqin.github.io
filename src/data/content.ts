// ALL site copy and links live here. Components render this — they never contain copy.
// Source: Toby Qin - Official Resume.docx (2026-07-15).

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
    'I create opportunities at BFFA and spend the rest of my time researching whatever catches my attention.',
  about: [
    `I'm a student at East Chapel Hill High School, where I split my time between
     econometrics, microbiology, and teaching financial literacy.`,
    `I lead North Carolina DECA, co-founded BFFA, and spend my summers doing research
     at UC Santa Cruz. Outside of that, I fence saber and tutor SAT math.`,
  ],
}

export const experience: ExperienceItem[] = [
  {
    org: 'North Carolina DECA',
    role: 'State President & Triad Region Vice President',
    period: 'Mar 2025 – Present',
    bullets: [
      'Leading 13K+ NC DECA members; built a 16-lesson career & leadership course and a volunteer mentorship hub with 800+ combined users',
      'Developed the official NC DECA mobile app (2K+ users)',
      'Created content for @nc.deca and @deca.toby on Instagram — 1M+ impressions',
      'Placed 8th twice at the International Career Development Conference in Personal Financial Literacy (top 0.5%)',
    ],
  },
  {
    org: 'UC Santa Cruz Science Internship Program',
    role: '3× Summer Research Intern',
    period: 'Jul 2024 – Aug 2025',
    bullets: [
      '1 of 300 interns selected from 4,000+ applicants; full scholarship valued at $33,000+',
      'Studied the impact of rising temperatures on population movement in India; modeled effects of crime on local school-enrollment decisions',
      'Continuing research with PhD candidate Sajad Tahavori on the effect of ICE IGSA facility expansion on local demographic and employment outcomes',
    ],
  },
  {
    org: 'Building Financial Futures of America',
    role: 'President & Co-Founder',
    period: 'Jul 2025 – Present',
    bullets: [
      'Founded a national 501(c)(3) nonprofit teaching financial literacy to K-12 students — 300+ students reached in 7 states',
      'Developed a 4-week curriculum for grades 6-12 and targeted lessons for K-5, structured on the CEE National Standards for Financial Literacy',
      'Recruited 8 interns nationwide and 2 UNC professors to the advisory board',
    ],
  },
  {
    org: 'North Carolina Young Scientist Society',
    role: 'Researcher',
    period: 'Mar 2024 – Present',
    bullets: [
      '1 of 30 students selected across North Carolina; secured $500 in funding for independent microbiology research',
      'Collected microbial community data over two years; built linear mixed-effects models predicting alpha diversity in stormwater runoff',
      'Presented at the Fall Symposium at the NC Museum of Natural Sciences',
    ],
  },
  {
    org: 'UNC PRIMES',
    role: 'Research Intern',
    period: 'Jun 2025 – Aug 2025',
    bullets: [
      "Completed ML coursework and conducted neuroimaging research, applying computational methods to Alzheimer's disease",
    ],
  },
  {
    org: 'ECHHS Student Council & Finance Club',
    role: 'Student Body Treasurer · Finance Club Co-President',
    period: 'Sep 2023 – Present',
    bullets: [
      'Elected by 1,700+ students as Student Body Treasurer; secured $3,000+ in fundraising through local business partnerships',
      'Grew Finance Club membership 5× (10 → 50+); placed 2nd at the NC Personal Finance Challenge and 3rd at the NC Economics Challenge',
    ],
  },
]

export const works: WorkItem[] = [
  {
    title: 'Stormwater microbiome modeling',
    kind: 'paper',
    description:
      'Two years of microbial community data behind continuous and binary linear mixed-effects models predicting alpha diversity in stormwater runoff. 29-page manuscript.',
    venue: 'Submitted to Microbiology Spectrum (ASM)',
  },
  {
    title: 'ICE IGSA facility expansion study',
    kind: 'paper',
    description:
      'Ongoing econometrics research (with UCSC PhD candidate Sajad Tahavori) on how ICE IGSA detention-facility expansion affects local demographic and employment outcomes.',
    venue: 'Working paper, UC Santa Cruz',
  },
  {
    title: 'NC DECA mobile app',
    kind: 'project',
    description:
      'Official mobile app for North Carolina DECA — chapter-leader communication for 2K+ users.',
  },
  {
    title: 'NC DECA leadership course & mentorship hub',
    kind: 'project',
    description:
      'A 16-lesson career and technical leadership course plus a volunteer mentorship hub — 800+ combined users.',
  },
  {
    title: 'BFFA financial literacy curriculum',
    kind: 'project',
    description:
      'A 4-week financial literacy curriculum for grades 6-12 with targeted K-5 lessons, built on the CEE National Standards — taught to 300+ students in 7 states.',
  },
]

export const ui = {
  contactIntro: 'Find me here:',
  paperTag: 'Paper',
  projectTag: 'Project',
  readPaper: 'Read the paper',
}

export const links: ContactLink[] = [
  { label: 'Email', url: 'mailto:toby@bffofamerica.org' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tobyq/' },
  { label: 'GitHub', url: 'https://github.com/tobyhqin' },
  { label: 'ORCID', url: 'https://orcid.org/0009-0007-8119-4386' },
  { label: 'Instagram', url: 'https://instagram.com/toby.qin' },
]
