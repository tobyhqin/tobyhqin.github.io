// ALL public-facing site copy and links live here.
// Source authority: Toby's Common App rough draft supplied 2026-07-15.

export type SceneId = 'hero' | 'about' | 'experience' | 'work' | 'contact'

export type Scene = {
  id: SceneId
  number: string
  title: string
  caption: string
  poster: string
  webm: string
  mp4: string
}

export type Metric = {
  value: string
  label: string
}

export type ExperienceItem = {
  org: string
  role: string
  grades: string
  summary: string
}

export type ResearchItem = {
  title: string
  field: string
  status: string
  description: string
}

export type Award = {
  title: string
  scope: string
  detail: string
}

export type ContactLink = {
  label: string
  url: string
}

export const site = {
  name: 'Toby Qin',
  eyebrow: 'Student researcher & builder',
  tagline: 'Researching how systems shape choices — and building programs that help people navigate them.',
  heroAction: 'Follow the trail',
  contactAction: 'Contact',
  aboutTitle: 'Curiosity, put to work.',
  experienceTitle: 'Leadership with a measurable edge.',
  workTitle: 'Questions worth staying with.',
  awardsTitle: 'Selected recognition',
  supportingTitle: 'Also part of the trail',
  contactTitle: 'Let’s compare notes.',
  contactIntro:
    'I’m always glad to talk about research, financial education, student leadership, or a project that brings those worlds together.',
}

export const scenes: Scene[] = [
  {
    id: 'hero',
    number: '01',
    title: 'Trailhead',
    caption: 'A mountain trail at first light.',
    poster: '/media/nature/hero-poster.webp',
    webm: '/media/nature/hero.webm',
    mp4: '/media/nature/hero.mp4',
  },
  {
    id: 'about',
    number: '02',
    title: 'About',
    caption: 'A shaded forest crossing — the quieter part of the route.',
    poster: '/media/nature/about-poster.webp',
    webm: '/media/nature/about.webm',
    mp4: '/media/nature/about.mp4',
  },
  {
    id: 'experience',
    number: '03',
    title: 'Experience',
    caption: 'A ridgeline path splitting toward the next climb.',
    poster: '/media/nature/experience-poster.webp',
    webm: '/media/nature/experience.webm',
    mp4: '/media/nature/experience.mp4',
  },
  {
    id: 'work',
    number: '04',
    title: 'Research & work',
    caption: 'Field notes, maps, and tools laid out at basecamp.',
    poster: '/media/nature/work-poster.webp',
    webm: '/media/nature/work.webm',
    mp4: '/media/nature/work.mp4',
  },
  {
    id: 'contact',
    number: '05',
    title: 'Contact',
    caption: 'The route continues beyond the summit.',
    poster: '/media/nature/contact-poster.webp',
    webm: '/media/nature/contact.webm',
    mp4: '/media/nature/contact.mp4',
  },
]

export const bio = {
  about: [
    `I’m a student at East Chapel Hill High School, class of 2027, working across economics,
     microbiology, financial education, and student leadership. I’m drawn to projects where
     analysis has a clear use: a paper, a curriculum, a public tool, or a stronger organization.`,
    `That has led to three summers of econometrics research at UC Santa Cruz, independent
     microbiology research through NCYSS, and behavioral economics work with Cornell’s SC
     Johnson College of Business. Outside research, I serve North Carolina DECA and co-founded
     Building Financial Futures of America.`,
  ],
  metrics: [
    { value: '14K+', label: 'NC DECA members served' },
    { value: '1.7K+', label: 'students taught financial literacy' },
    { value: '40+', label: 'BFFA chapters across 15 states' },
    { value: '3', label: 'summers of econometrics research' },
  ] satisfies Metric[],
}

