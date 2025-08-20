import type { NavLink, SocialLink, Skill, FocusArea, TimelineItem, Education } from '../types';

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com/grycmat', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mateusz-gryc', label: 'LinkedIn' },
  { href: 'https://101010.pl/@grycmat', label: 'Mastodon' },
  { href: 'https://twitter.com/grycmat', label: 'Twitter/X' },
];

export const skills: Skill[] = [
  {
    icon: 'code',
    title: 'Frontend',
    description: 'I bring designs to life with clean, efficient, and scalable code. My expertise in the Angular ecosystem allows me to build modern and responsive user interfaces.',
  },
  {
    icon: 'mobile-screen-button',
    title: 'Mobile',
    description: "I create beautiful and performant cross-platform mobile applications with Flutter, and I'm also experienced in native Android development for more platform-specific needs.",
  },
  {
    icon: 'screwdriver-wrench',
    title: 'Other Skills',
    description: "I'm a well-rounded developer with experience in agile methodologies, team management, and various other technologies that help me deliver high-quality software.",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Continuous Learning',
    description: "I'm always learning new things and keeping up with the latest trends in the industry.",
  },
  {
    title: 'Native Android Development',
    description: "I'm currently deepening my knowledge of native Android development.",
  },
  {
    title: 'React Native and Flutter Development',
    description: "I'm also exploring React Native to broaden my cross-platform development skills.",
  },
];

export const experience: TimelineItem[] = [
  {
    period: '2024–2025',
    company: 'j-labs software specialists',
    role: 'Angular Developer',
    bullets: [
      'Rewriting legacy AS400 application in modern techstack (Angular 15 on front-end side) for the largest logistic company in Europe.',
      'Planning app architecture.',
      'Preparing development environments.',
      'Code reviewing.',
      'Managing Angular development.',
    ],
  },
  {
    period: '2023',
    company: 'Capco',
    role: 'Front-end Developer',
    summary: 'For Canada-based bank, as a short-term contractor, me and the team were working on front-end architecture for internal app.',
  },
  {
    period: '2017–2023',
    company: 'BinaryMinds',
    roles: [
      {
        period: '2020–2023',
        title: 'Team Leader',
        isPromotion: true,
        description: 'Resume generator (Angular + Material); AS400 warehouse system rewrite; Adobe AIR app rewrite; team lead mentoring developers.',
      },
      {
        period: '2021–2022',
        title: 'Flutter Developer',
        description: 'Podcast app prototype for Mario Barth (iOS/Android) with native integrations (media controls, notifications).',
      },
      {
        period: '2017–2019',
        title: 'Full‑stack Developer',
        description: 'Rewrote legacy resume generator from ColdFusion to Angular 13. Implemented storage, autosave, and mailing.',
      },
    ],
  },
];

export const education: Education = {
  institution: 'Jagiellonian University',
  degree: "Master's degree, Human Computer Interaction",
  period: '2009-2015',
};

export const profileData = {
  name: 'Mateusz Gryc',
  title: 'Senior Software Developer',
  subtitle: 'Crafting Digital Experiences with Code',
  about: `I'm a software artisan with over eight years of experience, dedicated to building beautiful and functional web and mobile applications. My passion lies in turning complex problems into elegant solutions, whether it's a sophisticated web app or a feature-rich mobile experience.

I thrive on continuous learning, constantly exploring new technologies and sharing my knowledge with others. I believe in the power of collaboration and mentorship to create a positive and productive environment.

I am fluent in English and Polish.`,
  cvFileName: 'Mateusz_Gryc.pdf',
};