export const experience: ExperienceItem[] = [
  {
    org: 'North Carolina DECA',
    role: 'State President & Vice President',
    grades: '10–12',
    summary:
      'Serving 14,000+ members; launched a 16-module professional skills course, the NC DECA Blueprint for 500+ users, a volunteer mentorship hub for 300+ users, and a revamped competition-prep app.',
  },
  {
    org: 'Building Financial Futures of America',
    role: 'President & Co-Founder',
    grades: '11–12',
    summary:
      'Built an international 501(c)(3) with 40+ chapters in 15 states; taught 1,700+ K–12 students, donated 3,000+ items, raised $50,000+, and helped advance earlier personal-finance instruction through the North Carolina Senate.',
  },
  {
    org: 'Finance Club',
    role: 'Co-President',
    grades: '10–12',
    summary:
      'Expanded membership from 10 to 100+ students, prepared teams for state finance and economics competitions, and placed fourth at the National Personal Finance Challenge.',
  },
  {
    org: 'Student & Class Council',
    role: 'Class President & Student Body Treasurer',
    grades: '10–12',
    summary:
      'Elected by 1,700+ students and partnered with local businesses to secure $5,000+ for student events.',
  },
  {
    org: 'Schoolhouse.world',
    role: 'Senior Tutor',
    grades: '10, 12',
    summary:
      'Led seven SAT Math bootcamps for 80 students in 12 countries, completing 116+ tutoring hours and earning the Gold Presidential Volunteer Service Award.',
  },
  {
    org: 'USA Fencing',
    role: 'All-American Saber Fencer',
    grades: '9–12',
    summary:
      'Second-Team All-American and D25-rated saber fencer; peaked third in tournament points across Region 6.',
  },
]

export const supportingActivities = [
  'Science Olympiad varsity competitor — 20+ medals, top-three regional finishes each year, and weekly JV mentorship.',
  'Independent and team competition across Codebusters, Anatomy & Physiology, Experimental Design, and Bottle Rocket.',
]

export const research: ResearchItem[] = [
  {
    title: 'Econometrics at UC Santa Cruz',
    field: 'Science Internship Program',
    status: 'Three summers · ongoing',
    description:
      'Selected as 1 of 300 students from 4,000+ applicants. Conducted econometrics research for three summers and continued working with a mentor toward a peer-reviewed paper.',
  },
  {
    title: 'Stormwater microbiome modeling',
    field: 'North Carolina Young Scientist Society',
    status: 'Independent research · manuscript submitted',
    description:
      'Selected as 1 of 30 students statewide and awarded $500 in funding. Used linear mixed-effects models to predict alpha-diversity measures, presented at the NC Museum of Natural Sciences, and submitted a 29-page manuscript to Microbiology Spectrum.',
  },
  {
    title: 'The behavioral economics of tipping',
    field: 'Cornell SC Johnson College of Business',
    status: 'Research internship · in progress',
    description:
      'Working with Dr. Michael Lynn on a behavioral economics paper examining tipping, with the project being developed for peer review.',
  },
]

export const awards: Award[] = [
  {
    title: 'DECA International Grand Finalist',
    scope: 'National · grades 9–11',
    detail: 'Top 8 at ICDC in Personal Financial Literacy — top 0.5%.',
  },
  {
    title: 'National Personal Finance Challenge',
    scope: 'National · grade 11',
    detail: 'Fourth place nationally — top 0.04%.',
  },
  {
    title: 'Notre Dame Leadership Seminars',
    scope: 'International · grade 11',
    detail: 'Selected as 1 of 150 students for Power of Investing.',
  },
  {
    title: 'Purple Comet! Math Meet',
    scope: 'International · grade 11',
    detail: 'First of 4,804 teams with a perfect 30/30 score.',
  },
]

export const links: ContactLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tobyq/' },
  { label: 'ORCID', url: 'https://orcid.org/0009-0007-8119-4386' },
  { label: 'Instagram', url: 'https://instagram.com/toby.qin' },
  { label: 'GitHub', url: 'https://github.com/tobyhqin' },
  { label: 'Email', url: 'mailto:toby@bffofamerica.org' },
]
